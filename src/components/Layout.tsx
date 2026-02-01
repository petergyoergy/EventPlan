import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        Events<span className="logo-highlight">Plan</span>
                    </Link>
                    <nav className="nav">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
                        <a href="https://github.com/peter/EventPlan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </nav>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} MongoDB User Group. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
