import React, {useCallback, useEffect} from 'react';
import "./list.scss";
import RepositoryItem from "../../components/listItem/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems, listItems, listState} from "./listSlice";
import {EListState, IFetchListParams, IRepository} from "./listTypes";
import {listControllerState} from "../listController/listControllerSlice";


export default function List(): JSX.Element {
    const dispatch = useDispatch();
    const items: IRepository[] = useSelector(listItems);
    const state = useSelector(listState);
    const listController = useSelector(listControllerState);


    useEffect(() => {
        dispatch(fetchListItems({language: listController.language, since: listController.since}));
    }, [dispatch, listController.language, listController.since])

    const sortFunction = useCallback((a: IRepository, b: IRepository) => {
        if (a?.currentPeriodStars < b?.currentPeriodStars) return listController.sortAscending ? -1 : 1
        if (a?.currentPeriodStars > b?.currentPeriodStars) return listController.sortAscending ? 1 : -1
        return 0
    }, [listController.sortAscending])

    const getSortedRepositories = useCallback(() => {
        return items.slice().sort(sortFunction);
    }, [items, sortFunction])

    return <>
        {state === EListState.FETCHING && <div className={"state"}>⏱ Loading</div>}
        {(state === EListState.FETCHED && items.length > 0) && <ul className={"list"}>
            {getSortedRepositories().map((repository: IRepository, index: number) => <RepositoryItem {...repository}
                                                                                                     key={repository.name + index}/>)}
        </ul>}
        {(state === EListState.FETCHED && items.length === 0) ?
            <div className={"state"}>😞 No results found</div> : null}
        {state === EListState.ERROR && <div className={"state"}>😔 An error occurred</div>}
    </>
}
