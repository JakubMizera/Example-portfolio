import React from "react";

const Header = () => {
    return (
        <header>
            <section className="headerContainer">
                <div className="logo">
                    <img className="logo2" src="../../images/spacex.svg" alt="logo"/>
                    <span>Front-end developer</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Trip</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export {Header};
