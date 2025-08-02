import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLost from './pages/DashboardLost';
import DashboardFound from './pages/DashboardFound';
import PostLost from './pages/PostLost';
import PostFound from './pages/PostFound';
import ItemDetail from './pages/ItemDetail';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/lost" element={<DashboardLost />} />
        <Route path="/dashboard/found" element={<DashboardFound />} />
        <Route path="/post-lost" element={<PostLost />} />
        <Route path="/post-found" element={<PostFound />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
