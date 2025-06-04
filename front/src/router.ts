import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue"
import Home from "./pages/Home.vue"
import MyImages from "./pages/MyImages.vue";
import Login from "./pages/login.vue";
import SignUp from "./pages/SignUp.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            { path: "/", name: 'Home', component: Home },
            { path: "/images", name: 'MyImages', component: MyImages }
        ]
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/SignUp",
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router