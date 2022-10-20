import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={children} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
