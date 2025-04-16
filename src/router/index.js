import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import HomePageFour from "../components/Pages/HomePageFour";
import HomePageFive from "../components/Pages/HomePageFive";
import HomePageSix from "../components/Pages/HomePageSix";
import HomePageSeven from "../components/Pages/HomePageSeven";
import HomePageEight from "../components/Pages/HomePageEight";
import HomePageNine from "../components/Pages/HomePageNine";
import HomePageTen from "../components/Pages/HomePageTen";
import HomePageEleven from "../components/Pages/HomePageEleven";
import AboutPage from "../components/Pages/AboutPage";
import PricingPage from "../components/Pages/PricingPage";
import ServicesPageOne from "../components/Pages/ServicesPageOne";
import ServicesPageTwo from "../components/Pages/ServicesPageTwo";
import ServicesPageThree from "../components/Pages/ServicesPageThree";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import FeaturesPageOne from "../components/Pages/FeaturesPageOne";
import FeaturesPageTwo from "../components/Pages/FeaturesPageTwo";
import TeamPage from "../components/Pages/TeamPage";
import LoginPage from "../components/Pages/LoginPage";
import SignupPage from "../components/Pages/SignupPage";
import FaqPage from "../components/Pages/FaqPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogPageTwo from "../components/Pages/BlogPageTwo";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageOne },
  { path: "/home-two", component: HomePageTwo },
  { path: "/home-three", component: HomePageThree },
  { path: "/home-four", component: HomePageFour },
  { path: "/home-five", component: HomePageFive },
  { path: "/home-six", component: HomePageSix },
  { path: "/home-seven", component: HomePageSeven },
  { path: "/home-eight", component: HomePageEight },
  { path: "/home-nine", component: HomePageNine },
  { path: "/home-ten", component: HomePageTen },
  { path: "/home-eleven", component: HomePageEleven },
  { path: "/about", component: AboutPage },
  { path: "/pricing", component: PricingPage },
  { path: "/services-one", component: ServicesPageOne },
  { path: "/services-two", component: ServicesPageTwo },
  { path: "/services-three", component: ServicesPageThree },
  { path: "/single-service", component: ServicesDetailsPage },
  { path: "/features-one", component: FeaturesPageOne },
  { path: "/features-two", component: FeaturesPageTwo },
  { path: "/team", component: TeamPage },
  { path: "/log-in", component: LoginPage },
  { path: "/sign-up", component: SignupPage },
  { path: "/faq", component: FaqPage },
  { path: "/blog-one", component: BlogPageOne },
  { path: "/blog-two", component: BlogPageTwo },
  { path: "/single-blog", component: BlogDetailsPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
