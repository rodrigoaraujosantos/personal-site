import React, { useState } from 'react';
import styles from './About.module.css';
import profileImage from '../assets/fotoPerfil.jpg';
import EditProfileImageModal from './EditProfileImageModal';

function About() {
  const [selectedImage, setSelectedImage] = useState(profileImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (newImage) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(newImage);
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="sobre" className={styles.about}>
      <h2>Transformando Ideias em Código</h2>
      <div className={styles.imageContainer}>
        <img
          src={selectedImage}
          alt="Foto de Perfil"
          style={{
            width: '100%', /* Preenche a largura do container */
            height: '100%', /* Preenche a altura do container */
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <button className={styles.editImageButton} onClick={handleEditClick}>
          Editar Foto
        </button>
      </div>
      <p>
      Olá, sou Rodrigo Araujo, um desenvolvedor web júnior com uma mente criativa e um olhar atento aos detalhes. Sou apaixonado por transformar ideias em código e criar interfaces intuitivas e agradáveis para o usuário. Minhas principais habilidades incluem HTML, CSS e JavaScript, e estou sempre buscando desafios que me permitam usar minha criatividade e minhas habilidades para resolver problemas complexos.
      </p>
      <EditProfileImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onImageChange={handleImageChange}
      />
    </section>
  );
}

export default About;