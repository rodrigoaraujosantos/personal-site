import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      nome: 'Perfil GitHub',
      descricao: 'Neste projeto foi implementado a estilização do perfil para mostrar as habilidades visualmente.',
      link: 'https://github.com/rodrigoaraujosantos/rodrigoaraujosantos',
      imagem: 'https://avatars1.githubusercontent.com/u/9919?v=4',
    },
    {
      id: 2,
      nome: 'API Rest',
      descricao: 'Projeto de estudo com Spring Boot, explorando JPA, Hibernate, JWT, Swagger e Spring Boot Admin.',
      link: 'https://github.com/rodrigoaraujosantos/api-forum',
      imagem: 'https://i.ytimg.com/vi/MgfyhrDfMhM/maxresdefault.jpg',
    },
    {
      id: 3,
      nome: 'Le Wagon (exercicios)',
      descricao: 'This platform contains all the exercises you ll cover during your training at Le Wagon, the French innovative Coding School, welcome aboard!',
      link: 'https://github.com/rodrigoaraujosantos/fullstack-challenges',
      imagem: 'https://www.lewagon.com/assets/default_meta_image-b73edd5f615ce51a68038e8f85981d29102722552a38d94aec50c4867aa2ace6.jpg',
    },
  ]);
  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addProject = (newProject) => {
    if (editingProject) {
      // Se estiver editando, atualiza o projeto existente
      setProjects(
        projects.map((project) => (project.id === editingProject.id ? newProject : project))
      );
      setEditingProject(null); // Limpa o estado de edição
    } else {
      // Se não estiver editando, adiciona um novo projeto
      setProjects([...projects, newProject]);
    }
    setShowForm(false); // Esconde o formulário após adicionar/editar
  };

  const editProject = (id) => {
    const projectToEdit = projects.find((project) => project.id === id);
    setEditingProject(projectToEdit);
    setShowForm(true); // Mostra o formulário ao editar
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Inverte a visibilidade do formulário
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <About />
      <Projects
        projects={projects}
        onEditProject={editProject}
        onDeleteProject={deleteProject}
      />
      <button className={styles.addProjectButton} onClick={toggleFormVisibility}>
        {showForm ? 'Cancelar' : '+ Adicionar Projeto'}
      </button>
      {showForm && (
        <Form
          onAddProject={addProject}
          project={editingProject} // Passa o projeto que está sendo editado para o componente Form
        />
      )}
      <Footer />
    </div>
  );
}

export default App;