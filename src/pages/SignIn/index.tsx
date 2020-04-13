import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Background, Container, Form, FormInput, SubmitButton } from './styles';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [deliverymanId, setDeliverymanId] = useState(null);

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(new Number(deliverymanId)));
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Container>
        <Image style={{ tintColor: 'white' }} source={logo} alt="" />
        <Form>
          <FormInput
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your deliveryman id..."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={deliverymanId && deliverymanId?.toString()}
            onChangeText={setDeliverymanId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Sign in
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
};

export default SignIn;
