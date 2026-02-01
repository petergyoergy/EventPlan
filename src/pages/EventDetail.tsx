import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../utils/eventUtils';
import './EventDetail.css';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = id ? getEventById(id) : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [event, id]);

    if (!event) {
        return (
            <div className="container event-not-found">
                <h2>Event not found</h2>
                <Link to="/events" className="btn btn-secondary">Back to Events</Link>
            </div>
        );
    }

    const isPast = new Date(event.date) < new Date();
    const eventDate = new Date(event.date);

    return (
        <div className="event-detail-page container">
            <Link to="/events" className="back-link">← Back to Events</Link>

            <header className="event-header">
                <div className="event-header-content">
                    <span className={`event-status ${isPast ? 'status-past' : 'status-upcoming'}`}>
                        {isPast ? 'Past Event' : 'Upcoming Event'}
                    </span>
                    <h1 className="event-title">{event.title}</h1>
                    <div className="event-meta-large">
                        <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>{eventDate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        {event.time && (
                            <div className="meta-item">
                                <span className="meta-icon">⏰</span>
                                <span>{event.time}</span>
                            </div>
                        )}
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>{event.location.name}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="event-content-grid">
                <main className="event-main">
                    <section className="detail-section">
                        <h2>About this Event</h2>
                        <p className="event-description">{event.description}</p>
                        {event.summary && (
                            <div className="event-summary">
                                <h3>Summary</h3>
                                <p>{event.summary}</p>
                            </div>
                        )}
                    </section>

                    {event.speakers.length > 0 && (
                        <section className="detail-section">
                            <h2>Speakers</h2>
                            <div className="speakers-grid">
                                {event.speakers.map((speaker, idx) => (
                                    <div key={idx} className="speaker-card">
                                        <div className="speaker-avatar">
                                            {speaker.name.charAt(0)}
                                        </div>
                                        <div className="speaker-info">
                                            <h3>{speaker.name}</h3>
                                            {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
                                            <div className="speaker-socials">
                                                {speaker.twitter && <a href={`https://twitter.com/${speaker.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>}
                                                {speaker.linkedin && <a href={`https://linkedin.com/in/${speaker.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {event.images && event.images.length > 0 && (
                        <section className="detail-section">
                            <h2>Gallery</h2>
                            <div className="gallery-grid">
                                {event.images.map((img, idx) => (
                                    <div key={idx} className="gallery-item">
                                        <img src={img} alt={`Event highlight ${idx + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>

                <aside className="event-sidebar">
                    <div className="sidebar-card">
                        <h3>Event Details</h3>
                        <div className="sidebar-info">
                            <p><strong>Address:</strong><br />{event.location.address}</p>
                            {event.location.mapUrl && (
                                <a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">View on Map</a>
                            )}
                        </div>

                        {event.meetupLink && (
                            <a href={event.meetupLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">
                                {isPast ? 'View on Meetup' : 'RSVP on Meetup'}
                            </a>
                        )}

                        {event.presentations && event.presentations.length > 0 && (
                            <div className="resources-list">
                                <h4>Downloads</h4>
                                {event.presentations.map((pres, idx) => (
                                    <a key={idx} href={pres.url} className="resource-link" download>
                                        📄 {pres.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default EventDetail;
