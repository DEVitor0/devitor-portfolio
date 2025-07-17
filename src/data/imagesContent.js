import articleOne from '../assets/images/blogImages/blogContent-article1.jpeg';
import articleTwo from '../assets/images/blogImages/blogContent-article2.jpeg';
import articleThree from '../assets/images/blogImages/blogContent-article3.jpeg';
import articleFour from '../assets/images/blogImages/blogContent-article4.jpeg';
import articleFive from '../assets/images/blogImages/blogContent-article5.png';

import projectOne from '../assets/images/projects/dashboard.png';
import projectTwo from '../assets/images/projects/AnEcccomerceAboutPlants.png';
import projectThree from '../assets/images/projects/ContactsPage.png';
import projectFour from '../assets/images/projects/automotive-workshop.jpeg';

function getDomainFromUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace('www.', '');
  } catch {
    return '';
  }
}

export const ImagesContent = [
  {
    href: 'https://www.linkedin.com/posts/vitor-moreira-960698303_sua-api-pode-ficar-mais-protegida-activity-7350974680503144449-cKNT',
    link: getDomainFromUrl(
      'https://www.linkedin.com/posts/vitor-moreira-960698303_sua-api-pode-ficar-mais-protegida-activity-7350974680503144449-cKNT',
    ),
    img: articleFive,
    name: '🛡️⚔️ Sua API pode ficar mais protegida com apenas mais duas linhas de código',
  },
  {
    href: 'https://www.linkedin.com/posts/vitor-moreira-960698303_mongodb-schemadesign-queryoptimization-activity-7346814441180565504-cYFd',
    link: getDomainFromUrl(
      'https://www.linkedin.com/posts/vitor-moreira-960698303_mongodb-schemadesign-queryoptimization-activity-7346814441180565504-cYFd',
    ),
    img: articleOne,
    name: 'Três cursos da mongodb university que transformaram meu conhecimento',
  },
  {
    href: 'https://www.linkedin.com/posts/vitor-moreira-960698303_googlecloud-gcp-devops-activity-7346287303532691456-Q9-g',
    link: getDomainFromUrl(
      'https://www.linkedin.com/posts/vitor-moreira-960698303_googlecloud-gcp-devops-activity-7346287303532691456-Q9-g',
    ),
    img: articleTwo,
    name: 'Tutorial rápido para deixar seu shell do Google Cloud mais estiloso 😎',
  },
  {
    href: 'https://www.linkedin.com/posts/vitor-moreira-960698303_como-evitar-a-dor-de-cabe%C3%A7a-de-um-banco-activity-7326316488968097793-Gpbu',
    link: getDomainFromUrl(
      'https://www.linkedin.com/posts/vitor-moreira-960698303_como-evitar-a-dor-de-cabe%C3%A7a-de-um-banco-activity-7326316488968097793-Gpbu',
    ),
    img: articleThree,
    name: 'Como evitar a dor de cabeça de um banco de dados fora do ar',
  },
  {
    href: 'https://www.linkedin.com/posts/vitor-moreira-960698303_docker-containers-networking-activity-7326099904194400256-zu44',
    link: getDomainFromUrl(
      'https://www.linkedin.com/posts/vitor-moreira-960698303_docker-containers-networking-activity-7326099904194400256-zu44',
    ),
    img: articleFour,
    name: 'Essa tecnologia pode te surpreender mais do que você pensa',
  },
  {
    href: 'https://github.com/DEVitor0/iceCream-Sorveteria',
    link: getDomainFromUrl('https://github.com/DEVitor0/iceCream-Sorveteria'),
    img: projectOne,
    name: 'Plataforma de vendas com inteligência operacional integrada',
  },
  {
    name: 'Eccomerce de uma loja de plantas',
    href: 'https://devitor0.github.io/loja-plantas/',
    link: getDomainFromUrl('https://devitor0.github.io/loja-plantas/'),
    img: projectTwo,
  },
  {
    name: 'Agenda de contatos',
    href: 'https://github.com/DEVitor0/projeto-agenda',
    link: getDomainFromUrl('https://github.com/DEVitor0/projeto-agenda'),
    img: projectThree,
  },
  {
    name: 'Aplicação web de uma oficina de carros',
    href: 'https://devitor0.github.io/Oficina-Automotiva/',
    link: getDomainFromUrl('https://devitor0.github.io/Oficina-Automotiva/'),
    img: projectFour,
  },
];
