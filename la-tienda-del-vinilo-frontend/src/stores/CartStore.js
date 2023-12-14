import { defineStore } from "pinia";
import axios from 'axios';
import { useProductStore } from './ProductStore';
import { useUserStore } from './UserStore';

export const useCartStore = defineStore("CartStore",
    {
        state: () => {
            return {
                cartContent: [],
            }
        },

        actions: {
            async loadUser(rut) {
                //aqui deberia existir manejo de token
                try {
                    const productStore = useProductStore();
                    const response = await axios.get(`http://localhost:5000/api/users/user/${rut}`);
                    const res = response.data;

                } catch (error) {
                    console.error(error);
                }
            },
            async add(productId) {
                this.loadUser("203670605")
                const productStore = useProductStore();

                const product = async () => {
                    return await productStore.findItemById(productId);
                }
                const productResult = await product();
                console.log("productResult: ", productResult);

                axios.post(`http://localhost:5000/api/users/user/cart/203670605`, ...productResult);

                if (this.cartContent.hasOwnProperty(productId)) {
                    this.cartContent[productId] = {
                        productId,
                        quantity: this.cartContent[productId].quantity + 1,
                    }
                } else {
                    this.cartContent[productId] = {
                        productId,
                        quantity: 1,
                    }
                }

            },
            async remove(productId) {
                const productStore = useProductStore();
                if (!this.cartContent[productId]) {
                    return
                }
                const product = async () => {
                    return await productStore.findItemById(productId);
                }
                const productResult = await product();
                console.log("productResult: ", productResult);

                axios.delete(`http://localhost:5000/api/users/user/cart/203670605`, {
                    productId,
                });
                this.cartContent[productId].quantity -= 1;

                if (this.cartContent[productId].quantity === 0) {
                    delete this.cartContent[productId];
                }
            },
            removeProduct(productId) {
                delete this.cartContent[productId]
            }

        },

        getters: {

            formattedCart() {
                const productStore = useProductStore();

                return Object.keys(this.cartContent).map(productId => {
                    const product = this.cartContent[productId];
                    return {

                        id: product.productId,
                        name: productStore.data.find((data) => data.id === product.productId).name,
                        price: productStore.data.find((data) => data.id === product.productId).price,
                        quantity: product.quantity,
                        cost: product.quantity * productStore.data.find((data) => data.id === product.productId).price,

                    }
                })
            },
            // acc = acumulador
            total() {
                return Object.keys(this.cartContent).reduce((acc, id) => {
                    //single product according to the id 
                    const product = product.find(p => p.id === id);

                    if (product) {
                        return acc + product.price * this.cartContent[id].quantity;
                    }

                    return acc + 0;
                }, 0);
            },
            productsTotal() {
                return Object.keys(this.cartContent).reduce((acc, id) => {
                    return acc + this.cartContent[id].quantity;
                }, 0);
            }
        }
    },
);