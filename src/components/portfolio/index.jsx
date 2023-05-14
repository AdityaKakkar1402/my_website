import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Airline-management",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
        link: "https://github.com/AdityaKakkar1402/API_GATEWAY",
    },
    {
        id: 2,
        name: "Twitter Backend",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
        link: "https://github.com/AdityaKakkar1402/twitter_backend",
    },
    {
        id: 3,
        name: "NFT - Market Place",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
        link: "https://github.com/AdityaKakkar1402/nftmarket",
    },
    {
        id: 4,
        name: "Portfolio Website",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
        link: "https://main--astonishing-truffle-91649c.netlify.app/",
    },
    {
        id: 5,
        name: "Thyroid Detection",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
        link: "https://github.com/AdityaKakkar1402/thyroid-detection",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
