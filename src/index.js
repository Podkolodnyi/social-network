import React from "react";
import ReactDOM from "react-dom";
import classes from "./index.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import state from "./components/state/state";
import {subscribe, addNewPost, changePostText} from "./components/state/state";


const rerederAll = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} changePostText={changePostText} addNewPost={addNewPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerederAll);

rerederAll();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
