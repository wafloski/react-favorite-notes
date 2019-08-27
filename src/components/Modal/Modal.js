import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFunc }) => (
    <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModalFunc}></button>
        <Form/>
    </div>
);

export default Modal;