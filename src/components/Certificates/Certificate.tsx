import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const Certificate = ({ title, description, imageUrl, imageAlt }: Props) => {
  return (
    <div className={styles["certificate-card"]}>
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Image with click event */}
      <div className={styles["image-wrapper"]}>
      {imageUrl ? (
          <>
            <img src={imageUrl} alt={imageAlt} />
            <Link
              to={`/full-image?imageUrl=${encodeURIComponent(imageUrl)}&imageAlt=${encodeURIComponent(imageAlt)}`}
              className={styles["hover-text"]}
            >
              Click to view full image
            </Link>
          </>
        ) : (
          <p className={styles["coming-soon"]}>Coming Soon</p> 
        )}
      </div>
    </div>
  );
};

export default Certificate;
