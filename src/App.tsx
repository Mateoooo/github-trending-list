import React from 'react';
import './App.scss';
import List from "./features/list/List";
import {ESince} from "./features/list/listTypes";
import ListController from "./features/listController/ListController";

function App() {
    return (
        <div className="app">
            <ListController/>
            <List/>
        </div>
    );
}

export default App;
