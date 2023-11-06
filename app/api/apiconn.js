export async function getProjects() {
  const response = await fetch(
    `https://strapi-portafolio.onrender.com/api/proyectos?populate=image`
  );
  const { data } = await response.json();

  return data;
}
// git, description, image, endDate, initialDate, skills, url, name

//Import project pictures here. W245 H138
import citas from "../../public/assets/img/snaps/citas/citas (4).png";
import cripto from "../../public/assets/img/snaps/criptp/cripto (6).png";
import rnm from "../../public/assets/img/snaps/rnm/rnm (2).png";
import guitar from "../../public/assets/img/snaps/guitarla/guitar (4).png";
import mamoney from "../../public/assets/img/snaps/mamoney/mamoney (2).png";
import porta from "../../public/assets/img/snaps/portasnap.png";
import honda from "../../public/assets/img/snaps/honda/honda.png";

export const data = [
  {
    english: [
      {
        id: 1,
        name: "Vet Booking App",
        initialDate: "2023-16-01",
        endDate: "2023-30-01",
        image: {
          url: citas,
          width: 245,
          height: 138,
        },
        git: "https://github.com/andresmurilloco/citas-react",
        description:
          "This was one of my first projects using React. This app was built using Tailwind and the data is stored in the localStorage.",
        skills: ["javascript", "react", "tailwind"],
        url: "https://citasdevandres.netlify.app/",
      },
      {
        id: 2,
        name: "Cripto currency app",
        initialDate: "2023-30-01",
        endDate: "2023-03-02",
        image: {
          url: cripto,
          width: 245,
          height: 138,
        },
        description:
          "This project was my first approach to working with APIs. For this project I used Axios, a great tool to get data from API without too much effort.\nI also added a costume ErrorBoundary component to show up if something goes wrong.",
        skills: ["javascript", "react", "axios", "tailwind"],
        url: "https://criptodevandres.netlify.app/",
        git: "https://github.com/andresmurilloco/criptos-react",
      },
      {
        id: 3,
        name: "Rick and Morty - Hackathon",
        initialDate: "2023-06-03",
        endDate: "2023-25-03",
        image: {
          url: rnm,
          width: 245,
          height: 138,
        },
        description:
          "This was my first solo-dev. I worked on this project using Gentleman's programming API for his Hackathon coming in October.\nIt was really challenging, specially when the APIs started to twist one with another.\nI also started using CSS animations which came to be really useful when creating websites.",
        skills: ["javascript", "react", "tailwind", "css", "vite", "axios"],
        url: "https://ricknmorty2507.netlify.app/",
        git: "https://github.com/andresmurilloco/rick_and_morty",
      },
      {
        id: 4,
        name: "GuitarLA Store",
        initialDate: "2023-01-07",
        endDate: "2023-04-07",
        image: {
          url: guitar,
          width: 245,
          height: 138,
        },
        description:
          "This was such an awesome project and I really felt I have advanced quite a lot as a front-end dev.\nThis project was to create a website focused on a guitar store. You can see blogs and curses, but the best part is the option to choose a guitar and add them to the cart. You could also remove or edit your order from the cart.\nAll the website depends on the API, which was created using Strapi, deployed on Render and the web UI is deployed on Vercel.\nThis project was built with 3 different frameworks to practice: Next, Remix and Astro. Only Remix one was deployed to Vercel.\nThis was not my first time with data bases as I used to code on php, but it is the first time using PostgreSQL and setting up data bases in javascript.",
        skills: ["javascript", "react", "tailwind"],
        url: "https://guitarladevandres.vercel.app/",
        git: "https://github.com/andresmurilloco/guitarla-remix",
      },
      {
        id: 5,
        name: "Ma'money",
        initialDate: "2023-01-07",
        endDate: "",
        image: {
          url: mamoney,
          width: 245,
          height: 138,
        },
        description:
          "This is a personal project that ais to help me to track my balance in a much better way and free, not having to pay anything to use all its features.\nRight now it is in progress as I am advancing some curses to certify myself, but I am working on it actively on weekends.",
        skills: ["javascript", "typescript", "next", "react", "axios", "css"],
        url: "https://mamoney.vercel.app/",
        git: "https://github.com/andresmurilloco/mamoney",
      },
      {
        id: 6,
        name: "Portafolio",
        initialDate: "2023-01-08",
        endDate: "2023-07-08",
        image: {
          url: porta,
          width: 245,
          height: 138,
        },
        description:
          "This is my personal portafolio and the one you are seeing to. I tried to use all the techniques learnt and I keep improving constantly with all my new knowledge.\nIt may take a while to fetch projects but it's because I intend to show you my knowledge in API and Strapi.\nVersion 2.0.0 is rendered in the website coming from an object created in JavaScript simulating an external API as Render was taking too much to fetch the projects.",
        skills: [
          "javascript",
          "typescript",
          "css",
          "react",
          "strapi",
          "next",
          "other",
        ],
        url: "https://andresdev.vercel.app/",
        git: "https://github.com/andresmurilloco/portafolio",
      },
      {
        id: 7,
        name: "Honda Supermotos Jamundí",
        initialDate: "2023-08-15",
        endDate: "",
        image: {
          url: honda,
          width: 245,
          height: 138,
        },
        description:
          "This project was the result of a collaborative effort, working closely with the client to understand their goals and expectations. I was dedicated to translating their vision into a reality by implementing industry best practices, delivering on time, and exceeding their expectations.",
        skills: ["javascript", "typescript", "css", "react", "next", "other"],
        url: "https://hondajamundi.vercel.app/",
        git: "https://github.com/andresmurilloco/honda",
      },
    ],
    spanish: [
      {
        id: 1,
        name: "Aplicación de citas",
        initialDate: "2023-16-01",
        endDate: "2023-30-01",
        image: {
          url: citas,
          width: 245,
          height: 138,
        },
        git: "https://github.com/andresmurilloco/citas-react",
        description:
          "Este fue mi primer proyecto usando React. Este app fue construida usando Tailwind y la información fue almacenada en el localstorage.",
        skills: ["javascript", "react", "tailwind"],
        url: "https://citasdevandres.netlify.app/",
      },
      {
        id: 2,
        name: "Conversor de criptos",
        initialDate: "2023-30-01",
        endDate: "2023-03-02",
        image: {
          url: cripto,
          width: 245,
          height: 138,
        },
        description:
          "Esta fue mi primera aproximación a trabajar con APIs. Para este proyecto usé Axios, una herramienta genial para obtener datos desde las APIs sin mucho esfuerzo. Tamnbien añadí un ErroBoundary personalizado para mostrar si algo sale mal.",
        skills: ["javascript", "react", "axios", "tailwind"],
        url: "https://criptodevandres.netlify.app/",
        git: "https://github.com/andresmurilloco/criptos-react",
      },
      {
        id: 3,
        name: "Rick y Morty - Hackathon",
        initialDate: "2023-06-03",
        endDate: "2023-25-03",
        image: {
          url: rnm,
          width: 245,
          height: 138,
        },
        description:
          "Este fue mi primer desarrollo en solitario. Trabajé en este proyecto usando la API de Gentlemans Programming para su Hackaton de Octubre. Fue algo bastante retador, especialmente porque las APIs empezaban a enredarse las unas con las otras. Tambien empecé a explorar las animaciones en CSS lo que viene de lujo cuando se están construyendo sitios web.",
        skills: ["javascript", "react", "tailwind", "css", "vite", "axios"],
        url: "https://ricknmorty2507.netlify.app/",
        git: "https://github.com/andresmurilloco/rick_and_morty",
      },
      {
        id: 4,
        name: "GuitarLA Store",
        initialDate: "2023-01-07",
        endDate: "2023-04-07",
        image: {
          url: guitar,
          width: 245,
          height: 138,
        },
        description:
          "Este fue un proyecto increíble y realmente sentí que he avanzado mucho como desarrollador front-end. En este proyecto el objetivo era crear un sitio web enfocado a una tienda de guitarras. Puedes ver blogs, cursos, pero la mejor parte es la opción de elegir una guitarra y añadirla al carrito. Tambien podías remover o editar la orden de tu carrito. Todo el sitio web fue hecho en 3 frameworks diferentes: NEXT, Remix y Astro. Solo la versión de Remix fue montada en Vercel. Esta no fue mi primera vez trabajando con bases de datos porque solía trabajar con elas en PHP, pero es la primera vez que uso PostreSQL y la configuración de bases de datos en javascript.",
        skills: ["javascript", "react", "tailwind"],
        url: "https://guitarladevandres.vercel.app/",
        git: "https://github.com/andresmurilloco/guitarla-remix",
      },
      {
        id: 5,
        name: "Ma'money",
        initialDate: "2023-01-07",
        endDate: "",
        image: {
          url: mamoney,
          width: 245,
          height: 138,
        },
        description:
          "Este proyecto es uno personal que busca ayudarme a llevar un mejor manejo de mis finanzas y gratis, no tener que pagar nada para usar todas sus funciones. Ahora está en proceso porque estoy avanzando cursos y certificaciones, pero trabajo en él activamente los fines de semana.",
        skills: ["javascript", "typescript", "next", "react", "axios", "css"],
        url: "https://mamoney.vercel.app/",
        git: "https://github.com/andresmurilloco/mamoney",
      },
      {
        id: 6,
        name: "Portafolio",
        initialDate: "2023-01-08",
        endDate: "2023-07-08",
        image: {
          url: porta,
          width: 245,
          height: 138,
        },
        description:
          "Este es mi portafolio personal y el que estás mirando ahora mismo. Traté de aplicar y usar todas las tecnicas que he aprendido y mejorarlo continuamente a medida que adquiero nuevos conocimientos. Quería usar Strapi para que evidenciaran que lo uso, sin embargo no fue posible por Render, que cada cierto tiempo baja las bases de datos gratuitas. Así pues, en la versión 2.0.0, decidí hacer una API integrada en el proyecto porque se tardaba mucho en cargar la información.",
        skills: [
          "javascript",
          "typescript",
          "css",
          "react",
          "strapi",
          "next",
          "other",
        ],
        url: "https://andresdev.vercel.app/",
        git: "https://github.com/andresmurilloco/portafolio",
      },
      {
        id: 7,
        name: "Honda Supermotos Jamundí",
        initialDate: "2023-08-15",
        endDate: "",
        image: {
          url: honda,
          width: 245,
          height: 138,
        },
        description:
          "Nuestra misión fue optimizar la experiencia del usuario, lo que incluyó la creación de una navegación intuitiva, una presentación visual atractiva de los productos y la implementación de funciones interactivas que mejoraron la interacción con el sitio web.",
        skills: ["javascript", "typescript", "css", "react", "next", "other"],
        url: "https://hondajamundi.vercel.app/",
        git: "https://github.com/andresmurilloco/honda",
      },
    ],
  },
];
