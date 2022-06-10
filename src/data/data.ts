import ColoShop from '../assets/images/ColoShop.png'
import LinkNeverPhai from "../assets/images/LinkNeverPhai.png"
import cart from "../assets/images/Cart.png"
import quizApp from "../assets/images/Quiz.png"
import zomatoClone from "../assets/images/Zomato.png"
import netflixClone from "../assets/images/netflixClone.png"
import movieNuxtjs from "../assets/images/movie-app-nuxtjs.png"



export const projects = [
  {
    title: "StyleShop",
    img: ColoShop,
    desc: "An MERN-stack E-commerce website that i collaborated with another mid-level developer friend of mine. I did about 50% of the front-end work in this project.",
    teamSize: 2,
    technology: "ReactJS, Typescript, SCSS, Redux",
    features: "Animated Transitions, Modern UI, SPA, Responsive",
    tag: ["Team Project"],
    githubLink: "https://github.com/StevenOng97/Ecommerce-Frontend",
    websiteLink: "https://ecommerce-frontend-git-products-id-stevenong97.vercel.app/",
  },

  {
    title: "LinkNeverPhai",
    img: LinkNeverPhai,
    desc: "A clone version of LinkNerverDie's original website.",
    teamSize: 1,
    technology: "ReactJS, Typescript, SCSS, Redux Toolkit, Firebase",
    features: "CRUD operations (SignIn / SignOut / Register), UI changes based on login status, SPA, Responsive",
    tag: ["Personal Project"],
    githubLink: "https://github.com/Dust07/LinkNeverDieClone",
    websiteLink: "https://letrantienphat-linkneverphai.vercel.app/",
  },
  {
    title: "Netflix's Clone",
    img: netflixClone,
    desc: "Self-study project following online tutorial. Fetched API from TMDB.",
    teamSize: 1,
    technology: "NextJS, TailwindCSS, Firebase, RESTApi",
    features: "Modal Video Player, Modern UI, SPA, Responsive",
    tag: ["Online Tutorial"],
    githubLink: "https://github.com/Dust07/netflix-clone",
    websiteLink: "https://letrantienphat-netflix-clone.vercel.app/",
  },
  {
    title: "Movie Site (NuxtJS)",
    img: movieNuxtjs,
    desc: "Self-study VueJS project. Fetched API from TMDB.",
    teamSize: 1,
    technology: "VueJS, NuxtJS",
    features: "Search Function, Modern UI, SPA",
    tag: ["Online Tutorial"],
    githubLink: "https://github.com/Dust07/nuxtjs_movie-site",
    websiteLink: "https://letrantienphat-nuxtjs-movie-site.vercel.app/",
  },
  {
    title: "Zomato's Clone",
    img: zomatoClone,
    desc: "Clone version of an Indian delivery website.",
    teamSize: 1,
    technology: "HTML, Javascript, SCSS",
    features: "Dynamic & Modern UI, Responsive",
    tag: ["Online Tutorial"],
    githubLink: "https://github.com/Dust07/zomato-clone-delivery-app",
    websiteLink: "https://zomato-clone-delivery-app.vercel.app/",
  },
  {
    title: "Quiz App",
    img: quizApp,
    desc: "A ReactJS mini quiz interactive game with timer, able to save highscores on local storage. ",
    teamSize: 1,
    technology: "HTML, CSS, Javascript",
    features: "Time-based multiple choices, ranking results and store on local storage.",
    tag: ["Online Tutorial"],
    githubLink: "https://github.com/Dust07/QuizChallenge",
    websiteLink: "https://quiz-challenge-botqg7ggb-dust07.vercel.app/",
  },
  {
    title: "Shopping cart",
    img: cart,
    desc: "Shopping cart functions built when i started learning ReactJS.",
    teamSize: 1,
    technology: "ReactJS",
    features: "Real-time shopping cart",
    tag: ["Online Tutorial"],
    githubLink: "https://github.com/Dust07/cart-tutorial",
    websiteLink: "https://cart-tutorial.vercel.app/",
  },
]