import React from 'react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import EnthusiastRegistration from '../components/EnthusiastRegistration';
import { getUpcomingEvents } from '../utils/eventUtils';
import './Home.css';

const Home: React.FC = () => {
    const upcomingEvents = getUpcomingEvents();
    const nextEvent = upcomingEvents[0];

    return (
        <div className="home-page">
            <Hero />

            <section className="section container">
                <div className="section-header">
                    <h2 className="section-title">Next Event</h2>
                    {nextEvent && <p className="section-subtitle">Don't miss out on our next gathering.</p>}
                </div>

                {nextEvent ? (
                    <div className="next-event-wrapper">
                        <EventCard event={nextEvent} />
                    </div>
                ) : (
                    <div className="no-events">
                        <p>No upcoming events currently scheduled. Check back soon!</p>
                    </div>
                )}
            </section>

            <section className="section container">
                <EnthusiastRegistration />
            </section>

            <section className="section container highlights">
                <div className="highlight-card">
                    <h3>Community Driven</h3>
                    <p>Organized by the community, for the community. Share your knowledge and learn from others.</p>
                </div>
                <div className="highlight-card">
                    <h3>Expert Speakers</h3>
                    <p>Learn from MongoDB experts, champions, and power users who are building at scale.</p>
                </div>
                <div className="highlight-card">
                    <h3>Networking</h3>
                    <p>Meet other developers, architects, and tech leaders in your area.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
