const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Timeline",
    link: "#timeline",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Industry Internships" },
    { value: 30, suffix: "+", label: "Certifications Earned" },
    { value: 10, suffix: "+", label: "Technical Projects" },
    { value: 95, suffix: "%", label: "Learning Consistency Score" } // Or 'Course Completion Rate'
  
];

const logoIconsList = [
  {
    imgPath: "/projects/tech/aws.svg",
  },
  {
    imgPath: "/projects/tech/gsap.svg",
  },
  {
    imgPath: "/projects/tech/mongo.svg",
  },
  {
    imgPath: "/projects/tech/tailwind.svg",
  },
  {
    imgPath: "/projects/tech/typescript.svg",
  },
  {
    imgPath: "/projects/tech/Streamlit.svg",
  },
  {
    imgPath: "/projects/tech/python.svg",
  },
  {
    imgPath: "/projects/tech/react.svg",
  },
  {
    imgPath: "/projects/tech/angular.svg",
  },
  {
    imgPath: "/projects/tech/next.svg",
  },
  {
    imgPath: "/projects/tech/npm.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];




const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Viraj’s work on BizDectory's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our AI-ML experience & meet our product goals.",
    imgPath: "/timeline/prospera.png",
    logoPath: "/timeline/prospera.png",
    title: "SDE Intern",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed a cross-platform mobile app using React Native to manage location-based profiles and render maps.",
      "Implemented user authentication, geospatial queries, and data management using Supabase and PostGIS.",
      "Researched and built a Flask API for dynamic diagram generation using LLMs and integrated OpenCV for visual output.",
    ],
  },
  {
    review: "Viraj’s contributions to SAP CDC applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/timeline/colgate.png",
    logoPath: "/timeline/colgate.png",
    title: "Full Stack Developer",
    date: "July 2024 - December 2024",
    responsibilities: [
      "Led the UI development of scalable, localized web applications and child sites for Colgate's global product lines, ensuring consistency and responsiveness across regions.",
      "Collaborated closely with backend teams to integrate APIs seamlessly into multilingual registration forms, login modules, and interactive web experiences.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Viraj's blend of creativity and technical skill significantly enhanced our frontend performance. His contributions were instrumental in delivering faster, more efficient user experiences across our digital platforms.",
    imgPath: "/timeline/tridit.jpeg",
    logoPath: "/timeline/tridit.jpeg",
    title: "AEM Trainee",
    date: "April 2024 - June 2024",
    responsibilities: [
      "Developed and maintained scalable components and templates within Adobe Experience Manager",
      "Worked in close collaboration with UX/UI teams to translate design mockups into responsive, author-friendly AEM components.",
      "Optimized AEM-based websites for performance, ensuring fast load times.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Kshitija Parjane Ma'am",
    mentions: "linkedin.com/in/kshitija-p-0b39a2184",
    review:
      "Viraj has been an exceptional student when I was his Trainer at MITAOE. He's indeed a very fast learner. Always has fun while learning and able to manage the tasks efficiently as well.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Mrs. Pranali Lokhande Ma'am",
    mentions: "linkedin.com/in/pranali-lokhande-246340ab",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
