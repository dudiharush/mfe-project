import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import ThemeProvider from '../providers/theme';

import './shell.css';

const Grid = React.lazy(() => import('GridApp/grid'));
const Text = React.lazy(() => import('TextApp/text'));
const Image = React.lazy(() => import('ImageApp/image'));
const List = React.lazy(() => import('ListApp/list'));



interface Props {
  children: React.ReactNode;
}

export default function Shell({ children }: Props) {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Text />} />
            <Route path="grid" element={<Grid />} />
            <Route path="image" element={<Image />} />
            <Route path="list" element={<List />} />
            <Route path="*" element={<Text />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {children}
    </ThemeProvider>
  );
}
