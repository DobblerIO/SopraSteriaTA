import { LoaderCircleIcon } from "lucide-react";
import type { FC } from "react";

import styles from './RefetchingStatus.module.css';

export const RefetchingStatus: FC = () => {
    return (
        <div className={styles.container} >
            <span>Refetching</span>
            <LoaderCircleIcon className={styles.loadingIcon} />
        </div>
    );
}
