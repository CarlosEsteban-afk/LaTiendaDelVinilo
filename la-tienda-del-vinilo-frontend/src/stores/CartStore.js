import { defineStore } from "pinia";
import data from "@/data/data";


export const useCartStore = defineStore("CartStore",
    {
        state: () => {
            return {
                cartContent: {},
            }
        },

        actions: {
            add(productId) {
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
            remove(productId) {
                if (!this.cartContent[productId]) {
                    return
                }
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
                return Object.keys(this.cartContent).map(productId => {
                    const product = this.cartContent[productId];

                    return {
                        id: product.productId,
                        name: data.find((data) => data.id === product.productId).name,
                        price: data.find((data) => data.id === product.productId).price,
                        quantity: product.quantity,
                        cost: product.quantity * data.find((data) => data.id === product.productId).price,

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