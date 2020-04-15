import React from 'react';

import {
  Container,
  DrawContainer,
  Line,
  Point,
  TextContainer,
  StyledText,
} from './styles';

export interface Props {
  retrieved: boolean;
  delivered: boolean;
}

const DeliveryStatus: React.FC<Props> = ({ retrieved, delivered }) => {
  return (
    <Container>
      <DrawContainer>
        <Point active />
        <Line />
        <Point active={retrieved} />
        <Line />
        <Point active={delivered} />
      </DrawContainer>
      <TextContainer>
        <StyledText>Waiting retrieval</StyledText>
        <StyledText>Retrieved</StyledText>
        <StyledText>Delivered</StyledText>
      </TextContainer>
    </Container>
  );
};

export default DeliveryStatus;
