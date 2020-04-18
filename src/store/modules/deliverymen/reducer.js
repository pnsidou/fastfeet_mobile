import React from 'react';

import produce from 'immer';

import Avatar from '~/components/Avatar';

const avatarColors = ['#dd8', '#bbe', '#fcc', '#ada'];

const INITIAL_STATE = { list: [] };

export default function deliverymen(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliverymen/LIST_SUCCESS': {
        const deliverymen = action.payload.map(deliveryman => {
          const color =
            avatarColors[Math.floor(Math.random() * avatarColors.length)];

          const avatarComponent = (
            <Avatar
              name={deliveryman.name}
              url={deliveryman.avatar && deliveryman.avatar.url}
              color={color}
            />
          );

          return {
            ...deliveryman,
            avatar: { ...deliveryman.avatar, component: avatarComponent },
          };
        });

        draft.list = deliverymen;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
