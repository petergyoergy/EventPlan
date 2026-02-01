import React from 'react';
import { Link } from 'react-router-dom';
import type { Event } from '../types';
import './EventCard.css';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const isPast = new Date(event.date) < new Date();

    return (
        <div className={`event-card ${isPast ? 'past' : 'upcoming'}`}>
            <div className="event-date">
                <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                <span className="day">{new Date(event.date).getDate()}</span>
            </div>
            <div className="event-info">
                <div className="event-meta">
                    <span className="event-type">{event.type}</span>
                    <span className="event-location">{event.location.name}</span>
                </div>
                <h3 className="event-title">
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </h3>
                <p className="event-desc">{event.description}</p>
                <div className="event-speakers">
                    {event.speakers.map(s => <span key={s.name} className="speaker-tag">{s.name}</span>)}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
