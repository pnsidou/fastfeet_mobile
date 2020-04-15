import React, { useMemo, useCallback } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  InfoBox,
  InfoBoxHeader,
  Title,
  StyledText,
  DateRow,
  DateColumn,
  VSpace,
  ButtonBox,
  ButtonBorderFrame,
  StyledButton,
  ButtonText,
} from './styles';

import Background from '~/components/Background';

export interface Props {
  route: RouteProp;
  navigation: NavigationProp;
}

const DeliveryInfo: React.FC<Props> = ({ route, navigation }) => {
  const { deliveryId } = route.params;
  const delivery = useSelector((state) =>
    state.deliveries.list.find((item) => item.id === deliveryId)
  );

  const recipient = useMemo(() => delivery.recipient, [delivery]);

  const deliveryStatus = useMemo(() => {
    if (delivery.start_date) {
      return delivery.end_date ? 'Delivered' : 'On the way';
    }
    return 'To be retrieved';
  }, [delivery.start_date, delivery.end_date]);

  const handleNavigate = useCallback(
    (path) => {
      navigation.navigate(path, { deliveryId });
    },
    [deliveryId]
  );

  return (
    <Background>
      <InfoBox>
        <InfoBoxHeader>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <Title>Info</Title>
        </InfoBoxHeader>
        <StyledText>RECIPIENT</StyledText>
        <StyledText>{recipient.name}</StyledText>
        <VSpace />
        <StyledText>ADDRESS</StyledText>
        <StyledText>
          {recipient.street}, {recipient.number}, {recipient.city}-
          {recipient.state}, {recipient.zip_code}
        </StyledText>
        <VSpace />
        <StyledText>PRODUCT</StyledText>
        <StyledText>{delivery.product}</StyledText>
      </InfoBox>
      <InfoBox>
        <InfoBoxHeader>
          <IconCommunity name="calendar" color="#7159c1" size={20} />
          <Title>Schedule</Title>
        </InfoBoxHeader>
        <StyledText>STATUS</StyledText>
        <StyledText>{deliveryStatus}</StyledText>
        <VSpace />
        <DateRow>
          <DateColumn>
            <StyledText>RETRIEVAL DATE</StyledText>
            <StyledText>
              {delivery.start_date
                ? format(parseISO(delivery.start_date), 'yyyy/MM/dd')
                : '- - - - / - - / - -'}
            </StyledText>
          </DateColumn>
          <DateColumn>
            <StyledText>DELIVERY DATE</StyledText>
            <StyledText>
              {delivery.end_date
                ? format(parseISO(delivery.end_date), 'yyyy/MM/dd')
                : '- - - - / - - / - -'}
            </StyledText>
          </DateColumn>
        </DateRow>
      </InfoBox>
      <ButtonBox>
        <StyledButton onPress={() => handleNavigate('RegisterProblem')}>
          <Icon name="highlight-off" color="red" size={25} />
          <ButtonText>Register problem</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => handleNavigate('ViewProblems')}>
          <ButtonBorderFrame>
            <Icon name="error-outline" color="#ed0" size={25} />
            <ButtonText>View problems</ButtonText>
          </ButtonBorderFrame>
        </StyledButton>
        <StyledButton onPress={() => handleNavigate('ConfirmDelivery')}>
          <IconCommunity
            name="check-circle-outline"
            color="#7159c1"
            size={25}
          />
          <ButtonText>Confirm delivery</ButtonText>
        </StyledButton>
      </ButtonBox>
    </Background>
  );
};

export default DeliveryInfo;
