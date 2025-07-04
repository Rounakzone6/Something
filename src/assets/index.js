import image1 from "./01.jpg";
import image2 from "./02.jpg";
import image3 from "./03.jpg";
import image4 from "./04.jpg";
import image5 from "./05.jpg";
import callToAction from "./call-to-action.jpg";
import contact from "./Contact.jpg";
import laptop from "./laptop.jpg";
import pricing from "./pricing.jpg";
import showcase1 from "./showcase-1.jpg";
import showcase2 from "./showcase-2.jpg";
import showcase3 from "./showcase-3.jpg";
import showcase4 from "./showcase-4.jpg";
import content from "./content.png";
import landingPage from "./landing-page.png";
import features from "./features.png";
import form from "./form.jpg";
import screen from "./screen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGit,
  faGitAlt,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEarth,
  faGlobe,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

export default {
  image1,
  image2,
  image3,
  image4,
  image5,
  callToAction,
  form,
  screen,
  features,
  landingPage,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  contact,
  content,
  pricing,
  laptop,
};

export const showcase = [
  {
    id: 1,
    img: showcase1,
    title: "UI KIT",
    about: "Mozart Project",
  },
  {
    id: 2,
    img: showcase2,
    title: "FRAMEWORK",
    about: "Startup Framework 2.0",
  },
  {
    id: 3,
    img: showcase3,
    title: "PHOTOS",
    about: "From the Sky",
  },
  {
    id: 4,
    img: showcase4,
    title: "PICTURES",
    about: "Air Forces",
  },
];

export const team = [
  {
    img: image1,
    name: "Rounak Gupta",
    role: "UI Designer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
  {
    img: image2,
    name: "Nitish Gupta",
    role: "UX Designer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
  {
    img: image3,
    name: "Nikhilesh Gupta",
    role: "Web Developer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
  {
    img: image4,
    name: "Sahil Barnwal",
    role: "Backend Developer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
  {
    img: image5,
    name: "Rahul Yadav",
    role: "Frontend Developer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
  {
    img: image1,
    name: "Ritesh Giri",
    role: "Software Engineer",
    links: [faTwitter, faFacebook, faEarth, faInstagram],
  },
];

export const clients = [
  {
    img: image1,
    text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Mohd. Iqbal",
  },
  {
    img: image2,
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name: "Vishal",
  },
  {
    img: image3,
    text: "The most important part of the Startup Framework is the samples",
    name: "Pranjul Jaiswal",
  },
  {
    img: image4,
    text: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
    name: "Aman Yadav",
  },
];

export const plans = [
  {
    title: "Starter",
    price: "999",
    list: [
      [true, "2 GB of space"],
      [true, "14 days of backups"],
      [true, "Social Integrations"],
      [true, "Client billing"],
      [false, "Remote access"],
      [false, "Custom domain"],
      [false, "24 hours support"],
      [false, "Admin tools"],
      [false, "Collaboration tools"],
    ],
  },
  {
    title: "Professional",
    price: "1999",
    list: [
      [true, "2 GB of space"],
      [true, "14 days of backups"],
      [true, "Social Integrations"],
      [true, "Client billing"],
      [true, "Remote access"],
      [true, "Custom domain"],
      [false, "24 hours support"],
      [false, "Admin tools"],
      [false, "Collaboration tools"],
    ],
  },
  {
    title: "Premium",
    price: "4999",
    list: [
      [true, "2 GB of space"],
      [true, "14 days of backups"],
      [true, "Social Integrations"],
      [true, "Client billing"],
      [true, "Remote access"],
      [true, "Custom domain"],
      [true, "24 hours support"],
      [true, "Admin tools"],
      [true, "Collaboration tools"],
    ],
  },
];
