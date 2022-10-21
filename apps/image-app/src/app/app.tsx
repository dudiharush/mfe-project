import React, { Suspense } from 'react';
import Image from './components/Image';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
const Shell = React.lazy(() => import('MainApp/shell'));

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shell>
        <Image />
      </Shell>
    </Suspense>
  );
}

export default App;
