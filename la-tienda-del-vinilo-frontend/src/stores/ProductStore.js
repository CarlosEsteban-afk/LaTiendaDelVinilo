import { defineStore } from "pinia";
import axios from 'axios';


export const useProductStore = defineStore("ProductStore",
    {
        state: () => {
            return {
                data: [],
            }
        },
        actions: {
            async fetchProducts() {
                try {
                    const { data } = await axios.get('http://localhost:5000/api/products');
                    this.data = data;
                } catch (error) {
                    console.log(error);
                }
            },
            async findItemByName(name) {
                try {
                    const { data } = await axios.get(`http://localhost:5000/api/searchProducts?name=${name}`);
                    const response = data;
                    return response;
                } catch (error) {
                    console.log("producto no encontrado");
                }
            },
            async findItemById(id) {
                try {
                    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
                    const response = data;
                    return response;
                } catch (error) {
                    console.log("producto no encontrado");
                }
            }

        },
        getters: {}
    },
);
