import React from "react";
import ReactDom from "react-dom";
import './main.scss';
import './styles.scss';
import BoardVeiw from "./components/BoardVeiw";

const App = () => {
    return <BoardVeiw/>
}

ReactDom.render(<App/>, document.getElementById("root"));