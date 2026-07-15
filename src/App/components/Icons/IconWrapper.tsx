import type { FC } from "react";

import styles from './IconWrapper.module.css';

interface IconWrapperProps {
    children: React.ReactNode;
}

export const IconWrapper:FC<IconWrapperProps> = props => {
    const {
        children,
    } = props;

    return (
        <div className={styles.container} >
            {children}
        </div>
    );
}
