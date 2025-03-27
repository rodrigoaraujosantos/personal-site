import React from 'react';
import styles from './Projects.module.css';

function Projects({ projects, onEditProject, onDeleteProject }) {
  return (
    <section id="projetos" className={styles.projects}>
      <h2>Projetos</h2>
      <ul className={styles.ul}>
        {projects.map((project) => (
          <li key={project.id} className={styles.li}>
            <div className={styles.imageContainer}>
              <img src={project.imagem} alt={project.nome} />
              <button className={styles.editImageButton}>Editar Foto</button>
            </div>
            <h3>{project.nome}</h3>
            <p>{project.descricao}</p>
            <div className={styles.buttonsContainer}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Link do GitHub
              </a>
              <button onClick={() => onEditProject(project.id)}>Editar</button>
              <button onClick={() => onDeleteProject(project.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;