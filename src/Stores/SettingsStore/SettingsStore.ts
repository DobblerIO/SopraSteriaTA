import { EventEmitter } from "../EventEmitter";

type SettingsStoreListener = () => void;

export interface SettingsData {
    location: string;
    unitSystem: 'metric' | 'imperial';   
}

const DEFAULT_SETTINGS: SettingsData = {
    location: 'Amsterdam',
    unitSystem: 'metric',
};

const LOCAL_STORAGE_KEY = 'WeatherSettingsData';

export class SettingsStore {

    private static data: SettingsData = this.readFromLocalStorage();

    private static eventEmitter = new EventEmitter<'change', SettingsStoreListener>();

    private static readFromLocalStorage(): SettingsData {
        const localStorageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!localStorageData) {
            return DEFAULT_SETTINGS;
        }
        return JSON.parse(localStorageData);
    }

    private static writeToLocalStorage() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }

    public static getSettingsData() {
        return this.data;
    }

    public static setSettingsData(settings: SettingsData) {
        this.data = settings;
        this.writeToLocalStorage();
        this.eventEmitter.emit('change');
    }

    public static onChange(listener: SettingsStoreListener) {
        this.eventEmitter.on('change', listener);
    }

    public static offChange(listener: SettingsStoreListener) {
        this.eventEmitter.off('change', listener);
    }

}