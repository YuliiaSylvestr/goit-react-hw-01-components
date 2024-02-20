import React from 'react';
import userData from './Profile/User.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Data from './Statistics/Data.json';
import FriendsList from './FriendsList/FriendsList';
import friendsData from './FriendsList/FriendsData.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/Transactions.json';
import '../index.css';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={Data} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
