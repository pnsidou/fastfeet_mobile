import React, { useState, useEffect } from 'react';

import { StatusBar, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import { listDeliveries } from '~/store/modules/deliveries/actions';

import Avatar from '~/components/Avatar';
import Delivery from '~/components/Delivery';

import {
  Container,
  Header,
  AvatarView,
  Greetings,
  Message,
  Name,
  Logout,
  SubHeader,
  Title,
  Options,
  OptionsButton,
  OptionsText,
} from './styles';

export interface Props {}

const Deliveries: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const deliveries = useSelector((state) =>
    state.deliveries.list.map((delivery) => {
      return {
        ...delivery,
        goToDeliveryInfo: () =>
          navigation.navigate('DeliveryInfo', {
            deliveryId: delivery.id,
          }),
      };
    })
  );
  const [onlyDelivered, setOnlyDelivered] = useState(false);

  useEffect(() => {
    dispatch(listDeliveries(user.id, onlyDelivered));
  }, [dispatch, onlyDelivered, user]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <Header>
        <AvatarView>
          <Avatar name={user?.name} color="#ddd3ff" />
        </AvatarView>
        <Greetings>
          <Message>Welcome back</Message>
          <Name>{user?.name}</Name>
        </Greetings>
        <Logout onPress={() => dispatch(signOut())}>
          <Icon name="input" color="red" size={25} />
        </Logout>
      </Header>
      <SubHeader>
        <Title>Deliveries</Title>
        <Options>
          <OptionsButton onPress={() => setOnlyDelivered(false)}>
            <OptionsText selected={!onlyDelivered}>Pending</OptionsText>
          </OptionsButton>
          <OptionsButton onPress={() => setOnlyDelivered(true)}>
            <OptionsText selected={onlyDelivered}>Delivered</OptionsText>
          </OptionsButton>
        </Options>
      </SubHeader>
      <FlatList
        data={deliveries}
        renderItem={Delivery}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Deliveries;
