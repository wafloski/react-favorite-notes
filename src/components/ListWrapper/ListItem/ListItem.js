import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => {
    const ImageTag = image ? "img" : "div";

    return (
        <li className={styles.wrapper}>
            <ImageTag
                src={image}
                alt={name}
                className={image ? styles.image : styles.imageNone}
            />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <a href={twitterLink} className={styles.button} target="_blank" rel="noopener noreferrer">visit twitter page</a>
            </div>
        </li>
    )
};



ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    image: null,
    description: "One of the best developers"
}

export default ListItem;