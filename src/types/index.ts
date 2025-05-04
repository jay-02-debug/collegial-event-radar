
export type EventType = 'tech' | 'hackathon' | 'workshop';

export type College = {
  id: string;
  name: string;
  location: string;
};

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  endDate?: string; // ISO date string for multi-day events
  type: EventType;
  location: string;
  college: College;
  link: string;
  image?: string;
}

export type FilterOptions = {
  startDate?: Date;
  endDate?: Date;
  type?: EventType;
  collegeId?: string;
  searchQuery?: string;
};
