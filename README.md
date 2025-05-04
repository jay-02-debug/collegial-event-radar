
# College Event Radar - Campus Event Aggregator Platform

College Event Radar is a modern web application that helps students discover tech talks, hackathons, and workshops happening across multiple colleges and universities. This platform makes it easy to find, filter, and submit tech-related events.

## 🌟 Features

- **Event Discovery**: Browse a comprehensive dashboard of tech events from multiple colleges
- **Event Submission**: Submit new events with detailed information
- **Advanced Filtering**: Filter events by date, event type, college, and text search
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Event Details**: View comprehensive information about each event

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/college-event-radar.git
cd college-event-radar
```

2. Install dependencies:
```sh
npm install
# or
yarn install
```

3. Start the development server:
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🧰 Technology Stack

- **React**: Front-end library for building user interfaces
- **TypeScript**: Static typing for improved development experience
- **Vite**: Next-generation front-end tooling
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **React Hook Form**: Form validation and handling
- **Zod**: Schema validation
- **Tanstack Query**: Data fetching and state management
- **date-fns**: Date manipulation utility
- **Lucide React**: Beautiful, consistent icons

## 📱 Application Structure

- `src/components/`: Reusable UI components
- `src/pages/`: Application pages and routes
- `src/data/`: Mock data for events and colleges
- `src/types/`: TypeScript type definitions
- `src/lib/`: Utility functions and shared logic

## 🎨 UI Components

### Core Pages
1. **Index**: Main dashboard showing all events with filtering options
2. **EventDetails**: Detailed view of a specific event
3. **SubmitEvent**: Form for submitting new events

### Reusable Components
1. **EventCard**: Display event information in a card format
2. **EventFilter**: Filter controls for the event list
3. **EventList**: Display a list of events based on filters
4. **Navbar**: Navigation and header component

## 🔄 Data Flow

1. Events are stored in `src/data/events.ts` (in a real application, this would be fetched from a backend)
2. The `EventList` component receives filter criteria from `EventFilter`
3. Filtered events are displayed as `EventCard` components
4. Clicking an event card navigates to the `EventDetails` page
5. New events can be submitted through the `SubmitEvent` form

## 🚀 Future Enhancements

- User authentication and personalized event recommendations
- Email notifications for upcoming events
- Event registration functionality
- Integration with college calendars through APIs
- Event comments and ratings
- Social sharing features
- Dark mode toggle

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- All colleges and universities that host amazing tech events
- The open-source community for the libraries and tools used in this project

---

Made with ❤️ for tech enthusiasts and college students
