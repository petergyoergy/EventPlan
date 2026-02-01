import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="events/:id" element={<EventDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
