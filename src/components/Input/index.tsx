import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

interface Props {
  style?: object | object[];
  icon?: string;
}

const Input: React.FC<Props> = ({ style = {}, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef<TInput, Props>(Input);
