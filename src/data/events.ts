
import { EventData, College } from '../types';

// Mock colleges
export const colleges: College[] = [
  { id: 'mit', name: 'MIT', location: 'Cambridge, MA' },
  { id: 'stanford', name: 'Stanford University', location: 'Stanford, CA' },
  { id: 'cmu', name: 'Carnegie Mellon University', location: 'Pittsburgh, PA' },
  { id: 'berkeley', name: 'UC Berkeley', location: 'Berkeley, CA' },
  { id: 'gatech', name: 'Georgia Tech', location: 'Atlanta, GA' },
];

// Mock events data
export const eventsData: EventData[] = [
  {
    id: 'event1',
    title: 'AI Research Symposium',
    description: 'Join leading AI researchers for a day of talks and discussions about the latest advancements in artificial intelligence and machine learning. Topics include large language models, computer vision, and ethical AI development.',
    date: '2025-05-15T09:00:00Z',
    type: 'tech',
    location: 'Stata Center, MIT',
    college: colleges[0],
    link: 'https://example.com/ai-symposium',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop'
  },
  {
    id: 'event2',
    title: 'HackSU 2025',
    description: 'Stanford\'s premier hackathon! Over 48 hours, build projects, network with industry sponsors, and win amazing prizes. Open to all students regardless of experience level.',
    date: '2025-06-10T18:00:00Z',
    endDate: '2025-06-12T18:00:00Z',
    type: 'hackathon',
    location: 'Tressider Memorial Union, Stanford University',
    college: colleges[1],
    link: 'https://example.com/hacksu',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop'
  },
  {
    id: 'event3',
    title: 'Blockchain Development Workshop',
    description: 'Learn to build decentralized applications (dApps) in this hands-on workshop. We\'ll cover smart contract development with Solidity and front-end integration using Web3.js.',
    date: '2025-05-22T13:00:00Z',
    type: 'workshop',
    location: 'Gates Center for Computer Science, CMU',
    college: colleges[2],
    link: 'https://example.com/blockchain-workshop',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop'
  },
  {
    id: 'event4',
    title: 'Women in Tech Summit',
    description: 'Celebrating women in technology fields with keynotes from industry leaders, networking opportunities, and career workshops. Open to all genders who support diversity in tech.',
    date: '2025-07-08T10:00:00Z',
    type: 'tech',
    location: 'Soda Hall, UC Berkeley',
    college: colleges[3],
    link: 'https://example.com/wit-summit',
    image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=800&auto=format&fit=crop'
  },
  {
    id: 'event5',
    title: 'Cybersecurity Hackathon',
    description: 'Test your cybersecurity skills in this competitive hackathon. Teams will work to identify and patch vulnerabilities in provided systems while defending against attacks from other teams.',
    date: '2025-06-24T09:00:00Z',
    endDate: '2025-06-25T17:00:00Z',
    type: 'hackathon',
    location: 'Klaus Advanced Computing Building, Georgia Tech',
    college: colleges[4],
    link: 'https://example.com/cybersec-hack',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop'
  },
  {
    id: 'event6',
    title: 'Mobile App Development Workshop',
    description: 'Learn to build cross-platform mobile applications using React Native. This workshop will cover environment setup, component design, state management, and deploying to app stores.',
    date: '2025-05-30T15:00:00Z',
    type: 'workshop',
    location: 'Packard Electrical Engineering Building, Stanford University',
    college: colleges[1],
    link: 'https://example.com/mobile-workshop',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&auto=format&fit=crop'
  },
  {
    id: 'event7',
    title: 'Quantum Computing Lecture Series',
    description: 'A three-part lecture series exploring the fundamentals of quantum computing, delivered by leading researchers in the field. No prior quantum physics knowledge required.',
    date: '2025-06-05T16:00:00Z',
    type: 'tech',
    location: 'Physics Building, MIT',
    college: colleges[0],
    link: 'https://example.com/quantum-lectures',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop'
  },
  {
    id: 'event8',
    title: 'Game Development Workshop',
    description: 'Build your own 2D game in this intensive weekend workshop. We\'ll cover game design principles, asset creation, and implementation using the Unity game engine.',
    date: '2025-06-15T10:00:00Z',
    type: 'workshop',
    location: 'GHC Building, Carnegie Mellon University',
    college: colleges[2],
    link: 'https://example.com/game-workshop',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop'
  }
];
