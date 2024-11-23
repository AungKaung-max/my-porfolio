import React from "react";
import Layout from "@theme/Layout";
import { useHistory, useLocation } from "react-router-dom"; // To handle navigation
import styles from "./styles.module.css";

interface Props {
  imageUrl: string;
  imageAlt: string;
}

const FullImagePage = () => {
  const history = useHistory(); // Hook to navigate programmatically
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get("imageUrl") || "";
  const imageAlt = new URLSearchParams(location.search).get("imageAlt") || "";

  // Function to close the modal and go back
  const closeModal = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <Layout>
      <div className={styles["modal"]}>
        <button className={styles["close-button"]} onClick={closeModal}>
          &times; {/* Close icon */}
        </button>
        <img
          src={imageUrl} // Path to the static image
          alt={imageAlt}
          className={styles["full-screen-image"]}
        />
      </div>
    </Layout>
  );
};

export default FullImagePage;
