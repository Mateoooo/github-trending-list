import React from "react";
import {IRepository} from "../../features/list/listTypes";
import "./listItem.scss";
import {FaStar} from "react-icons/fa";
import {AiOutlineFork} from "react-icons/ai";
import styled from "styled-components";

export default function RepoItem(repository: IRepository): JSX.Element {
    return <li className={"repository"}>
        <img src={repository.avatar} className={"repository__avatar"} alt={"repository-avatar"}/>
        <div className={"repository__data"}>
            <a href={repository.url} className={"repository__name"}>{repository.name}</a>
            <p>{repository.description}</p>
            <div className={"repository__info"}>
                <span className={"repository__info__item"}>
                    <LanguageColor color={repository.languageColor} className={'repository__info__item__icon'}/>
                    <p>{repository.language}</p>
                </span>
                <span className={"repository__info__item"}>
                    <FaStar className={"repository__info__item__icon gold"}/>
                    <p>{repository.forks}</p>
                </span>
                <span className={"repository__info__item"}>
                    <AiOutlineFork className={"repository__info__item__icon"}/>
                     <p>{repository.stars}</p>
                </span>
            </div>
        </div>
        <div className={"repository__period-stars"}>{repository.currentPeriodStars}
            <div className={"repository__period-stars--description"}>current stars</div>
        </div>
    </li>
}

const LanguageColor = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color}`
