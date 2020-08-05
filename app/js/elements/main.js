import React from "react";

const Main = () => {
    return (
        <main>
            <section className="blog">
                <h2>BLOG</h2>
                <div className="blogContainer">
                    <div className="blog-item">
                        <img src="../../images/photo1.png" alt="gearbox"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                    <div className="blog-item">
                        <img src="../../images/photo2.png" alt="frontrear"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                    <div className="blog-item">
                        <img src="../../images/photo3.png" alt="engine"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                </div>
            </section>
            <section className="service">
                <h2>SERVICE</h2>
                <div className="serviceContainer">
                    <div className="service-item">
                        <img src="../../images/mini1.png" alt="gearbox2"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                    <div className="service-item">
                        <img src="../../images/mini2.png" alt="gearbox3"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                    <div className="service-item">
                        <img src="../../images/mini3.png" alt="gearbox4"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                    <div className="service-item">
                        <img src="../../images/mini4.png" alt="gearbox5"/>
                        <h3>LOREM IPSUM SIT DOLOR</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className="button-blog">READ MORE</div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export {Main};