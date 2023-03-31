import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import MovieList from './Movies';
import Podcasts from './Podcasts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="movies" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
