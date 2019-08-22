import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, href}) => (
    <>
    {
        href ? (
            <a
                href={href}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ) : (
            <button type="submit" className={styles.button}>
                {children}
            </button>
        )
    }
    </>
);

export default Button;