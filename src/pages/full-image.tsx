import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom'; // To handle navigation
import styles from './styles.module.css';

const FullImagePage = () => {
  const history = useHistory(); // Hook to navigate programmatically

  // Function to close the modal and go back
  const closeModal = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <Layout>
      <div className={styles['modal']}>
        <button className={styles['close-button']} onClick={closeModal}>
          &times; {/* Close icon */}
        </button>
        <img
          src="/img/akmh.jpeg"  // Path to the static image
          alt="Full Screen Image"
          className={styles['full-screen-image']}
        />
      </div>
    </Layout>
  );
};

export default FullImagePage;
