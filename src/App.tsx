import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import StaysPage from './pages/StaysPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import WhereaboutsPage from './pages/WhereaboutsPage';
import TourRegistrationPage from './pages/TourRegistrationPage';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tours" element={<ToursPage />} />
            <Route path="stays" element={<StaysPage />} />
            <Route path="stays/whereabouts" element={<WhereaboutsPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="tour-registration" element={<TourRegistrationPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
