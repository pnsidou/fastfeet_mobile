import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { RouteProp, NavigationProp } from '@react-navigation/native';

import { registerProblem } from '~/store/modules/problems/actions';

import Background from '~/components/Background';

import { StyledInput, StyledButton, ButtonText } from './styles';

export interface Props {
  route: RouteProp;
  navigation: NavigationProp;
}

const RegisterProblem: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { deliveryId } = route.params;

  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(() => {
    dispatch(registerProblem(deliveryId, description));
    navigation.goBack();
  }, [deliveryId, description, navigation]);

  return (
    <Background>
      <StyledInput
        multiline
        placeholder="Describe the problem here..."
        onChangeText={setDescription}
      />
      <StyledButton onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </StyledButton>
    </Background>
  );
};

export default RegisterProblem;
