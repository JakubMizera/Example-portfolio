import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import {Header} from "./elements/header"
import {Main} from "./elements/main"
import {Contact} from "./elements/contact"
import {Footer} from "./elements/footer";


const App = () => {
    return (
        <div className="containerPage">
            <Header/>
            <Main/>
            <Contact/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));