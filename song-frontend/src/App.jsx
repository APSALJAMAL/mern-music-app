import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from './admin/AdminLayout';
import { UserLayout } from './UserLayout';
import DisplayAlbum from './components/DisplayAlbum';

const App = () => {
    
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />

    </Routes>
  );
};

export default App;
