import React from "react";
import './FooterBottom.css'
import './FooterBottomQueries.css'

function FooterBottom() {
    return (
        <div className="footer-bottom-background">
            <div className="footer-bottom-wrapper">
                <div className="footer-bottom-content-container">
                     <p>&copy; 2024 Snøugle. All rights reserved.</p>
                    <a href="#personvernerklaering">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;