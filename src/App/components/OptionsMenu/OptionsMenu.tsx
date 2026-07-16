import { useState, type FC } from "react";
import { OptionsMenuItem } from "./OptionsMenuItem";
import { EllipsisVerticalIcon, LoaderCircleIcon, NavigationIcon } from "lucide-react";

import styles from './OptionsMenu.module.css';
import { useQueryClient } from "@tanstack/react-query";
import { useViewStore } from "../../../Stores/ViewStore";

export const OptionsMenu:FC = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    const queryClient = useQueryClient();
    const { setActiveView } = useViewStore();
    
    const handleRefetchClick = () => {
        queryClient.invalidateQueries({
            queryKey: ['weather-data']
        });
        setMenuIsVisible(false);
    }

    const handleSettingsClick = () => {
        setActiveView('settings');
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
                    <OptionsMenuItem
                        icon={NavigationIcon}
                        label="Settings"
                        onClick={handleSettingsClick}
                    />
                </div>
            )}

        </div>
    )
}
