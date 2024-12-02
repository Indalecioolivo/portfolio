import InventoryProjectImg from "../assets/inventoryControl.png";
import BillingManagement from "../assets/billingManagement.png";
import BillingArt from "../assets/projectbillingart.png";
import BillingPhoto1 from "../assets/projectbillingphoto1.png";
import BillingPhoto2 from "../assets/projectbillingphoto2.png";
import BillingPhoto3 from "../assets/projectbillingphoto3.png";
import CubosPlayer from "../assets/cubosPlayer.png";
import CubosPlayerArt from "../assets/projectcubosplayerphoto1.png";
import CubosPlayerPhoto1 from "../assets/projectcubosplayerphoto1.png";
import InventoryArt from "../assets/InventoryArt.png";
import InventoryPhoto1 from "../assets/registro-fluxos.png";
import InventoryPhoto2 from "../assets/cadastro-produto.png";
import InventoryPhoto3 from "../assets/detalhe-fluxos.png";

const jsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const reactImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const nodeImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";
const nodemonImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg";
const axiosImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg";
const expressImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg";
const jsonImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg";
const prisma =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg";
const materialUiImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
const postgresImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
const knexImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/knexjs/knexjs-original.svg";
const herokuImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg";
const netlifyImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg";
const vercelImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg";

const myProjectsInfos = [
  {
    id: 1,
    mainImg: InventoryProjectImg,
    art: InventoryArt,
    photo1: InventoryPhoto1,
    photo2: InventoryPhoto2,
    photo3: InventoryPhoto3,
    projectName: "LM Inventory Control",
    linkDeploy: "https://glindustry.netlify.app/login",
    linkGitRepFront:
      "https://github.com/Indalecioolivo/GL-INDUSTRY-FRONT-DEPLOY",
    linkGitRepBack: "https://github.com/Indalecioolivo/GL-INDUSTRY-BACK",
    aboutProject:
      "Projeto criado para LM Cosmetics, empresa do grupo GL Industry, do ramo dos cosméticos. Consiste em um crontrolador de estoque, suas funcionalidades são relacionadas a gestão de produtos (inserção, edição e exclusão) e gestão de Fluxo do Estoque (criação de entradas e sáidas do estoque).",
    aboutFullInfo:
      "Por questões de privacidade, não é possivel acessar as funcionalidades da aplicação. Mas é possível simular a aplicação com o código disponibilizado em meu github. O projeto contém um front-end em React, Api-Rest em express e prisma, e banco de dados em postgres. Contém segurança com sitema de login e criptografia. Já está em fase de Produção. O desenvolvimento completo ainda não foi finalizado, novas funcionalidades relacionadas a um controle de matéria prima serão instalados, e fotos dos produtos serão ainda inseridas pela empresa.",
    technologiesUsed: [
      jsImg,
      reactImg,
      nodeImg,
      nodemonImg,
      axiosImg,
      expressImg,
      jsonImg,
      prisma,
      postgresImg,
      herokuImg,
      netlifyImg,
    ],
  },
  {
    id: 2,
    mainImg: BillingManagement,
    art: BillingArt,
    photo1: BillingPhoto1,
    photo2: BillingPhoto2,
    photo3: BillingPhoto3,
    projectName: "Billing Management",
    linkDeploy:
      "https://desafio-final-front-dds-t12-mofd-8371rtkyj.vercel.app/",
    linkGitRepFront:
      "https://github.com/Indalecioolivo/desafio-final-front-dds-t12",
    linkGitRepBack:
      "https://github.com/Indalecioolivo/desafio-final-back-dds-t12",
    aboutProject:
      "Aplicação desenvolvida durante meu curso de Desenvolvimento Web Full-Stack. Consiste em um gerenciador de pagamentos de clientes, contém funções para cadastro e edição de clientes e cobranças, ferramentas de busca de clientes e cobraças, segurança e criptografia com sitema de login. ",
    aboutFullInfo:
      "O projeto foi desenvolvido como desafio final em um curso de Desenvolvimento-Web full-stack em uma equipe de 5 pessoas sob minha liderança, durante 5 sprints e com utilização de metodologias ágeis. A simulação foi uma ótima forma de entender o dia a dia do desenvolvedor. E apesar das dificuldades, entregamos o projeto completamente finalizado e ainda recebemos o prêmio de Dream Team do desafio, por nossas condutas, pela comunicação clara e não agressiva e esforço ao realiza-lo.",
    technologiesUsed: [
      jsImg,
      reactImg,
      nodeImg,
      nodemonImg,
      axiosImg,
      materialUiImg,
      expressImg,
      jsonImg,
      postgresImg,
      knexImg,
      vercelImg,
    ],
  },
  {
    id: 3,
    mainImg: CubosPlayer,
    art: CubosPlayerArt,
    photo1: CubosPlayerPhoto1,
    photo2: false,
    photo3: false,
    projectName: "Cubos Player",
    linkDeploy: false,
    linkGitRepFront:
      "https://github.com/Indalecioolivo/desafio-frontend-m03-ddst12",
    linkGitRepBack: false,
    aboutProject:
      "Projeto acadêmico de um player música Web, utilizado exclusivamente para praticar o uso das ferramentas relacionadas ao React",
    technologiesUsed: [jsImg, reactImg],
  },
];

export default myProjectsInfos;
