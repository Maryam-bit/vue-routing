import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'
import Signin from '../views/Signin.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props:true
  },
  //redirects
  {
    path: "/all-jobs",
    redirect: '/jobs'
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: NotFound,
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
