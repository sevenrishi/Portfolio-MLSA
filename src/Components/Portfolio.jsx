/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RishiGPT",
    description:
      "Step into the world of RishiGPT, a frontend project that ingeniously replicates the essence of ChatGPT GPT-3 in its purest form.",
    url: "https://rishigpt.netlify.app/",
  },
  {
    title: "RishiPay",
    description:
      "RishiPay: Transforming banking with a blend of design and technology. Your gateway to hassle-free banking, reshaping the landscape with Vite.js + React.js.",
    url: "https://rishipay.netlify.app/",
  },
  {
    title: "My Portfolio",
    description:
      "You must have to visit my portfolio to know more about me. Play the the games in my portfolio and have fun.",
    url: "https://saptarshimondal.me",
  },
  {
    title: "Thoughts",
    description:
      "Thoughts is a social media platform where you can share your thoughts with the world. Visit the website to know more.",
    url: "https://allthoughts.xyz",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h2 style={{ flexBasis: "40px" }}><b>{project.title}</b></h2>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
