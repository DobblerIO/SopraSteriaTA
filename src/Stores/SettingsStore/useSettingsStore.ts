import { useEffect, useState } from "react"
import { SettingsStore, type SettingsData } from "./SettingsStore"

export const useSettingsStore = () => {

    const [data, setData] = useState(SettingsStore.getSettingsData());

    useEffect(() => {
        const handleChange = () => {
            setData(SettingsStore.getSettingsData());
        }

        SettingsStore.onChange(handleChange);

        return () => {
            SettingsStore.offChange(handleChange);
        }
    }, [])

    return {
        settingsData: data,
        setSettingsData: (settings: SettingsData) => SettingsStore.setSettingsData(settings),
    }
}