import React, { useMemo, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { NavigationProp, RouteProp } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import {
  startDelivery,
  listDeliveries,
} from '~/store/modules/deliveries/actions';
import { listDelivered } from '~/store/modules/delivered/actions';

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
import { actionChannel } from 'redux-saga/effects';

export interface Props {
  route: RouteProp;
  navigation: NavigationProp;
}

const activityIndicator = (
  <ActivityIndicator style={{ height: 20, width: 20 }} />
);

const DeliveryInfo: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { deliveryId } = route.params;
  const delivery = useSelector(
    (state) =>
      state.deliveries.list.find((item) => item.id === deliveryId) ||
      state.delivered.list.find((item) => item.id === deliveryId)
  );

  const recipient = useMemo(() => delivery?.recipient, [delivery]);

  const shouldUpdateDelivery = useSelector(
    (state) => !(state.deliveries.updated && state.delivered.updated)
  );

  useEffect(() => {
    if (delivery && shouldUpdateDelivery) {
      dispatch(listDeliveries(delivery.deliveryman_id));
      dispatch(listDelivered(delivery.deliveryman_id));
    }
  }, [shouldUpdateDelivery, delivery, dispatch]);

  const deliveryStatus = useMemo(() => {
    if (!delivery) return activityIndicator;

    if (delivery.start_date) {
      return delivery?.end_date ? 'Delivered' : 'On the way';
    }
    return 'To be retrieved';
  }, [delivery]);

  const handleNavigate = useCallback(
    (path) => {
      navigation.navigate(path, { deliveryId });
    },
    [deliveryId, navigation]
  );

  return (
    <Background>
      <InfoBox>
        <InfoBoxHeader>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <Title>Info - delivery {deliveryId}</Title>
        </InfoBoxHeader>
        <StyledText>RECIPIENT</StyledText>
        <StyledText>{recipient?.name}</StyledText>
        <VSpace />
        <StyledText>ADDRESS</StyledText>
        <StyledText>
          {recipient?.street}, {recipient?.number}, {recipient?.city}-
          {recipient?.state}, {recipient?.zip_code}
        </StyledText>
        <VSpace />
        <StyledText>PRODUCT</StyledText>
        <StyledText>{delivery?.product}</StyledText>
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
              {delivery?.start_date
                ? format(parseISO(delivery.start_date), 'yyyy/MM/dd')
                : '- - - - / - - / - -'}
            </StyledText>
          </DateColumn>
          <DateColumn>
            <StyledText>DELIVERY DATE</StyledText>
            <StyledText>
              {delivery?.end_date
                ? format(parseISO(delivery.end_date), 'yyyy/MM/dd')
                : '- - - - / - - / - -'}
            </StyledText>
          </DateColumn>
        </DateRow>
      </InfoBox>
      <ButtonBox>
        {!delivery?.end_date && (
          <StyledButton onPress={() => handleNavigate('RegisterProblem')}>
            <Icon name="highlight-off" color="red" size={25} />
            <ButtonText>Register problem</ButtonText>
          </StyledButton>
        )}
        <StyledButton onPress={() => handleNavigate('ViewProblems')}>
          <ButtonBorderFrame>
            <Icon name="error-outline" color="#ed0" size={25} />
            <ButtonText>View problems</ButtonText>
          </ButtonBorderFrame>
        </StyledButton>
        {!delivery?.start_date && (
          <StyledButton onPress={() => dispatch(startDelivery(deliveryId))}>
            <IconCommunity name="timer" color="#5a5" size={25} />
            <ButtonText>Start delivery</ButtonText>
          </StyledButton>
        )}
        {delivery?.start_date && !delivery?.end_date && (
          <StyledButton onPress={() => handleNavigate('ConfirmDelivery')}>
            <IconCommunity
              name="check-circle-outline"
              color="#7159c1"
              size={25}
            />
            <ButtonText>Confirm delivery</ButtonText>
          </StyledButton>
        )}
      </ButtonBox>
    </Background>
  );
};

export default DeliveryInfo;
