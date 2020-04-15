import React from 'react';
import { StatusBar } from 'react-native';

import { Container, ColorSegment, Content } from './styles';

export interface Props {
  children?: any;
}

const Background: React.FC = ({ children }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <ColorSegment />
      <Content>{children}</Content>
    </Container>
  );
};

export default Background;
