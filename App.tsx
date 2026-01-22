import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LuxuryVariant from './components/LuxuryElegantVariant';
import MenuPage from './components/MenuPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LuxuryVariant />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;