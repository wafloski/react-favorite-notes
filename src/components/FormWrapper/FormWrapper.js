import React from 'react';
import styles from './FormWrapper.module.scss';
import Input from '../Input/Input';

const FormWrapper = ({submitFunc}) => (
    <div className={styles.wrapper}>
        <h2>Add new favourite person</h2>
        <form autoComplete="off" className={styles.form} onSubmit={submitFunc}>
            <Input
                name="name"
                label="Name"
                maxLength={30}
            />
            <Input
                name="link"
                label="Twitter link"
                maxLength={30}
            />
            <Input
                name="image"
                label="Image"
                maxLength={30}
            />
            <Input
                tag="textarea"
                name="description"
                label="Description"
                maxLength={30}
            />
            <button type="submit" className={styles.button}>add new person</button>
        </form>
    </div>
);

export default FormWrapper;