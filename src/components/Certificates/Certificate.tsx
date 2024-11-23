import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const Certificate = ({ title, description, imageUrl, imageAlt }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state to control visibility

  const openModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling to parent container
    setIsModalOpen(true); // Set modal state to true to show it
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when clicking on overlay
  };

  return (
    <div className={styles['certificate-card']}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {/* Image with click event */}
      <div className={styles['image-wrapper']}>
        <img
          src={imageUrl}
          alt={imageAlt}
          onClick={openModal} // Clicking on the image triggers openModal
        />
        
        <Link to="/full-image" className={styles['hover-text']}>Click to view full image</Link></div>
      
    </div>
  );
};

export default Certificate;
