import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={project.id}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <a href={project.link}>
                                {" "}
                                <Arrow />
                            </a>
                        </div>
                    </div>
                    <img
                        src={project.media.thumbnail}
                        alt="yo"
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
