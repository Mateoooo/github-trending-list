import {IListControllerTypes} from "./features/listController/listControllerTypes";

export const saveState = (state:IListControllerTypes) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('listControllerState', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('listControllerState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
