import { NextPage } from 'next';
import styled from 'styled-components';
import Header from './Header';
import { Container } from '@material-ui/core';

const Wrapper = styled.div``;

const Layout: NextPage = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>
      {children}
    </Container>
  </Wrapper>
);

export default Layout;