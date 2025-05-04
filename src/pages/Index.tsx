
import { useState } from "react";
import { FilterOptions } from "@/types";
import EventFilter from "@/components/EventFilter";
import EventList from "@/components/EventList";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="py-6 md:py-12">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Campus Tech Events
              </h1>
              <p className="text-xl text-muted-foreground">
                Find hackathons, tech talks, and workshops from top colleges and universities
              </p>
            </div>

            <div className="mb-10">
              <EventFilter onFilterChange={handleFilterChange} />
            </div>

            <div className="mt-8">
              <EventList filters={filters} />
            </div>
          </div>
        </section>
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

export default Index;
