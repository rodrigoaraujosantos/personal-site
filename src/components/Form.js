import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

function Form({ onAddProject, project }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    if (project) {
      setNome(project.nome);
      setDescricao(project.descricao);
      setLink(project.link);
      setImagem(project.imagem);
    } else {
      setNome('');
      setDescricao('');
      setLink('');
      setImagem('');
    }
  }, [project]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      id: project ? project.id : Date.now(),
      nome,
      descricao,
      link,
      imagem,
    };
    onAddProject(newProject);
    setNome('');
    setDescricao('');
    setLink('');
    setImagem('');
  };

  return (
    <section id="form" className={styles.form}>
      <h2>{project ? 'Editar Projeto' : 'Adicionar Projeto'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="link">Link do GitHub:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imagem">Imagem (URL):</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>
        <button type="submit">{project ? 'Salvar' : 'Adicionar'}</button>
      </form>
    </section>
  );
}

export default Form;