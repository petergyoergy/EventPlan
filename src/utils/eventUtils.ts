import eventsData from '../data/events.json';
import type { Event } from '../types';

// Cast the JSON import to the Event type array
const events = eventsData as unknown as Event[];

export const getEvents = (): Event[] => {
    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getUpcomingEvents = (): Event[] => {
    const now = new Date();
    return getEvents().filter(event => new Date(event.date) >= now);
};

export const getPastEvents = (): Event[] => {
    const now = new Date();
    return getEvents().filter(event => new Date(event.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getEventById = (id: string): Event | undefined => {
    return events.find(event => event.id === id);
};
