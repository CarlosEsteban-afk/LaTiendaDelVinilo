import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import Userview from '../views/Userview'
import Admin from '../views/Admin'
import AddProduct from '@/views/AddProduct.vue'
import ProdcutDetail from '../views/ProductDetail.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/cart',
                name: 'cart',
                component: Cart
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            }, {

                path: '/users/user/:rut',
                name: 'profile',
                component: Profile,
                props: true
            },
            {
                path: '/editprofile',
                name: 'editprofile',
                component: EditProfile
            },
            {
                path: '/users/user/:rut/userview',
                name: 'userview',
                component: Userview,
                props: true
            },
            {
                path: '/admin',
                name: 'admin',
                component: Admin,
            },
            {
                path: '/AddProduct',
                name: 'AddProduct',
                component: AddProduct
            },
            {
                path: '/productdetail/:id',
                name: 'ProductDetail',
                component: ProdcutDetail,
                props: true
            },
            {
                path: "/:pathMatch(.*)*",
                name: "not-found",
                component: NotFound,
            },
        ]
    }
);

export default router;