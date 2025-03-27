import React from 'react';
import styles from './Footer.module.css';



function Footer() {
  const whatsappNumber = '5511986251129';

  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Minha Homepage</p>
      <a href="mailto:seuemail@example.com">araujo.1983@hotmail.com</a>
      <p>
      <a href="https://www.linkedin.com/in/rodrigo-araujo-santos/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
      </p>
      <p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
      {/* Adicione outros links para suas redes sociais */}
    </footer>
  );
}

export default Footer;