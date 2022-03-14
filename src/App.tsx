import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
