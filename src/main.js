import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router"
import Home from "./components/Home.vue"
import CategoryDetails from "./components/CategoryDetails.vue"
import MealDetails from "./components/MealDetails.vue"



// Definir las rutas
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/category/:title",
        name: "Category",
        component: CategoryDetails
    },

    {
        path: "/meal/:id",
        name: "Meal",
        component: MealDetails
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


//Definirlo 

createApp(App).use(router).mount('#app')
