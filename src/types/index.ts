export interface Speaker {
    name: string;
    bio?: string;
    twitter?: string;
    linkedin?: string;
}

export interface Event {
    id: string;
    title: string;
    date: string; // ISO 8601 YYYY-MM-DD
    time?: string;
    location: {
        name: string;
        address: string;
        mapUrl?: string; // Google Maps link
    };
    type: 'UserGroup' | 'MongoDBDay' | 'Special';
    speakers: Speaker[];
    description: string;
    meetupLink?: string;
    summary?: string; // Markdown content for past events
    images?: string[]; // URLs
    presentations?: {
        title: string;
        url: string;
    }[];
}
