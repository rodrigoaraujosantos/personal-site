import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Rodrigo Araujo</h1>
      <p className={styles.subtitle}>Desenvolvedor Web Full-Stack</p>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </header>
  );
}

export default Header;