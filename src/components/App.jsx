import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Description } from 'pages/description/Description';
import { Home } from 'pages/home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
