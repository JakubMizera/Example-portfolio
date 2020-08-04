import React from "react";

const Header = () => {
    return (
        <header>
            <section>
                <div className="logo">
                    <img src="../../../images/apollostack.svg" alt="logo"/>
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
