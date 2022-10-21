import React, { Suspense } from 'react';
import List from './components/List';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
const Shell = React.lazy(() => import('MainApp/shell'));

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shell>
        <List list={['a', 'b', 'c']} />
      </Shell>
    </Suspense>
  );
}

export default App;
