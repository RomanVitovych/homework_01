import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={styles.transactionHistoryTable}>
                <thead>
                    <tr className={styles.titleList}>
                        <th className={styles.type}>Type</th>
                        <th className={styles.amount}>Amount</th>
                        <th className={styles.currency}>Currency</th>
                    </tr>
                </thead>

                <tbody>               
                    {items.map(item=>
                    <TransactionHistoryItem 
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    />)}
                
                {/* <tr>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;