import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import { RouteProp, NavigationProp } from '@react-navigation/native';

import { listProblemsRequest } from '~/store/modules/problems/actions';

import {
  Subtitle,
  StyledList,
  ProblemBox,
  StyledDescription,
  StyledDate,
} from './styles';

import Background from '~/components/Background';

export interface Props {
  route: RouteProp;
  navigation: NavigationProp;
}

const ViewProblems: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { deliveryId } = route.params;
  const delivery = useSelector((state) =>
    state.deliveries.list.find((item) => item.id === deliveryId)
  );

  useEffect(() => {
    dispatch(listProblemsRequest(deliveryId));
  }, [dispatch, deliveryId]);

  console.tron.log('view problems', delivery);
  return (
    <Background>
      <Subtitle>Delivery {deliveryId}</Subtitle>
      <StyledList
        data={delivery.problems}
        renderItem={({ item }) => (
          <ProblemBox>
            <StyledDescription>{item.description}</StyledDescription>
            <StyledDate>
              {format(parseISO(item.createdAt), 'yyyy/MM/dd')}
            </StyledDate>
          </ProblemBox>
        )}
      />
    </Background>
  );
};

export default ViewProblems;
