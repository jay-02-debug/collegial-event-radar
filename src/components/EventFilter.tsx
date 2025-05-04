
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon, Filter, Search, X } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { College, EventType, FilterOptions } from "@/types";
import { colleges } from "@/data/events";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

interface EventFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const EventFilter = ({ onFilterChange }: EventFilterProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedType, setSelectedType] = useState<EventType | undefined>();
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onFilterChange({
      startDate: dateRange?.from,
      endDate: dateRange?.to,
      type: selectedType,
      collegeId: selectedCollege || undefined,
      searchQuery: searchQuery || undefined,
    });
  };

  const clearFilters = () => {
    setDateRange(undefined);
    setSelectedType(undefined);
    setSelectedCollege("");
    setSearchQuery("");
    
    onFilterChange({});
  };

  const hasActiveFilters = !!(
    dateRange?.from ||
    dateRange?.to ||
    selectedType ||
    selectedCollege ||
    searchQuery
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !dateRange?.from && !dateRange?.to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "MMM d, yyyy")} -{" "}
                      {format(dateRange.to, "MMM d, yyyy")}
                    </>
                  ) : (
                    format(dateRange.from, "MMM d, yyyy")
                  )
                ) : (
                  <span>Date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <Select
          value={selectedType}
          onValueChange={(value: EventType | undefined) => setSelectedType(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={undefined}>All Types</SelectItem>
            <SelectItem value="tech">Tech Talk</SelectItem>
            <SelectItem value="hackathon">Hackathon</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedCollege} onValueChange={setSelectedCollege}>
          <SelectTrigger>
            <SelectValue placeholder="College" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Colleges</SelectItem>
            {colleges.map((college: College) => (
              <SelectItem key={college.id} value={college.id}>
                {college.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            className="flex-grow flex items-center gap-2"
            onClick={handleSearch}
          >
            <Filter className="h-4 w-4" />
            Apply Filters
          </Button>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="px-3"
              title="Clear filters"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventFilter;
