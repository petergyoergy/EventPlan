import React, { useState } from 'react';
import './EnthusiastRegistration.css';

const EnthusiastRegistration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !name) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Registered enthusiast:', { name, email });

            // TODO: Future integration - Send this data to a backend API connected to MongoDB
            // const response = await fetch('/api/register', { method: 'POST', body: JSON.stringify({ name, email }) });

            // Create JSON blob and trigger download
            const data = JSON.stringify({ name, email, timestamp: new Date().toISOString() }, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `enthusiast_${Date.now()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            setStatus('success');
            setEmail('');
            setName('');

            // Reset status after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <div className="registration-card">
            <h3 className="registration-title">Become an Enthusiast</h3>
            <p className="registration-subtitle">Get the latest MongoDB event updates delivered to your inbox.</p>

            {status === 'success' ? (
                <div className="registration-success">
                    <span className="success-icon">✓</span>
                    <p>Thanks for signing up! We'll keep you posted.</p>
                </div>
            ) : (
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-submit"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Signing up...' : 'Sign Up'}
                    </button>
                    <p className="registration-note">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            )}
        </div>
    );
};

export default EnthusiastRegistration;
