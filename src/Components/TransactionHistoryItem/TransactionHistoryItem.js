import React from 'react';
import styles from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({id, type, amount, currency}) => {
    return (
                   
            <tr className={styles.oneString}>
                <td className={styles.type}>{type}</td>
                <td className={styles.amount}>{amount}</td>
                <td className={styles.currency}>{currency}</td>     
            </tr>    
        
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistoryItem;