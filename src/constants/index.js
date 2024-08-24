import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import ppw from "../assets/projects/ppw.png"
import c19 from "../assets/projects/c19.png"

export const HERO_CONTENT = `I am a passionate software engineer with a strong focus on backend development and a deep understanding of modern technologies. With hands on experience in backend development and API integerations, I am committed to developing innovative solutions and building robust and scalable applications. I am Proficient in Python, JavaScript, Flask, Node.js, and various database technologies.`

export const ABOUT_TEXT = `I am a dedicated Software Engineer with a passion for backend development. At Indifi Technologies, I work on integrating APIs, enhancing system performance, and collaborating with data scientists to bring machine learning models to life. I enjoy tackling complex problems and continuously strive to improve my technical skills. My work extends beyond professional projects, as I have also created innovative solutions like an AI interview platform and a several web applications. I am committed to writing clean, efficient code and am always eager to learn and adapt to new technologies. I am open to opportunities where I can contribute to impactful projects and further develop my skills.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - Present",
    role: "Software Engineer",
    company: "Indifi Technologies",
    description: `As a Software Engineer at Indifi Technologies, I have been deeply involved in optimizing backend systems and enhancing data-driven decision-making processes. My contributions include integrating APIs to facilitate seamless data exchange, migrating backend frameworks to improve system performance, and implementing the scorecard for different policies. Also written comprehensive unit test cases, ensuring robustness of the codebase. Implemented GitHub CI pipeline for automated PR merges and test cases execution, streamlining the development workflow and ensuring code integrity.`,
    technologies: ["Python", "Node JS", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    year: "Jan 2023 - July 2023",
    role: "Software Engineer Intern",
    company: "Indifi Technologies",
    description: `During my tenure as a Software Engineer Intern at Indifi Technologies, I contributed to the automation of error reporting by implementing a system that retrieves logs from Elasticsearch, significantly enhancing the monitoring process. Additionally, I developed a Loan Application Recommendation System using a Sub-seq model, which improved the Turnaround Time (TAT) for loan processing.`,
    technologies: ["Node JS", "Python", "Elasticsearch"]
  }
];

export const PROJECTS = [
  {
    title: "Sphere - AI Interview Platform",
    image: project1,
    description:
      "Sphere is an AI-driven interview platform designed to streamline hiring for companies and candidates. It features separate portals for job postings, profile management, and AI assessments. Built the backend with Node.js and Flask. Desingned the end-to-end flow of the application, from HR/Recruiter onboarding to AI-driven interview process. Designed and implemented the database schema to support complex job postings, implemented authentication system with passport.js. Deployed on DigitalOcean, used AWS S3 for secure storage of images and resumes.",
    technologies: ["Node JS", "Python", "MongoDB"],
  },
  {
    title: "Cafe Web Application",
    image: project2,
    description:
      "Developed a web application for a café that allows customers to order food and beverages online. The application features a menu view, cart functionality, and user authentication and authorization. The frontend is built using HTML, CSS, and Handlebars, while the backend is powered by Node.js and MongoDB. This setup enables users to browse the menu, place orders, and view their previous orders seamlessly.",
    technologies: ["HTML", "CSS", "Handlebars", "Node JS", "MongoDB"],
  },
  {
    title: "Personal Photography Portfolio Website",
    image: ppw,
    description:
      "A personal photography portfolio website showcasing my photography skills.",
    technologies: ["HTML", "CSS", "Handlebars", "Node JS"],
  },
  {
    title: "Covid Live Status",
    image: c19,
    description:
      "I developed a COVID-19 Daily Statistics web application to provide real-time data on daily cases, recoveries, and death tolls both nationally and state-wise. The application uses APIs to fetch and display this information. I implemented asynchronous data fetching with async/await functionality to ensure timely updates. The frontend is designed with HTML, CSS, and Handlebars, while the backend is built with Node.js and Express.js. This setup ensures users receive accurate and up-to-date COVID-19 statistics.",
    technologies: ["HTML", "CSS", "Handlebars", "Node JS"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7830022635",
  email: "harshsingh.hks@gmail.com",
};
