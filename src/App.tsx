import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ImageModal } from './components/ImageModal';
import { SearchPage } from './pages/SearchPage';
import { HomePage } from './pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/photos">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<ImageModal />} />
        </Route>

        <Route path="/search" element={<SearchPage />}>
          <Route index element={<SearchPage />} />
        </Route>

        <Route path="*" element={<h1>Page not Fount</h1>} />
      </Routes>
    </>
  );
};

export default App;
