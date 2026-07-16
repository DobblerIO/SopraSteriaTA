import { useState, type FC } from "react";

import styles from './SettingsMenu.module.css';
import { useViewStore } from "../../../Stores/ViewStore";
import { useSettingsStore } from "../../../Stores/SettingsStore";

type UnitSystem = 'metric' | 'imperial';

export const SettingsMenu: FC = () => {

    const { setActiveView } = useViewStore();
    const { settingsData, setSettingsData } = useSettingsStore();

    const [location, setLocation] = useState(settingsData.location);
    const [unitSystem, setUnitSystem] = useState<UnitSystem>(settingsData.unitSystem);

    const handleCancel = () => {
        setActiveView(null);
    }

    const handleSave = () => {
        setSettingsData({ location, unitSystem });
        setActiveView(null);
    }

    return (
        <div className={styles.container} >

            <label className={styles['form-control']}>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
            </label>

            <label className={styles['form-control']}>
                Unit system:
                <select
                    value={unitSystem}
                    onChange={(e) => setUnitSystem(e.target.value as UnitSystem)}
                >
                    <option value="metric" >Metric</option>
                    <option value="imperial" >Imperial</option>
                </select>
            </label>

            <div className={styles['form-buttons']} >
                <button onClick={handleCancel} >Cancel</button>
                <button onClick={handleSave} >Save Changes</button>
            </div>

        </div>
    )

}