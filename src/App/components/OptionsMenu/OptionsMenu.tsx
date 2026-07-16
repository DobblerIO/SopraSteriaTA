import { useState, type FC } from "react";
import { OptionsMenuItem } from "./OptionsMenuItem";
import { EllipsisVerticalIcon, LoaderCircleIcon } from "lucide-react";

import styles from './OptionsMenu.module.css';
import { useQueryClient } from "@tanstack/react-query";

export const OptionsMenu:FC = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    const queryClient = useQueryClient();
    
    const handleRefetchClick = () => {
        queryClient.invalidateQueries({
            queryKey: ['weather-data']
        });
        setMenuIsVisible(false);
    }

    return (
        <div className={styles.container} >

            <button
                className={styles['open-options-menu-button']}
                onClick={() => setMenuIsVisible(true)}
            >
                <EllipsisVerticalIcon />
            </button>

            {menuIsVisible && (
                <div
                    className={styles['options-menu']}
                >
                    <OptionsMenuItem
                        icon={LoaderCircleIcon}
                        label="Refetch"
                        onClick={handleRefetchClick}
                    />
                    {/* <OptionsMenuItem
                        icon={NavigationIcon}
                        label="Set location"
                        onClick={() => console.log('Set location')}
                    /> */}
                </div>
            )}

        </div>
    )
}
