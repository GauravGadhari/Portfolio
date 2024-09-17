export const webConfig = {
  webTitle: "Gaurav Gadhari | Expert in Web & App Development",
  webOwner: "Gaurav Gadhari",
  webDeveloper: "Gaurav Gadhari",
  webDescription:
    "Explore the innovative digital solutions crafted by Gaurav Gadhari. With a passion for creating seamless web and mobile experiences, I specialize in developing cutting-edge applications that drive success and elevate brands. Discover how my expertise can help bring your next project to life.",
  contactEmail: "gauravgadhari39@gmail.com",
};

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/GauravGadhari",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AGauravHere",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gaurav-gadhari-579558275/",
  },
];

export const heroSection = {
  introText: "Innovative Solutions in Web & App Development",
  title: `Building Digital Masterpieces with Passion and Precision`,
  description: `Hi! I'm ${webConfig.webDeveloper}, a developer specializing in web and app development, graphic design, and creating engaging content on YouTube.`,
  buttonText: "View My Portfolio",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client-first Approach in Every Project",
    description:
      "I focus on collaboration and seamless communication to bring ideas to life.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible Communication",
    description: "Across Time Zones",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Skills",
    description: "Always learning, improving to deliver the best results.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passion for Development and Innovation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently Improving NodeJs Skills",
    description: "Explore my cutting-edge work in Node.js as backend.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Collaborate on Your Next Big Idea",
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
    title: "Link-It",
    des: "A Simple Mobile Application to store & share documents with your family",
    img: "/link-it.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://play.google.com/store/apps/details?id=com.light_computers.LinkIt",
    linkText: "Google Play Store",
  },
];

export const testimonials = [
  {
    quote:
      "Working with ${webConfig.webOwner} was an outstanding experience. His technical expertise and commitment to excellence exceeded my expectations. Highly recommended!",
    name: "Raj Patel",
    title: "Founder, TechViz",
  },
  {
    quote:
      "${webConfig.webOwner}'s passion for development shines through in his work. He was quick to adapt and deliver exactly what we needed.",
    name: "Ananya Sharma",
    title: "CEO, WebWorks",
  },
  {
    quote:
      "I was impressed by ${webConfig.webOwner}'s flexibility and communication skills. He made sure our project ran smoothly from start to finish.",
    name: "Naveen Gupta",
    title: "CTO, SoftServe Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the development of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const footerContent = {
  heading: `Ready to take your digital presence to the next level?`,
  description: `Reach out to me today and let's discuss how I can help you achieve your goals.`,
  email: webConfig.contactEmail,
  buttonText: "Let's get in touch",
  copyrightText: `Copyright © 2024 ${webConfig.webOwner}`,
  socialMedia: socialMedia,
};
