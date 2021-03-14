export interface IRepository {
    author: string,
    name: string,
    avatar: string,
    url: string,
    description: string,
    language: string,
    languageColor: string,
    stars: number,
    forks: number,
    currentPeriodStars: number,
    builtBy: IUser[]
}

export interface IUser {
    username: string,
    href: string,
    avatar: string
}

export interface IListState {
    listState: string | null,
    listItems: IRepository[]
}

export interface IFetchListParams {
    language: string,
    since: ESince,
}

export enum ESince {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly"
}
export enum EListState {
    FETCHED = "FETCHED",
    FETCHING = "FETCHING",
    ERROR = "ERROR"
}
