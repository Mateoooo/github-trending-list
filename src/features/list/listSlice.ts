import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../store";
import {EListState, IFetchListParams, IListState, IRepository} from "./listTypes";
import axios, {AxiosResponse} from "axios";

const initialState: IListState = {
    listItems: [],
    listState: null
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setListItems: (state, action: PayloadAction<IRepository[]>) => {
            return {listItems: action.payload, listState: EListState.FETCHED}
        },
        setListState: (state, action: PayloadAction<string>) => {
            state.listState = action.payload;
        },
    }
})

export const {setListItems, setListState} = listSlice.actions;

export const fetchListItems = (params: IFetchListParams): AppThunk => (dispatch: (arg0: { payload: string | IRepository[]; type: string; }) => void) => {
    const QueryParams = new URLSearchParams({language: params.language, since: params.since})
    const CallUrl = process.env.REACT_APP_API_ENDPOINT + "/repositories?" + QueryParams.toString();
    dispatch(setListState(EListState.FETCHING))
    return axios.get(CallUrl).then((response: AxiosResponse) => {
        dispatch(setListItems(response.data))
    }).catch(reason => {
        dispatch(setListState(EListState.ERROR))
    })
}

// const sortFunctionByCurrentPeriodStars = (a: IRepository, b: IRepository, sortAscending: boolean) => {
//     if (a.currentPeriodStars < b.currentPeriodStars) return sortAscending ? -1 : 1
//     if (a.currentPeriodStars > b.currentPeriodStars) return sortAscending ? 1 : -1
//     return 0
// }


export const listItems = (state: RootState) => state.list.listItems;
export const listState = (state: RootState) => state.list.listState;

export default listSlice.reducer;
