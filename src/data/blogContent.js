import articleOne from '../assets/images/blogImages/blogContent-article1.jpeg';
import articleTwo from '../assets/images/blogImages/blogContent-article2.jpeg';
import articleThree from '../assets/images/blogImages/blogContent-article3.jpeg';
import articleFour from '../assets/images/blogImages/blogContent-article4.jpeg';
import articleFive from '../assets/images/blogImages/blogContent-article5.png';

import jsIcon from '../assets/icons/js-icon.png';
import mongoDBIcon from '../assets/icons/mongodb-icon.svg';
import dockerIcon from '../assets/icons/docker.svg';
import googleCloud from '../assets/icons/google-cloud.png';
import awsIcon from '../assets/icons/aws-icon.webp';

function daysSinceCreation(creationDate) {
  const today = new Date();
  const createdDate = new Date(creationDate);

  const diffMilliseconds = today - createdDate;
  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Hoje';
  } else if (diffDays === 1) {
    return 'Há 1 dia atrás';
  } else if (diffDays <= 30) {
    return `Há ${diffDays} dias atrás`;
  } else {
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) {
      return 'Há 1 mês atrás';
    } else {
      return `Há ${diffMonths} meses atrás`;
    }
  }
}

export const BlogContent = [
  {
    link: 'https://www.linkedin.com/posts/vitor-moreira-960698303_sua-api-pode-ficar-mais-protegida-activity-7350974680503144449-cKNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2FjFgBEaPAoF8bvDpXX4tDiCQf7F69jxY',
    img: articleFive,
    icon: jsIcon,
    name: '🛡️⚔️ Sua API pode ficar mais protegida com apenas mais duas linhas de código',
    excerpt: `A segurança é um aspecto fundamental no desenvolvimento de APIs, mas muitas vezes é deixada de lado ou considerada complexa demais. Felizmente, existem ferramentas que facilitam muito esse trabalho.`,
    category: 'JavaScript',
    date: daysSinceCreation('2025-07-15'),
  },
  {
    link: 'https://www.linkedin.com/posts/vitor-moreira-960698303_mongodb-schemadesign-queryoptimization-activity-7346814441180565504-cYFd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2FjFgBEaPAoF8bvDpXX4tDiCQf7F69jxY',
    img: articleOne,
    icon: mongoDBIcon,
    name: 'Três cursos da mongodb university que transformaram meu conhecimento',
    excerpt: `Depois de muito tempo estudando, finalmente terminei três cursos importantes da MongoDB University. Tô satisfeito demais com o que aprendi e deixo aqui as minhas recomendações para aprendizado. 😄🎉`,
    category: 'MongoDB',
    date: daysSinceCreation('2025-07-08'),
  },
  {
    link: 'https://www.linkedin.com/posts/vitor-moreira-960698303_googlecloud-gcp-devops-activity-7346287303532691456-Q9-g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2FjFgBEaPAoF8bvDpXX4tDiCQf7F69jxY',
    img: articleTwo,
    icon: googleCloud,
    name: 'Tutorial rápido para deixar seu shell do Google Cloud mais estiloso 😎 ',
    excerpt: `Tenho trabalhado bastante em projetos com Google Cloud, e hoje decidi dar uma pequena estilizada no terminal para deixar o Cloud Shell mais bacana ao abrir.`,
    category: 'Google Cloud',
    date: daysSinceCreation('2025-07-08'),
  },
  {
    link: 'https://www.linkedin.com/posts/vitor-moreira-960698303_como-evitar-a-dor-de-cabe%C3%A7a-de-um-banco-activity-7326316488968097793-Gpbu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2FjFgBEaPAoF8bvDpXX4tDiCQf7F69jxY',
    img: articleThree,
    icon: awsIcon,
    name: 'Como evitar a dor de cabeça de um banco de dados fora do ar ',
    excerpt: `Seu aplicativo já caiu bem na hora que mais precisava? Eu já passei por isso. Foi quando percebi que confiar em um servidor mal configurado é pedir para ter mais dor de cabeça. Então, resolvi isso com o Amazon RDS na AWS. Criei um banco de dados seguro, altamente disponível, garantindo que ele nunca saísse do ar.`,
    category: 'Amazon Web Services',
    date: daysSinceCreation('2025-05-06'),
  },
  {
    link: 'https://www.linkedin.com/posts/vitor-moreira-960698303_docker-containers-networking-activity-7326099904194400256-zu44?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE2FjFgBEaPAoF8bvDpXX4tDiCQf7F69jxY',
    img: articleFour,
    icon: dockerIcon,
    name: 'Essa tecnologia pode te surpreender mais do que você pensa',
    excerpt: `Você já se deparou com uma situação em que um projeto roda perfeitamente no seu computador, mas não funciona no ambiente de outro desenvolvedor ou no servidor? Esse é um dos maiores desafios do desenvolvimento de software e pode gerar muito retrabalho e frustração.`,
    category: 'Docker',
    date: daysSinceCreation('2025-05-01'),
  },
];
