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
    "https://drive.google.com/file/d/1wbIZ2KtS08UlJsNWSD9EsmSuLCzsu97L/view?usp=sharing",
  displayGreeting: true 
};

// Social Media 

const socialMediaLinks = {
  github: "https://github.com/KavyaArora13",
  linkedin: "https://www.linkedin.com/in/kavya-arora-92a989225/",
  gmail: "kavyaarora1302@gmail.com",
  Leetcode: "https://medium.com/@kavyaarora1302",
  display: true
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
      duration: "July 2019 - MAy 2021",
    }
  ]
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Leafy Island",
      companylogo: require("./assets/images/LeafyIsland.jpg"),
      date: "Oct 2023 – March 2024",
      desc: "Created a real-time data dashboard utilizing React.js, HTML, CSS, and JavaScript for monitoring key per- formance indicators, contributing to enhanced data visualization and analysis capabilities.",
      descBullets: [
        "Designed user interfaces in Adobe XD and managed version control through Bitbucket.",
        "Integrated JWT for secure API authentication and authorization, ensuring data security and user privacy in website interactions."
      ]
    },
    {
      role: "Software Engineer",
      company: "Help In Homework",
      companylogo: require("./assets/images/HelpInHomework.jpg"),
      date: "Jan 2023 – June 2023",
      desc: "Leveraged Figma for prototyping and collaborative UI/UX design, ensuring consistent and interactive design ele- ments. Employed CSS3 and HTML5 for modern, standards-compliant web development.",
      descBullets: [
        "Used AngularJS and TypeScript to develop scalable single-page applications, benefiting significantly from Type- Script’s static typing and Angular’s robust framework for efficient and maintainable code.",
        "IUtilized version control systems, such as Git and Yarn, to manage and collaborate on code repositories, fostering an organized and efficient development process."
      ]
    },
    {
      role: "Intern",
      company: "Macrogoogol",
      companylogo: require("./assets/images/Screenshot (3).png"),
      date: "May 2022 –July 2022",
      desc: "Developed a website using WordPress for content management and implemented comprehensive Search Engine Optimization (SEO), including keyword research, and on-page optimization to increase traffic.",
      descBullets: [
        "Optimized website performance using Data structures and algorithms, Object-oriented programming prin- ciples, ensuring efficient data handling and smooth application operation.",
        "Utilized React for building dynamic user interfaces, MongoDB for database management, Express.js and Node.js for server-side development."
      ]
    }
  ]
};



const openSource = {
  showGithubProfile: "true",
  display: true 
};



const achievementSection = {
  title: emoji("Certifications 🏆 "),


  achievementsCards: [
    {
      title: "Microsoft Azure",
      subtitle:
        "Completed Microsoft Azure AZ-104 certification modules, showcasing expertise in Azure administration, including managing identities, storage, compute resources, and virtual networks.",
      image: require("./assets/images/Azure.webp"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certification",
        }
      ]
    },
    {
      title: "Oracel Java Programmer",
      subtitle:
        "Achieved Oracle Certified Associate, Java SE 8 Programmer certification, validating expertise in Java programming.",
      image: require("./assets/images/Java.webp"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certification",
          
        }
      ]
    },

    {
      title: "IBM Full Stack Developer",
      subtitle: "Earned IBM's Full Stack Software Developer certification through a verified Coursera course, demonstrating proficiency in full-stack development.",
      image: require("./assets/images/Full Stack.webp"),
      imageAlt: "Certificate",
      footerLink: [
        {name: "Certification"}
      ]
    }
  ],
  display: true
};



const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resume: [
    "https://drive.google.com/file/d/1wbIZ2KtS08UlJsNWSD9EsmSuLCzsu97L/view?usp=sharing"
  ],
  
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-637510709",
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