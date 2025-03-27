import React, { useState } from 'react';
import styles from './EditProfileImageModal.module.css';

function EditProfileImageModal({ isOpen, onClose, onImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSave = () => {
    if (selectedImage) {
      onImageChange(selectedImage);
      onClose();
    }
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modalContent}>
        <h2>Editar Foto de Perfil</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div className={styles.buttons}>
          <button onClick={handleSave} disabled={!selectedImage}>
            Salvar
          </button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileImageModal;