
import { useEffect, useState } from "react";
import { EventData, FilterOptions } from "@/types";
import { eventsData } from "@/data/events";
import EventCard from "./EventCard";

interface EventListProps {
  filters: FilterOptions;
}

const EventList = ({ filters }: EventListProps) => {
  const [events, setEvents] = useState<EventData[]>(eventsData);

  useEffect(() => {
    let filteredEvents = [...eventsData];

    if (filters.startDate) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= filters.startDate!;
      });
    }

    if (filters.endDate) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate <= filters.endDate!;
      });
    }

    if (filters.type) {
      filteredEvents = filteredEvents.filter((event) => event.type === filters.type);
    }

    if (filters.collegeId) {
      filteredEvents = filteredEvents.filter(
        (event) => event.college.id === filters.collegeId
      );
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.college.name.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
    }

    // Sort events by date, closest first
    filteredEvents.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    setEvents(filteredEvents);
  }, [filters]);

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No events found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters to find more events
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="animate-fade-in">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
