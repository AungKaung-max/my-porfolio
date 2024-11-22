import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./porfolio.css";

const Title = () => {
  return (
    <div className="title">
      Welcome to <span className="new-line">My Porfolio</span>
    </div>
  );
};

const Porfolio = () => {
  return (
    <>
      <div className="porfolio-page">
      <div className="main-wrapper">
        <div className="title-section">
          <Title></Title>
          <div className="img-container">
            <img src={useBaseUrl("/img/akmh.jpeg")}></img>
          </div>
        </div>
        <div className="button-wrap">
        <Link to="/docs/about" className="link">
          Aung Kaung Myat Htun/Full Stack Developer
          </Link>
        </div>
        <div className="button">
          <Link to="/about-me" className="link">
            ↳Work with me today
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Porfolio;
