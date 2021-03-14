import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {ESince} from "../list/listTypes";
import {IListControllerTypes} from "./listControllerTypes";
import {loadState} from "../../localStorage";

const initialState: IListControllerTypes = loadState() ? loadState() : {
    since: ESince.WEEKLY,
    language: 'javascript',
    sortAscending: true
}

export const listControllerSlice = createSlice({
    name: 'listController',
    initialState,
    reducers: {
        setSince: (state, action: PayloadAction<ESince>) => {
            return {...state, since: action.payload}
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            return {...state, language: action.payload}
        },
        setSortType: (state, action: PayloadAction<boolean>) => {
            return {...state, sortAscending: action.payload}
        },
    }
})

export const {setSince, setLanguage, setSortType} = listControllerSlice.actions;
export const listControllerState = (state: RootState) => state.listController;

export default listControllerSlice.reducer;
