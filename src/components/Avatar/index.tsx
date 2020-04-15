import React from 'react';
import { Image } from 'react-native';

import { StyledAvatar, StyledText } from './styles';

function Avatar({ name, size = 70, uri, color }) {
  if (uri) return <StyledAvatar source={{ uri }} />;

  const splitName = name.split(' ');

  let firstLetters = '';

  if (splitName.length > 1) {
    const lastIndex = splitName.length - 1;
    firstLetters = splitName[0][0] + splitName[lastIndex][0];
  } else {
    firstLetters = splitName && splitName[0][0];
  }

  return (
    <StyledText size={size} color={color}>
      {firstLetters.toUpperCase()}
    </StyledText>
  );
}

export default Avatar;
