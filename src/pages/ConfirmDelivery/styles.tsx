import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const CameraContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
`;

export const CameraView = styled(RNCamera)`
  flex: 1;
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

export const ImagePreview = styled.Image`
  height: 100%;
  resize-mode: contain;
  border-radius: 5px;
`;

export const CameraButton = styled(RectButton)`
  flex-direction: row;
  background: #999a;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0;
  bottom: 40px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const VSpacer = styled.View`
  height: 40px;
`;

export const StyledButton = styled(Button)`
  margin: 30px 0;
  background-color: #7159c1;
`;
