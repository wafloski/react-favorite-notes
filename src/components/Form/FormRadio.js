import React from 'react';
import styles from './FormRadio.module.scss';

const Radio = ({ id, checked, changeFunc, children }) => (
    <label className={styles.radio}>
        <input
            id={id}
            type="radio"
            checked={checked}
            onChange={changeFunc}
        />
        <div className={styles.radioButton}/>
        {children}
    </label>
);

export default Radio;