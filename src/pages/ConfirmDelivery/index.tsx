import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';

import { finishDelivery } from '~/store/modules/deliveries/actions';

import Background from '~/components/Background';

import {
  CameraContainer,
  CameraView,
  CameraButton,
  ImagePreview,
  StyledButton,
} from './styles';

export interface Props {}

const ConfirmDelivery: React.FC<Props> = ({ route, navigation }) => {
  const [picture, setPicture] = useState(null);
  const dispatch = useDispatch();
  const { deliveryId } = route.params;
  const cameraRef = useRef(null);

  const handleTakePicture = async () => {
    const data = cameraRef.current?.takePictureAsync();

    if (await data) {
      setPicture(data['_55']);
    }
  };

  const handleSendPicture = async () => {
    if (!picture) return alert('You should take the picture first');

    dispatch(finishDelivery(deliveryId, picture.uri));
    //navigation.navigate('Deliveries');
    navigation.goBack();
  };

  return (
    <Background>
      {picture ? (
        <CameraContainer>
          <ImagePreview source={picture} />
          <CameraButton onPress={() => setPicture(null)}>
            <Icon name="remove-circle" color="#f005" size={80} />
          </CameraButton>
        </CameraContainer>
      ) : (
        <CameraContainer>
          <CameraView ref={cameraRef} />
          <CameraButton onPress={handleTakePicture}>
            <Icon
              style={{ margin: 'auto' }}
              name="camera-alt"
              color="white"
              size={50}
            />
          </CameraButton>
        </CameraContainer>
      )}
      <StyledButton onPress={handleSendPicture}>Send</StyledButton>
    </Background>
  );
};

export default ConfirmDelivery;
