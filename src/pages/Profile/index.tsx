import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';

import {
  Container,
  AvatarContainer,
  Subtitle,
  StyledText,
  ButtonText,
  StyledButton,
} from './styles';

export interface Props {}

const Profile: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <AvatarContainer>
        <Avatar name={profile?.name} color="#ddd3ff" size={150} />
      </AvatarContainer>
      <Subtitle>Name</Subtitle>
      <StyledText>{profile?.name}</StyledText>
      <Subtitle>Email</Subtitle>
      <StyledText>{profile?.email}</StyledText>
      <Subtitle>Register date</Subtitle>
      <StyledText>
        {format(parseISO(profile?.createdAt), 'yyyy/MM/dd')}
      </StyledText>
      <StyledButton onPress={() => dispatch(signOut())}>
        <ButtonText>Logout</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Profile;
