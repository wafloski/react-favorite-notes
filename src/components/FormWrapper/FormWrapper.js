import React from 'react';
import styles from './FormWrapper.module.scss';

const FormWrapper = ({submitFunc}) => (
    <div className={styles.wrapper}>
        <h2>Add new favourite person</h2>
        <form autoComplete="off" className={styles.form} onSubmit={submitFunc}>
            <div className={styles.item}>
                <input
                    type="text"
                    className={styles.input}
                    name="name"
                    placeholder=" "
                    id="name"
                    required
                />
                <label htmlFor="name" className={styles.label}>Name</label>
                <div className={styles.itemBar}/>
            </div>
            <div className={styles.item}>
                <input
                    type="text"
                    className={styles.input}
                    name="link"
                    placeholder=" "
                    id="link"
                    required
                />
                <label htmlFor="link" className={styles.label}>Link</label>
                <div className={styles.itemBar}/>
            </div>
            <div className={styles.item}>
                <input
                    type="text"
                    className={styles.input}
                    name="image"
                    placeholder=" "
                    id="image"
                />
                <label htmlFor="image" className={styles.label}>Image</label>
                <div className={styles.itemBar}/>
            </div>
            <div className={styles.item}>
                <textarea
                    name="description"
                    className={styles.textarea}
                    placeholder=" "
                    id="description"
                    required
                />
                <label htmlFor="description" className={styles.label}>Description</label>
                <div className={styles.itemBar}/>
            </div>
            <button type="submit" className={styles.button}>add new person</button>
        </form>
    </div>
);

export default FormWrapper;