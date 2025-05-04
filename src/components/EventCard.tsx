import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { EventData } from "../types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  const { id, title, date, endDate, type, location, college, image } = event;
  
  const formatEventDate = () => {
    const startDate = new Date(date);
    
    if (!endDate) {
      return format(startDate, "MMM d, yyyy");
    }
    
    const end = new Date(endDate);
    
    // If same day, return only one date
    if (format(startDate, "yyyy-MM-dd") === format(end, "yyyy-MM-dd")) {
      return format(startDate, "MMM d, yyyy");
    }
    
    // If same month, return format like "May 15-20, 2025"
    if (format(startDate, "MMM yyyy") === format(end, "MMM yyyy")) {
      return `${format(startDate, "MMM d")}-${format(end, "d, yyyy")}`;
    }
    
    // Otherwise, return full range
    return `${format(startDate, "MMM d, yyyy")} - ${format(end, "MMM d, yyyy")}`;
  };

  const getEventTypeBadge = () => {
    switch (type) {
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
  
  return (
    <Link to={`/event/${id}`}>
      <Card className="overflow-hidden h-full event-card-transition">
        <div className="relative">
          <div className="h-48 w-full overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>
          <div className="absolute top-3 right-3">
            {getEventTypeBadge()}
          </div>
        </div>
        
        <div className="p-4 flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{title}</h3>
          
          <div className="flex items-center text-sm text-muted-foreground gap-1.5">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatEventDate()}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground gap-1.5">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="text-sm font-medium mt-1">
            {college.name}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default EventCard;
