import React, { Suspense } from 'react';
import Text from './components/Text'

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
const Shell = React.lazy(() => import('MainApp/shell'));

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shell><Text /></Shell>
    </Suspense>
  );
}

export default App;
