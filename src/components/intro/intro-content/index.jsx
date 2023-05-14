import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import me from "../../../images/imgmain-2.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Namaste</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    width="50px"
                                />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Aditya Kakkar</span>
                    </h1>
                    <p className="title">
                        I'm a final year undergrad with experience in Node.js
                        backend development and a growing interest in frontend
                        development . This portfolio showcases my skills and
                        projects, highlighting my passion for building efficient
                        and innovative solutions through web development.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={me}
                        alt="Hello I am Keniya Andrew"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
