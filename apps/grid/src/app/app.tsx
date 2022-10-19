import React, { Suspense } from 'react';
import Grid from './components/Grid';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
const Shell = React.lazy(() => import('ShellApp/shell'));

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shell>
        <Grid />
      </Shell>
    </Suspense>
  );
}

export default App;
