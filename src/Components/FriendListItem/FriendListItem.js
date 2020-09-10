import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
    
    return (
        <div>
            <li className={styles.item}>
                <span className=
                    {isOnline 
                    ? styles.online 
                    : styles.offline}>
                    </span>
                <img className={styles.avatar} 
                src={avatar} 
                alt={name} 
                width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;