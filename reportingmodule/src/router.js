import { createRouter,createWebHistory } from "vue-router";
import homePage from "./components/HomePage.vue"
import signUp from "./components/SignUp.vue"
import adminSignup from "./components/AdminSignUp.vue"
import login from "./components/LogIn.vue"
import taskpage from "./components/TaskPage.vue"
import addtask from "./components/AddTask.vue"
import updatetask from "./components/UpdateTask.vue"
import adminview from "./components/AdminView.vue"
import pagenotfound from "./components/PageNotFound.vue"


const routes = [
     {
        name: 'adminview',
        component: adminview,
        path: '/adminview'
    },
    {
        name: 'addtask',
        component: addtask,
        path: '/addtask'
    },
    {
        name: 'updatetask',
        component: updatetask,
        path: '/updatetask'
    },
    {
        name: 'taskpage',
        component: taskpage,
        path: '/taskpage'
    },
    {
        name: 'homePage',
        component: homePage,
        path: '/homePage'
    },
    {
        name:'signUp',
        component: signUp,
        path:'/'
    },
    {
        name:'adminSignUp',
        component:adminSignup,
        path:'/adminSignup'
    },
    {
        name: 'login',
        component: login,
        path: '/login'
    },
    {
        name: 'pagenotfound',
        component: pagenotfound,
        path: '/:pathMatch(.*)*'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router