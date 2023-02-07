
import { createWebHistory, createRouter } from "vue-router";

import SignUp from "../pages/SignUp.vue"
import HomePage from "../pages/HomePage.vue"
import LogIn from "../pages/LogIn.vue"


const routes = [
    
    { component: SignUp, path: "/signup", name: "SignUp" },

    { component: HomePage, path: "/homepage", name: "HomePage" },

    { component: LogIn, path: "/login", name: "LogIn" }
    
    // {
  
    //   path: "/:catchAll(.*)",
  
    //   component: NotFound,
  
    //   name: "NotFound",
  
    // },
  
  ];
  
  
  
  const router = createRouter({
  
    history: createWebHistory(),
    routes: routes,
  
  });
  
  
  
  export default router;