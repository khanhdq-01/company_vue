import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageFour from "../components/Pages/HomePageFour";
import HomePageSix from "../components/Pages/HomePageSix";
import HomePageEight from "../components/Pages/HomePageEight";
import HomePageNine from "../components/Pages/HomePageNine";
import AboutPage from "../components/Pages/AboutPage";
import PricingPage from "../components/Pages/PricingPage";
import ServicesPageThree from "../components/Pages/ServicesPageThree";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import TeamPage from "../components/Pages/TeamPage";
import LoginPage from "../components/Pages/LoginPage";
import SignupPage from "../components/Pages/SignupPage";
import FaqPage from "../components/Pages/FaqPage";
import BlogPageOne from "../components/Pages/BlogPageOne";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import ContactPage from "../components/Pages/ContactPage";
import MemberList from '../components/Common/members/MemberList.vue'
import MemberForm from '../components/Common/members/MemberForm.vue'
import SlideList from '../components/HomeOne/slide/SlideList.vue'
import SlideForm from '../components/HomeOne/slide/SlideForm.vue'
import MemberOtherList from '../components/Common/memberOthers/MemberOtherList.vue'
import MemberOtherForm from '../components/Common/memberOthers/MemberOtherForm.vue'
import AboutHeaderForm from '../components/About/header/AboutHeaderForm.vue'
import AboutHeaderList from '../components/About/header/AboutHeaderList.vue'
import PricingForm from '../components/Common/pricing/PricingForm.vue'
import PricingList from '../components/Common/pricing/PricingList.vue'
import VideoForm from '../components/Common/video/VideoForm.vue'
import VideoList from '../components/Common/video/VideoList.vue'

const routes = [
  { path: "/", component: HomePageOne },
  { path: "/home-four", component: HomePageFour },
  { path: "/home-six", component: HomePageSix },
  { path: "/home-eight", component: HomePageEight },
  { path: "/home-nine", component: HomePageNine },
  { path: "/about", component: AboutPage },
  { path: "/pricing", component: PricingPage },
  { path: "/services-three", component: ServicesPageThree },
  { path: "/single-service/:id", component: ServicesDetailsPage},
  {
    path: '/add-service',
    name: 'AddService',
    component: () => import('@/components/ServicesThree/ServicesForm.vue')
  },
  { path: "/team", component: TeamPage },
  { path: "/log-in", component: LoginPage },
  { path: "/sign-up", component: SignupPage },
  { path: "/faq", component: FaqPage },
  { path: "/blog-one", component: BlogPageOne },
  { path: "/single-blog/:id", component: BlogDetailsPage },
  { path: "/contact", component: ContactPage },

  //members
  {
    path: '/member-list',
    name: 'memberList',
    component: MemberList,
  },
  {
    path: '/members/add',
    name: 'add-member',
    component: MemberForm
  },
  {
    path: '/members/edit/:id',
    name: 'edit-member',
    component: MemberForm,
    props: route => ({ isEdit: true, memberId: route.params.id })
  },

    //slides
    {
      path: '/slide-list',
      name: 'slideList',
      component: SlideList,
    },
    {
      path: '/slide/add',
      name: 'add-slide',
      component: SlideForm
    },
    {
      path: '/slide/edit/:id',
      name: 'edit-slide',
      component: SlideForm,
      props: route => ({ isEdit: true, slideId: route.params.id })
    },

     //video
    {
      path: '/video-list',
      name: 'videoList',
      component: VideoList,
    },
    {
      path: '/video/add',
      name: 'add-video',
      component: VideoForm
    },
    {
      path: '/video/edit/:id',
      name: 'edit-video',
      component: VideoForm,
      props: route => ({ isEdit: true, videoId: route.params.id })
    },

    //memberOthers
    {
      path: '/member-other-list',
      name: 'memberListOther',
      component: MemberOtherList,
    },
    {
      path: '/member-other/add',
      name: 'addMemberOther',
      component: MemberOtherForm
    },
    {
      path: '/member-other/edit/:id',
      name: 'editMemberOther',
      component: MemberOtherForm,
      props: route => ({ isEdit: true, memberOtherId: route.params.id })
    },
  //about header
  {
    path: '/about-header-list',
    name: 'aboutList',
    component: AboutHeaderList,
  },
  {
    path: '/about-header/add',
    name: 'add-about-header',
    component: AboutHeaderForm
  },
  {
    path: '/about-header/edit/:id',
    name: 'edit-about-header',
    component: AboutHeaderForm,
    props: route => ({ isEdit: true, aboutHeadId: route.params.id })
  },

  //pricing
  {
    path: '/pricing-list',
    name: 'pricingList',
    component: PricingList,
  },
  {
    path: "/pricings/add",
    name: "PricingAdd",
    component: PricingForm,
    props: { isEdit: false },
  },
  {
    path: "/pricings/edit/:id",
    name: "PricingEdit",
    component: PricingForm,
    props: (route) => ({
      isEdit: true,
      pricingId: route.params.id,
    }),
  },
  {
    path: "/pricings/edit/:id",
    name: "PricingEdit",
    component: PricingForm,
    props: (route) => ({
      isEdit: true,
      pricingId: route.params.id,
    }),
  },
  {
    path: '/add-blog',
    name: 'AddBlog',
    component: () => import('@/components/BlogOne/BlogForm.vue')
  },
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
