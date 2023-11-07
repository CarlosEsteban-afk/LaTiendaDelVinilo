import { defineStore } from "pinia";
import data from "@/data/data";


export const useWishlistStore = defineStore("WishlistStore",
    {
        state: () => {
            return {
                wishlistContent: {},
            }
        },

        actions: {
            add(productId) {
                if (this.wishlistContent.hasOwnProperty(productId)) {

                    delete this.wishlistContent[productId];

                } else {
                    this.wishlistContent[productId] = {
                        productId,  
                    }
                }
            }
        },

        getters: {
            formattedList() {
                return Object.keys(this.wishlistContent).map(productId => {
                    const product = this.wishlistContent[productId];
                    return {
                        id: product.productId,
                        name: data.find((data) => data.id === product.productId).name,
                        price: data.find((data) => data.id === product.productId).price,
                    }
                })
            },
        },
    }
);

