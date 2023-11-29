import { defineStore } from "pinia";
import axios from 'axios';

export const useUserStore = defineStore("UserStore",
    {
        state: () => {
            return {
                user: [],
            }
        },
        actions: {
            async login(email, password) {
                try {
                    const response = await axios.post('http://localhost:5000/api/users/login', {
                        email,
                        password,
                    });
                    this.user = response.data;
                    return response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            async register(rut, username, email, name, lastname, password) {
                try {
                    const response = await axios.post('http://localhost:3000/api/users/register', {
                        rut,
                        username,
                        email,
                        name,
                        lastname,
                        password,
                    });
                    this.user = response.data;
                    return response.data;
                } catch (error) {
                    console.error(error);
                }
            },

            async getUsers() {
                try {
                    const response = await axios.get('http://localhost:5000/api/users');
                    this.user = response.data;
                    return response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            async fetchUsers(){
                try {
                    const { data } = await axios.get('http://localhost:5000/api/users');
                    console.log(data);
                    this.user = data;
                } catch (error) {
                    console.log(error);
                }
            
            }
        },
        getters: {
            isAuthenticated() {
                return !!this.user;
            },
            getCart(){
                return this.user.cartContent;
            }
        }
    });