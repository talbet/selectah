import React from 'react';
import styled from 'styled-components';
import 'styles/global.css';
import { color } from 'styles/variables';
import ListContainer from 'components/ListContainer';
import Text from 'components/Text/';

const Page = styled.div`
  background: ${color.background};
  padding: 1rem;
`;

const Container = styled.div`
  background: ${color.primary};
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  border: 2px solid ${color.primary};
  min-height: calc(100vh - 2rem);
  & > * {
    background: ${color.background};
    padding: 1rem;
  }
`;

const TitleArea = styled.div`
  grid-column: 1/span 2;
  border: 2px solid ${color.primary};
`;
const Sidebar = styled.div`
  border: 2px solid ${color.primary};
`;
const Main = styled.div`
  border: 2px solid ${color.primary};
`;

const App = () => (
  <Page>
    <Container>
      <TitleArea>
        <Text format="title" tag="h1">
          Selectah
        </Text>
      </TitleArea>
      <Sidebar>
        <ListContainer />
      </Sidebar>
      <Main>
        <Text> Main area</Text>
      </Main>
    </Container>
  </Page>
);

export default App;
