export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Third-Year Computer Science Student at UVic | Bringing Fresh Ideas and Technical Skills to Every Project",
    description:
      "With a strong foundation in Python, C#, Java, and web development, I’m passionate about turning complex problems into user-friendly solutions. I thrive on collaboration and am always eager to learn and apply the latest in tech to deliver innovative results.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My Expertise",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Venture Vortex",
    description: "Where creativity takes birth",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Software Developer Portfolio",
    des: "Built a 3D portfolio with React, Three.js, and Tailwind CSS, featuring interactive animations and a responsive layout to showcase my skills and projects.",
    img: "/images/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Hashirkamilbaig/vercel-test",
  },
  {
    id: 2,
    title: "Habibis Kitchen",
    des: "A dynamic game built using advanced C# features like classes, scriptable objects, and custom scripts, alongside Unity’s prefabs, sprites, and animations to bring the game’s visuals to life.",
    img: "/images/p22.jpg",
    iconLists: ["/gitcontrol.svg", "/unity.svg", "/csharp.svg"],
    link: "https://github.com/Hashirkamilbaig?tab=repositories",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Analyst Intern",
    timeline: "Sept 2024 - Dec 2024",
    desc: "In my data analyst internship, I developed C and Python scripts to efficiently handle and filter large datasets, ensuring they met company requirements. I also managed data tracking for shipments and purchases, enhancing operational insights and supporting data-driven decision-making.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Freelance AI ChatBot Project",
    timeline: "Sept 2024 - present",
    desc: "I am currently working on a freelance project to develop a Soccer AI ChatBot. This chatbot is designed to provide real-time insights, answer queries about soccer stats, and engage users with interactive features, utilizing AI to enhance user experience and engagement with the sport.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Hashirkamilbaig",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-hashir-kamil-baig-ba6bb58a/",
  },
];
