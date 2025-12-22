import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ChatBot from './components/ChatBot';

// Lazy load components for performance optimization
const HomePage = lazy(() => import('./components/HomePage'));
const ServicePage = lazy(() => import('./components/ServicePage'));
const StickersLabelsPage = lazy(() => import('./components/StickersLabelsPage'));
const LetterheadsPage = lazy(() => import('./components/LetterheadsPage'));
const IDCardsPage = lazy(() => import('./components/IDCardsPage'));



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || ''}>
      <ScrollToTop />
      <ChatBot />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/visiting-cards" element={<ServicePage serviceName="visiting-cards" />} />
          <Route path="/service/flyers" element={<ServicePage serviceName="flyers" />} />
          <Route path="/service/banners" element={<ServicePage serviceName="banners" />} />
          <Route path="/service/document-printing" element={<ServicePage serviceName="document-printing" />} />
          <Route path="/service/photo-printing" element={<ServicePage serviceName="photo-printing" />} />
          <Route path="/service/stickers-labels" element={<StickersLabelsPage />} />
          <Route path="/service/letterheads" element={<LetterheadsPage />} />
          <Route path="/service/id-cards" element={<IDCardsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
