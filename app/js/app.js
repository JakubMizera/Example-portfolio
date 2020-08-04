import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";


const Header = () => {
    return (
        <header>
            elo
            mordy
        </header>
    )

}

const App = () => {
    return (
        <Header/>
    )
}

ReactDOM.render(<App/>, document.querySelector(".container"));