import React from 'react';
import './Main.css';
import Profile from '../Profile/Profile';
import user from '../../Info/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../Info/statistical-data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../Info/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../Info/transactions.json';

const Main = () => {
    return (
        <main>
            <div>
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />           
            </div>
            <div>
                <Statistics title="Upload stats" stats={statisticalData} />,
            </div>
            <div>
                <FriendList friends={friends} />
            </div>
            <div>
                <TransactionHistory items={transactions} />
            </div>
        </main>
    );
};

export default Main;