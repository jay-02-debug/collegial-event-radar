
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Clock, Globe, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { eventsData } from "@/data/events";
import { EventData } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        const foundEvent = eventsData.find((e) => e.id === id);
        
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          navigate("/404", { replace: true });
        }
      } catch (error) {
        console.error("Failed to fetch event:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id, navigate]);

  const handleShare = () => {
    const shareData = {
      title: `Campus Event: ${event?.title}`,
      text: `Check out this event: ${event?.title}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this event with others",
      });
    }
  };

  const getEventTypeBadge = () => {
    if (!event) return null;
    
    switch (event.type) {
      case 'tech':
        return <Badge className="bg-event-tech hover:bg-event-tech/80">Tech Talk</Badge>;
      case 'hackathon':
        return <Badge className="bg-event-hackathon hover:bg-event-hackathon/80">Hackathon</Badge>;
      case 'workshop':
        return <Badge className="bg-event-workshop hover:bg-event-workshop/80">Workshop</Badge>;
      default:
        return <Badge>Event</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-80 bg-muted rounded"></div>
            <div className="h-6 w-40 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Event not found</h1>
            <p className="text-muted-foreground mb-6">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="text-primary hover:underline">
              Return to home page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatEventDate = () => {
    const startDate = new Date(event.date);
    
    if (!event.endDate) {
      return format(startDate, "EEEE, MMMM d, yyyy");
    }
    
    const end = new Date(event.endDate);
    
    // If same day, return only one date with time range
    if (format(startDate, "yyyy-MM-dd") === format(end, "yyyy-MM-dd")) {
      return format(startDate, "EEEE, MMMM d, yyyy");
    }
    
    // Return full date range
    return `${format(startDate, "EEEE, MMMM d")} - ${format(end, "EEEE, MMMM d, yyyy")}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="section-container">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {getEventTypeBadge()}
                  <span className="text-muted-foreground">
                    {event.college.name}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{formatEventDate()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {event.image && (
                <div className="rounded-lg overflow-hidden my-6">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full object-cover max-h-80"
                  />
                </div>
              )}

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">About this Event</h2>
                <div className="whitespace-pre-line">
                  {event.description}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Date & Time</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{formatEventDate()}</span>
                    </div>
                    {event.endDate && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Multi-day event
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {event.college.location}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Organized by</h3>
                    <div className="text-muted-foreground">
                      {event.college.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <Button asChild className="w-full">
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" />
                        Visit Event Website
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={handleShare}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Event
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="section-container">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} CampusEvents • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EventDetails;
