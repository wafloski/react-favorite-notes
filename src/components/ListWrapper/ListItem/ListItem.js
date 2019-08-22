import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../../Button/Button';
import Title from '../../Title/Title';

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
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button href={twitterLink}>visit person page</Button>
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
};

export default ListItem;