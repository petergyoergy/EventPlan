import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Connect with the <span className="hero-highlight">MongoDB</span> Community
                </h1>
                <p className="hero-subtitle">
                    Join developers, architects, and enthusiasts for deep dives, networking, and learning at our quarterly meetups.
                </p>
                <div className="hero-actions">
                    <Link to="/events" className="btn btn-primary">
                        Browse Events
                    </Link>
                    <a href="https://meetup.com/mongodb-berlin" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Join on Meetup
                    </a>
                </div>
            </div>
            <div className="hero-background"></div>
        </section>
    );
};

export default Hero;
