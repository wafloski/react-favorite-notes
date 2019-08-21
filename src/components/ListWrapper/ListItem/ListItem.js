import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
    <li className="listItem__wrapper">
        <img src={image}
             alt={name}
             className="listItem__image"
        />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button" target="_blank" rel="noopener noreferrer">visit twitter page</a>
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