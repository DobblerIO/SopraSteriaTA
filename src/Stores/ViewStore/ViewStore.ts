import { EventEmitter } from "../EventEmitter";

type ViewStoreListener = () => void;

export type ViewName = 'settings';

export class ViewStore {

    private static activeView: ViewName | null = null;
    private static eventEmitter = new EventEmitter<'change', ViewStoreListener>();

    public static getActiveView() {
        return this.activeView;
    }

    public static setActiveView(view: ViewName | null) {
        this.activeView = view;
        this.eventEmitter.emit('change');
    }

    public static onChange(listener: ViewStoreListener) {
        this.eventEmitter.on('change', listener);
    }

    public static offChange(listener: ViewStoreListener) {
        this.eventEmitter.off('change', listener);
    }

}