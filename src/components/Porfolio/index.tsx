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
      <div className="main-wrapper">
        <div className="wrapper">
          <Title></Title>
          <img src={useBaseUrl("/img/docusaurus.png")}></img>
        </div>
        <div className="button-wrap">
          Aung Kaung Myat Htun/Full Stack Developer
        </div>
        <div className="button">
          <Link to="/about-me">Work with me today </Link>
        </div>
      </div>
    </>
  );
};

export default Porfolio;
