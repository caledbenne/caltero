import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    docker,
    backend,
    creator,
    mobile,
    web,
  } from "../assets";
import { NavLink } from "../models/NavLink";
import { TechnologyTile } from "../models/technology";

  
const navLinks: NavLink[] = [
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
const technologies: TechnologyTile[] = [
    {
      name: "HTML 5",
      icon: html,
      position: [0,5,0]
    },
    {
      name: "CSS 3",
      icon: css,
      position: [5,7,2]
    },
    {
      name: "JavaScript",
      icon: javascript,
      position: [-6,9,-2]
    },
    {
      name: "TypeScript",
      icon: typescript,
      position: [-4,5,4]
    },
    {
      name: "React JS",
      icon: reactjs,
      position: [4,5,-8]
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      position: [-10,6,-8]
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      position: [-9,7,10]
    },
    {
      name: "Node JS",
      icon: nodejs,
      position: [2,8,11]
    },
    {
      name: "git",
      icon: git,
      position: [11,9,-9]
    },
    {
      name: "docker",
      icon: docker,
      position: [9,6,7]
    },
  ];
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "DevSecOps",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Security",
      icon: creator,
    },
  ];
  export { navLinks, technologies, services }