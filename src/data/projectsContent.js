import projectOne from '../assets/images/projects/dashboard.png';
import projectTwo from '../assets/images/projects/AnEcccomerceAboutPlants.png';
import projectThree from '../assets/images/projects/ContactsPage.png';
import projectFour from '../assets/images/projects/automotive-workshop.jpeg';

export const ProjectsContent = [
  {
    link: 'https://github.com/DEVitor0/iceCream-Sorveteria',
    img: projectOne,
    name: 'Plataforma de vendas com inteligência operacional',
    excerpt:
      'Sistema web para gestão integrada de vendas, estoque, finanças e clientes. Arquitetura desacoplada com front-end e back-end em Docker, comunicação via Nginx. Painel administrativo escalável.',
    tools: 'React, Express, MongoDB, Docker, JWT, Material UI',
  },
  {
    link: 'https://github.com/DEVitor0/projeto-agenda',
    img: projectThree,
    name: 'Agenda de contatos',
    excerpt:
      'Sistema web para gerenciar contatos com interface simples e segura. Arquitetura MVC para modularidade e fácil manutenção.',
    tools: 'Express, Node.js, MongoDB, EJS, Bootstrap',
  },
  {
    link: 'https://devitor0.github.io/loja-plantas/',
    img: projectTwo,
    name: 'Ecommerce de loja de plantas',
    excerpt:
      'Projeto focado em JavaScript orientado a objetos, requisições assíncronas e tratamento de eventos e erros.',
    tools: 'JavaScript (ES6+), POO, HTML, SCSS',
  },
  {
    link: 'https://devitor0.github.io/Oficina-Automotiva/',
    img: projectFour,
    name: 'Aplicação web de oficina de carros',
    excerpt:
      'Projeto inspirado em conceitos de UI/UX para facilitar leitura e navegação rápida, baseado em "Dont Make Me Think".',
    tools: 'HTML, SCSS, JavaScript, UI/UX',
  },
];
