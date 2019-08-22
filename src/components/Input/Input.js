import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength}) => (
    <div className={styles.item}>
        <Tag
            type="text"
            className={ Tag === 'textarea' ? styles.textarea : styles.input }
            name={name}
            id={name}
            required
            maxLength={maxLength}
            placeholder=" "
        />
        <label htmlFor={name} className={styles.label}>{label}</label>
        <div className={styles.itemBar}/>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200
}

export default Input;