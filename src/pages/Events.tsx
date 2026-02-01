import React from 'react';
import EventCard from '../components/EventCard';
import { getUpcomingEvents, getPastEvents } from '../utils/eventUtils';
import './Events.css';

const Events: React.FC = () => {
    const upcomingEvents = getUpcomingEvents();
    const pastEvents = getPastEvents();

    return (
        <div className="events-page container">
            <header className="page-header">
                <h1 className="page-title">Events Schedule</h1>
                <p className="page-subtitle">Join us at our upcoming meetups or browse the archive.</p>
            </header>

            <section className="events-section">
                <h2 className="section-heading">Upcoming Events</h2>
                {upcomingEvents.length > 0 ? (
                    <div className="events-grid">
                        {upcomingEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No upcoming events scheduled at the moment.</p>
                    </div>
                )}
            </section>

            <section className="events-section">
                <h2 className="section-heading">Past Events</h2>
                <div className="events-grid">
                    {pastEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;
