import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="position">
                    <div className="logo">
                    <img src="../../images/Icon%20Logo%20Normal.svg" alt="pagelogo"/>
                    <p><span>CAR</span>SHARING</p>
                </div>
                    <div className="links">
                    <ul>
                        <li><a href="#">HOME PAGE</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">SHARE REGULATION</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">PRICE</a></li>
                        <li><a href="#">OUR FLEET</a></li>
                        <li><a href="#">OUR CLIENTS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
                </div>
                <div className="copyright">
                    <span>Copyright &copy; Coders Lab</span>
                </div>
            </div>
        </footer>
    )
}

export {Footer};