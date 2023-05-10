import { createRouter, createWebHistory} from "vue-router";

import invoiceIndex from '../components/invoices/index.vue';
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
