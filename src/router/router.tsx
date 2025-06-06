import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/main/Main';
import Inventory from '@/pages/inventory/Inventory';
import Uproad from '@/pages/uproad/Uproad';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tools_list" element={<Inventory />} />
        <Route path="/uproad" element={<Uproad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
