import { useHref } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mysql,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  docker,
  indigoroad,
  upwork,
  compass,
  charlotte,
  image,
  pocket,
  weather,
  threejs,
  github2,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "github",
    icon: github2,
  },
];

const experiences = [
  {
    title: "FreeLance",
    company_name: "FreeLance & Individual Projects",
    icon: upwork,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Development Certificate",
    company_name: "Univeristy of North Carolina at Charlotte",
    icon: charlotte,
    iconBg: "#E6DEDD",
    date: "July 2022 - Nov 2022",
    points: [
      "12-week intensive full stack web development course. Maintained an A average and achieved Honor Roll 2022.",
      "Technologies: JavaScript, Angular, React, Vue, Node.js, APIs, HTML Object-oriented programming Engineering | Rest APIs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Operations Management/Executive Chef",
    company_name: "Compass Group",
    icon: compass,
    iconBg: "#383E56",
    date: "July 2019 - June 2022",
    points: [
      "Implemented workflows and resolved complaints for kitchens inside Atrium hospital systems which increased patient scores by 50% and received Atrium Health Top Hospital Hospitality Award.",
      "Developed a cleaning inventory excel spreadsheet which resulted in 100% health score and decreased cost of food.",
    ],
  },
  {
    title: "Excecutive Chef",
    company_name: "The Indigo Road Hospitality Group",
    icon: indigoroad,
    iconBg: "#E6DEDD",
    date: "May 2011 - June 2019",
    points: [
      "Promoted to Executive Chef and opened a $4.4 million dollar “Oak Steakhouse” in Charlotte which became a top 50 Steakhouse in America",
      "Led business operations, inventory control, and coached staff members which increased annual sales by 30%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Alex is a professional beyond measure. As a former employee under Alex I can say that his standards are second to none..",
    name: "Mike Losik",
    designation: "OM",
    company: "Compass",
    image: "https://media.licdn.com/dms/image/C4E03AQExfevP45vMyg/profile-displayphoto-shrink_200_200/0/1521690820590?e=1683763200&v=beta&t=mDb6PMoKU8OA2ZhDc244IFQFhzkxAOXYxY34I39eKO8",
  },
  {
    testimonial:
      "I can strongly attest to Alex's leadership and execution. His genuine personality pours over into his work in every way.",
    name: "Brain Anderson",
    designation: "IA",
    company: "Baldwin",
    image: "https://media.licdn.com/dms/image/C4E03AQGtts5eyjQxcA/profile-displayphoto-shrink_200_200/0/1547868584007?e=1683763200&v=beta&t=A5_qnOcRn_WuhBNj_QpdFqUmVaQ6hqMH3Kskizs_w4o",
  },
  {
    testimonial:
      "Alex always took time to lend a hand if I or others needed assistance with challenging coding concepts!",
    name: "Sasima Patterson",
    designation: "Developer",
    company: "Upwork",
    image: "https://media.licdn.com/dms/image/D5635AQFugh1ouEuX_A/profile-framedphoto-shrink_200_200/0/1673973430332?e=1678942800&v=beta&t=C_S82esfb3hEKqrX2sMNnC0nwa6vzvunHXtmmcoFTeI",
  },
];

const projects = [
  {
    name: "ImagiGen",
    description:
      "Web-based platform that allows users to generate an imaginative image through DALL-E AI and share it with the community. The user will also be able to choose which image he would like to share publicly",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://github.com/ajenkinsynwa/dallevisionapp",
  },
  {
    name: "Pocket Sales Coach",
    description:
      "Small business owners use this application to equip themselves with outside resources to increase sales. Users access a variety of training videos and coaches in the areas of Sales, Marketing and Time Management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: pocket,
    source_code_link: "https://github.com/tedtalktimmy/pocket-sales-coach",
  },
  {
    name: "Weather Dashboard",
    description:
      "Created a simple weather dashboard that shows the five-day forecast of the user’s city of choice, max/min temperature, humidity, and wind speed through integration with OpenWeather One Call API.",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ajenkinsynwa/weatherdashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
