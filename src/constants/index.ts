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
    bell,
    textron,
    ultra,
    ksu,
  } from "../assets";
import { Experience } from "../models/Experience";
import { NavLink } from "../models/NavLink";
import { TechnologyTile } from "../models/Technology";

  
const navLinks: NavLink[] = [
{
    id: "about",
    title: "About",
},
{
    id: "experience",
    title: "Experience",
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

  const experiences: Experience[] = [
    {
      companyName: "Bell Flight",
      icon: bell,
      iconBg: "black",
      date: "Jan 2021 - Present",
      roles: [
        {
          title: "Senior Software Developer",
          points: [
            "Team Lead for Bell Technical Publications, an interactive manuals site with 3D capabilities, wiring diagrams, and fault isolation. Developed web, desktop, and iOS applications with infrastructure hosted in AKS.",
            "Collaborated with suppliers and internal business users to create a new supplier portal, allowing access to internal systems with the user's identity. Included a supplier dashboard with high level overview of POs, documents, and other relevant information.",
            "Project Lead for improving DevSecOps across Bell, standardizing platforms and mentoring other teams on CI/CD, SDLC, containerization, and other best practices.",
            "Performed code reviews, implemented unit tests, and contributed to other projects.",
            "Angular 10+, ASP.Net Core 3.1+, EF Core, MAUI, Azure DevOps, Docker, Kubernetes, OAuth2 OIDC, Karma/Jasmine, MOQ, SonarQube, Artifactory"
          ]
        }
      ]
    },
    {
      companyName: "Textron",
      icon: textron,
      iconBg: "white",
      date: "Jan 2019 - Jan 2021",
      roles: [
        {
          title: "IT Leadership Development Program - Cybersecurity Analyst",
          points: [
            "Performed Vulnerability Lifecycle Management (VLCM), including remediating vulnerabilities based on prioritization and CVE/CVSS. Automated reporting, remediation effort tracking, and data collection for over 400 servers. Reduced unmitigated emergency- and urgent-rated vulnerabilities by 95%",
            "Collaborated with security teams across Textron to prepare for CMMC 1.0 level 3 efforts and a new Corporate IT Security Policy. Created documents and procedures to comply with CUI requirements."
          ]
        },
        {
          title: "IT Leadership Development Program - Software Developer",
          points: [
            "Developed Angular 7+ and ASP.NET Core 2+ applications, including writing unit tests, performing Angular and .NET Core upgrades, and delivering features and bugfixes in an agile environment.",
            "Designed and developed an Electron+Angular PWA application allowing the reuse of our web UI for offline desktop viewing.",
            "Participated in DevOps project aimed at improving CI/CD pipelines, technology analysis, and roadmap."
          ]
        }

      ]
    },
    {
      companyName: "Ultra Electronics PCS",
      icon: ultra,
      iconBg: "grey",
      date: "Dec 2017 - Dec 2018",
      roles: [
        {
          title: "Business Systems Analyst",
          points: [
            "Created and documented PLM & ERP synchronization solution using .NET framework console application and PL/SQL. Database administration tasks, optimization of indexes, structure, and views.",
            "Various other tasks as assigned relating to IT administration, troubleshooting, and networking"
          ]
        }
      ]
    },
    {
      companyName: "Kansas State University",
      icon: ksu,
      iconBg: "white",
      date: "Dec 2018",
      roles: [
        {
          title: "B.S. in Computer Science",
          points: [
            "Focuses in web development, high performance computing, and cryptography",
            "National Society of Leadership and Success",
            "Dean's List (2017 & 2018"
          ]
        }
      ]
    },
  ];
  export { navLinks, technologies, services, experiences }