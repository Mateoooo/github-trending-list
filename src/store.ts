import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import listReducer from "./features/list/listSlice";
import listControllerReducer from "./features/listController/listControllerSlice";
import {saveState} from "./localStorage";


export const store = configureStore({
    reducer: {
        list: listReducer,
        listController: listControllerReducer
    },
});

store.subscribe(() => {
    saveState(store.getState().listController);
})
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
