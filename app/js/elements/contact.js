import React from "react";

const Contact = () => {
    return (
        <section className="contactContainer">
            <h2>CONTACT</h2>
            <div className="containerForm">
                <img src="../../images/Form%20Photo.png" alt="red and blue cars"/>
                <form className="form">
                    <div className="form-field">
                        <label className="form-label"/>
                        <input type="text" className="form-input name" id="name" placeholder="Type your name"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label"/>
                        <input type="email" className="form-input name" id="email" placeholder="Type your e-mail"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label"/>
                        <input type="text" className="form-input message" id="name" placeholder="Type your message"/>
                    </div>
                    <div className="form-consent">
                        <label className="form-checkbox">
                            <input type="checkbox"/>
                            <span className="checkbox"/>
                            <p className="consent-text">
                                I hereby give consent for my personal data included in my
                                application to be processed for the purposes of the recruitment
                                process under the European Parliament’s and Council of the
                                European Union Regulation on the Protection of Natural Persons as
                                of 27 April 2016, with regard to the processing of personal data
                                and on the free movement of such data, and repealing Directive
                                95/46/EC (Data Protection Directive)
                            </p>
                        </label>
                    </div>
                    <button type="submit" className="form-btn">SEND</button>
                </form>
            </div>
        </section>
    )
}

export {Contact};