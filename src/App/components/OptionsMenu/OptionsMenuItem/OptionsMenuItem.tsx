import type { FC } from "react"

import styles from './OptionsMenuItem.module.css';

interface OptionsMenuItemProps {
    label: string;
    icon: FC;
    onClick: () => void;
}

export const OptionsMenuItem:FC<OptionsMenuItemProps> = props => {
    const {
        label,
        icon: IconComponent,
        onClick,
    } = props;

    return (
        <button
            className={styles.container}
            onClick={onClick}
        >
            <span>{label}</span>
            <IconComponent />
        </button>
    )   
}
