import {FaReact,FaCss3Alt} from 'react-icons/fa'
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript} from 'react-icons/si'

import Ecommerce from '../assets/ecommerce.png'
import RestaurantApp from '../assets/restaurantApp.png'
import Restaurant from '../assets/restaurant.png'
import PhotoLand from '../assets/photoland.png'
import PhotoPortfolio from '../assets/photoPortfolio.png'
import Seamark from '../assets/seamark.png'
import Weather from '../assets/weather.png'
import Travel from '../assets/travel.png'
export const Skills = [
    {
      id:0,
      tech: 'React JS',
      icon: <FaReact/>
    },
    {
      id:1,
      tech: 'Javascript',
      icon: <SiJavascript/>
    },
    {
      id:2,
      tech: 'CSS',
      icon: <FaCss3Alt/>
    },
    {
      id:3,
      tech: 'Next JS',
      icon: <TbBrandNextjs/>
    },
  ];

  export const projectDetails = [
    {
      id:0,
      project_name: "TrendApp Ecommerce",
      project_desc: "On this e-commerce site; Users will encounter a powerful search engine and detailed filtering options to instantly find the products they want. They will be able to search by categories. Users are allowed to see both old and new prices among the products. With specially designed loading screens, browsing between pages becomes an enjoyable experience. I offer personalized cart customization, easy addition and removal of products, and a seamless shopping experience. The aim of this project was not only to offer products but also to provide our users with an unforgettable shopping experience. To examine my project in more detail and contact me, please visit my GitHub profile. Thank you for your interest!",
      tech_stack: ["React","SASS","Rest API"],
      project_img: Ecommerce,
      project_url: "https://batusevinc-ecommerce.netlify.app/",
      project_source: "https://github.com/BatuSevinc/eCommerce",
      reverse: false
    },
    {
      id:1,
      project_name: "Restaurant App",
      project_desc: "This project is a single-page web application developed using React. The application includes various features such as data retrieval via API, a location-based store list, infinite-scroll functionality, search, filtering, adding to favorites, product details, storing favorite data in localStorage, skeleton screens, and responsive design. Data Retrieval via API: The application fetches data through a POST method from a specific API. These data provide store information to the user. ",
      tech_stack: ["React","Tailwind","Rest API"],
      project_img: RestaurantApp,
      project_url: "https://batuhansevinc-kerzz.netlify.app/",
      project_source: "https://github.com/BatuSevinc/kerzz",
      reverse: true
    },
    {
      id:2,
      project_name: "Photo Portfolio",
      project_desc: "I created a Photo Portfolio website using React and Tailwind CSS, aiming to enhance user engagement by adding animations to page transitions. The overall theme of the site is simple and easy on the eyes. Additionally, I utilized the createContext structure to incorporate a Mouse move effect, making it available across all pages. I implemented page transitions using React Router Dom and ensured that the design is responsive, allowing users to comfortably navigate the site on different devices. ",
      tech_stack: ["React","Tailwind","Context"],
      project_img: PhotoPortfolio,
      project_url: "https://batusevinc-photoportfolio.netlify.app/",
      project_source: "https://github.com/BatuSevinc/Photo-portfolio",
      reverse: false
    },
    {
      id:3,
      project_name: "Photo Land",
      project_desc: 'Users can filter the products they want based on categories or perform searches using the search button. Additionally, the latest added products are displayed on the homepage as a Carousel with a "new" label. Users can add desired products to their shopping cart, modify the quantity of items in the cart, or remove products from the cart. The unit price and total amount to be paid in the cart are also visible. The website provides the option to empty the cart or proceed to checkout by clicking the purchase button. Users can also navigate to the product page to explore its features in more detail and view similar products. ',
      tech_stack: ["React","Tailwind","Context","Strapi"],
      project_img: PhotoLand,
      project_url: "https://youtu.be/Es6bMD4gP58",
      project_source: "https://github.com/BatuSevinc/PhotoLand",
      reverse: true
    },
    {
      id:4,
      project_name: "Restaurant",
      project_desc: "I developed a restaurant page using React and Tailwind CSS, which welcomes users with an impressive interface. By incorporating animations, my aim was to captivate users' attention and make their experiences even more enjoyable. To facilitate users in easily selecting dates and adjusting time and time zones, I added React Datepicker and React Time Picker components. This enables users to efficiently manage appointments and time-based events.",
      tech_stack: ["React","Tailwind","Framer Motion",],
      project_img: Restaurant,
      project_url: "https://batusevinc-restaurant.netlify.app/",
      project_source: "https://github.com/BatuSevinc/Restaurant",
      reverse: false
    },
    {
      id:5,
      project_name: "TRAVEL APP",
      project_desc: "In this project, I created a travel website using Next.js, TypeScript, and Tailwind CSS. Throughout the development process, I aimed to provide a user-friendly and mobile-responsive experience. By leveraging Next.js and TypeScript, I developed a robust React application with a page-based architecture, enhancing both performance and development speed. Tailwind CSS formed the foundation for the project's style and design, offering ease and flexibility in designing a responsive user interface. I took advantage of Tailwind's convenience and adaptability to craft an interface adhering to responsive design principles, ensuring smooth navigation across various devices such as mobile, tablet, and desktop screens.",
      tech_stack: ["TypeScript", "Next.js","React","Tailwind"],
      project_img: Travel,
      project_url: "https://batusevinc-weather.netlify.app/",
      project_source: "https://github.com/BatuSevinc/weather-nextjs",
      reverse: true
    },
    {
      id:6,
      project_name: "WEATHER APP",
      project_desc: "My project retrieves daily and weekly weather reports for all 81 provinces of Turkey using a Rest API. Users can select a province on a map and view detailed weather information on a new page. I developed the project using Next.js and added several features to enhance the user experience. Firstly, I integrated a mechanism to prevent user errors and redirect them to an error page when invalid searches are detected. Additionally, to minimize the waiting time for users, I activated a loading screen. This ensures that users can quickly and seamlessly obtain weather information. To make the project more user-friendly, I dynamically changed the background colors of cards based on the weather conditions. This visual representation allows users to perceive weather conditions more easily.",
      tech_stack: ["React", "Next.js","Rest API","Tailwind"],
      project_img: Weather,
      project_url: "https://batusevinc-weather.netlify.app/",
      project_source: "https://github.com/BatuSevinc/weather-nextjs",
      reverse: false
    },
    {
      id:7,
      project_name: "SEAMARK",
      project_desc: "This project was developed with the aim of creating a clone of the Seamark Consultancy website's homepage. We activated the homepage and added some features to enhance the user experience. In the solution section, we used a background-image to display the background image on hover, creating a pleasant visual interaction when the user hovers over certain areas. Furthermore, we utilized components to make the card structures more readable. Each card was created as a separate component, resulting in a more modular code structure. This approach makes the project more sustainable and extensible. We also paid attention to responsive compatibility. The design was developed to adapt to different screen sizes, ensuring proper display across various devices, from mobile devices to large desktop computers.",
      tech_stack: ["React JS","CSS"],
      project_img: Seamark,
      project_url: "https://batusevinc-seamark.netlify.app/",
      project_source: "https://github.com/BatuSevinc/seaMark-App",
      reverse: true
    },

  ]

  export const navLinks = [
    {
      id:0,
      name:"Home",
      href:"Home"
    },
    {
      id:1,
      name:"My Skills",
      href:"Skills"
    },
    {
      id:3,
      name:"My Projects",
      href:"Projects"
    },
    {
      id:4,
      name:"My Contact",
      href:"Contact"
    },
  ]