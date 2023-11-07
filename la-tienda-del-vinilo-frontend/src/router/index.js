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

                path: '/profile',
                name: 'profile',
                component: Profile
            },
            {
                path: '/editprofile',
                name: 'editprofile',
                component: EditProfile
            },
            {
                path: '/userview',
                name: 'userview',
                component: Userview
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
        ]
    }
);

export default router;