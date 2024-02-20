import s from './FriendsList.module.css';

import React from 'react';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
