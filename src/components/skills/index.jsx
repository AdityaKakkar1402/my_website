import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        As a skilled developer, I have honed my expertise in
                        Java, JavaScript, Node.js, Express.js, and SQL, having
                        worked on projects that have resulted in over 1000 lines
                        of code in these languages. I am familiar with Git, ORM
                        (Sequelize), Passport.js, Jest, RabbitMQ, AWS (EC2,
                        Autoscaling, S3), and MongoDB, having used them
                        extensively to build robust and efficient applications.
                        My ability to work with these technologies has enabled
                        me to deliver exceptional solutions that meet the needs
                        of clients and end-users alike. With a focus on quality,
                        efficiency, and innovation, I am committed to creating
                        software that stands out and provides value to the
                        end-user.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
