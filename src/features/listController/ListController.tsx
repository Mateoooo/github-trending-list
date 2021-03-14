import React from "react";
import {Languages} from "./languages";
import "./listController.scss";
import {AiOutlineArrowDown, AiOutlineArrowUp, FaStar} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {listControllerState, setLanguage, setSince, setSortType} from "./listControllerSlice";
import {ESince} from "../list/listTypes";

export default function ListController(): JSX.Element {
    const dispatch = useDispatch()
    const state = useSelector(listControllerState);

    return <div className={"list-controller"}>
        <div className={"item"}>
            <span className={"item-header"}>Language</span>
            <div className={"item-content"}>
                <select name={"languages-list"} onChange={event => dispatch(setLanguage(event.target.value))}
                        value={state.language}>
                    {Languages.map(item => <option value={item.urlParam} key={item.urlParam}>{item.name}</option>)}
                </select>
            </div>
        </div>
        <div className={"item"}>
            <span className={"item-header"}>Time period</span>
            <div className={"item-content"}>
                <div>
                    <input type={'radio'} name={"period"} value={'daily'} checked={state.since === 'daily'}
                           onChange={event => dispatch(setSince(ESince.DAILY))}/>
                    <label>Daily</label>
                </div>
                <div>
                    <input type={'radio'} name={"period"} value={'weekly'} checked={state.since === 'weekly'}
                           onChange={event => dispatch(setSince(ESince.WEEKLY))}/>
                    <label>Weekly</label>
                </div>
                <div>
                    <input type={'radio'} name={"period"} value={'monthly'} checked={state.since === 'monthly'}
                           onChange={event => dispatch(setSince(ESince.MONTHLY))}/>
                    <label>Monthly</label>
                </div>
            </div>
        </div>
        <div className={"item"}>
            <span className={"item-header"}>Number of stars</span>
            <div className={"item-content item-content--row"}
                 onClick={() => dispatch(setSortType(!state.sortAscending))}>
                <FaStar className={"icon gold"}/>
                {state.sortAscending ? <AiOutlineArrowDown className={"icon"}/> :
                    <AiOutlineArrowUp className={"icon"}/>}

            </div>
        </div>
    </div>
}
