import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
    <li className={styles.wrapper}>
        <img src={image}
             alt={name}
             className={styles.image}
        />
        <div>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <a href={twitterLink} className={styles.button} target="_blank" rel="noopener noreferrer">visit twitter page</a>
        </div>
    </li>
);


ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
};

export default ListItem;