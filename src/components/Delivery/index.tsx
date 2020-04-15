import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

import { parseISO, format } from 'date-fns';

import DeliveryStatus from '~/components/DeliveryStatus';

import {
  Container,
  StatusContainer,
  StatusHeader,
  StatusHeaderText,
  InfoContainer,
  StyledTitle,
  StyledText,
  Date,
  City,
  Details,
} from './styles';

export interface Props {
  item: any;
}

function Delivery({ item }) {
  const retrieved = item.start_date != null;
  const delivered = item.end_date != null;

  return (
    <Container>
      <StatusContainer>
        <StatusHeader>
          <Icon name="local-shipping" color="#7159c1" size={20} />
          <StatusHeaderText>Delivery {item.id}</StatusHeaderText>
        </StatusHeader>
        <DeliveryStatus retrieved={retrieved} delivered={delivered} />
      </StatusContainer>
      <InfoContainer>
        <Date>
          <StyledTitle>Date</StyledTitle>
          <StyledText>
            {format(parseISO(item.createdAt), 'yyyy/MM/dd')}
          </StyledText>
        </Date>
        <City>
          <StyledTitle>City</StyledTitle>
          <StyledText>{item.recipient.city}</StyledText>
        </City>
        <RectButton onPress={item.goToDeliveryInfo}>
          <Details>See details</Details>
        </RectButton>
      </InfoContainer>
    </Container>
  );
}

export default Delivery;
