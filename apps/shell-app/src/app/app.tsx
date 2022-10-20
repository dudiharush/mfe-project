import React from 'react';
import './app.module.css';
import Shell from './components/shell';
import styled from 'styled-components';

const Grid = React.lazy(() => import('GridApp/grid'));
const Text = React.lazy(() => import('TextApp/text'));
const Image = React.lazy(() => import('ImageApp/image'));
const List = React.lazy(() => import('ListApp/list'));

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(50%, 50%) minmax(50%, 50%);
  grid-template-rows: minmax(50%, 50%) minmax(50%, 50%);
  width: 100vw;
  height: 100vh;
`;

export function App() {
  return (
    <Shell>
      <GridContainer>
        <Grid />
        <Text />
        <Image />
        <List list={Array.from({length: 10}, (_, i) => `item ${i + 1}`)
} />
      </GridContainer>
    </Shell>
  );
}

export default App;
