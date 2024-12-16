import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "Kavya Arora",
  title: "Hi all, I'm Kavya",
  subTitle: emoji(
    "A passionate Full Stack Developer with expertise in JavaScript, React.js, Node.js, and Express.js, experienced in building dynamic web applications, real-time data dashboards, and secure backend systems. Proficient in leveraging MongoDB, Firebase, and modern frameworks for efficient, scalable solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wd7lTK8Q_NvF8B1R8Q-hHc59NTc9vl3i/view?usp=sharing",
  displayGreeting: true 
};

// Social Media 

const socialMediaLinks = {
  github: "https://github.com/KavyaArora13",
  linkedin: "https://www.linkedin.com/in/kavya-arora-92a989225/"
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Developed and maintained responsive web applications using modern web technologies and single-page application (SPA) frameworks"),
    emoji(
      "⚡ Integrated third-party services like Firebase for enhanced functionality and data management."
    )
  ],



softwareSkills: [
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fab fa-cuttlefish"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fab fa-cuttlefish"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "Express.js",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fab fa-cuttlefish"
  },
],
display: true 
};
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/WhatsApp Image 2024-08-22 at 22.59.08_1714044e.jpg"),
      subHeader: "B.E. in Computer Science Engineering",
      duration: "July 2021 - May 2025",
    },
    {
      schoolName: "Children Sr Sec School",
      logo: require("./assets/images/children school.jpg"),
      subHeader: "Higher Secondary School Certificate (XII class)",
      duration: "July 2019 - May 2021",
    }
  ]
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "3rd Shade",
      companylogo: require("./assets/images/3rdshadelogo.jpeg"),
      date: "Sep 2024 – Present",
      desc: "Developed several Full-Stack e-commerce websites using React.js, Redux Toolkit, and React Router DOM for navigation, implementing responsive design and integrating Framer Motion for smooth animations.",
      descBullets: [
        "Utilized Node.js and Express.js to create RESTful APIs for product management and user authentication, securing them with JWT",
        "Optimized Frontend performance using Webpack, implemented server-side rendering for improved SEO, and set up CI/CD pipelines with GitLab for automated testing and deployment to AWS, while ensuring compatibility."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "LeafyIsland",
      companylogo: require("./assets/images/LeafyIsland.jpg"),
      date: "Dec 2023 – May 2024",
      desc: "Designed and developed a multiple page Work Portfolio for the client using Next.js, TypeScript, and HTML5/CSS3, styling it with Bootstrap and integrating GSAP for complex page transitions and project showcase animations.",
      descBullets: [
        "Implemented a GraphQL API with Node and MongoDB to manage and serve dynamic portfolio content, using Mongoose for data modeling and integrating with external APIs for enhanced functionality.",
        "Optimized the portfolio application for performance and deployed it on Netlify, implementing a mobile-first design approach and effectively utilizing Git for seamless version control throughout the development process."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "HelpInHomework",
      companylogo: require("./assets/images/HelpInHomework.jpg"),
      date: "Jan 2023 – June 2023",
      desc: "Designed and developed a high-converting landing page using React, Redux for state management, and Styled- components with Tailwind CSS, adhering to UI/UX best practices, responsive design, and clean code for a visually appealing and easily maintainable interface ensuring performance, scalability and overall performance.",
      descBullets: [
        "Integrated the landing page with a Backend built on Node.js and Express.js, connecting to a NoSQL database to populate content and handle user submissions through RESTful API endpoints with robust error handling",
        "Employed Agile methodologies and Scrum practices throughout the development process, utilizing Postman for thorough API testing and leveraging Vite for rapid development and optimized building, resulting in a performant and JavaScript (ES6+) compliant landing page."
      ]
    },
    {
      role: "Intern",
      company: "Macrogoogol",
      companylogo: require("./assets/images/Screenshot (3).png"),
      date: "March 2021 –March 2022",
      desc: "Worked as a Programming Intern, focusing on Java, Data Structures and Algorithms, and Object-Oriented Programming (OOP) concepts, assisting in real-world applications and hands-on examples and solutions",
      descBullets: [
        "Contributed to enhancing team knowledge and proficiency in programming by providing guidance, conducting coding workshops, and participating in collaborative projects, fostering skills, collaboration, and teamwork.",
        "Supported the delivery of solutions and explanations for theoretical subjects including Computer Networks, Database Management Systems (DBMS), and Operating Systems."
      ]
    },
  ]
};



const openSource = {
  showGithubProfile: "true",
  display: true 
};



// In portfolio.js - only showing the modified achievementSection, rest remains same

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Microsoft Azure",
      subtitle:
        "Completed Microsoft Azure AZ-104 certification modules, showcasing expertise in Azure administration, including managing identities, storage, compute resources, and virtual networks.",
      image: require("./assets/images/Azure.webp"),
      imageAlt: "Microsoft Azure Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1fWBOA8l7y1YShBeRN7jjmGYOWFVfSvXq/view?usp=sharing" // Replace with your actual certificate link
        },
      ]
    },
    {
      title: "Oracle Java Programmer",
      subtitle:
        "Achieved Oracle Certified Associate, Java SE 8 Programmer certification, validating expertise in Java programming.",
      image: require("./assets/images/Java.webp"),
      imageAlt: "Oracle Java Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1v3aSFaAttMY8E9rlQQ2m51XOinGRBFNB/view?usp=sharing" // Replace with your actual certificate link
        },
      ]
    },
    {
      title: "IBM Full Stack Developer",
      subtitle: "Earned IBM's Full Stack Software Developer certification through a verified Coursera course, demonstrating proficiency in full-stack development.",
      image: require("./assets/images/Full Stack.webp"),
      imageAlt: "IBM Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1B2ZkzPqcy1kyCPhtzS0-Gq7Ic1NdVSR4/view?usp=sharing" // Replace with your actual certificate link
        },
      ]
    }
  ],
  display: true
};


const resumeSection = {
  title: "Resume",
  subtitle: "My Formal Bio Details",
  resumeLink: {
    view: "https://drive.google.com/file/d/1wd7lTK8Q_NvF8B1R8Q-hHc59NTc9vl3i/view?usp=sharing",
    download: "https://drive.google.com/file/d/1wd7lTK8Q_NvF8B1R8Q-hHc59NTc9vl3i/view?usp=sharing"
  },
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6375310709",
  email_address: "kavyaarora13020@gmail.com"
};

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
};