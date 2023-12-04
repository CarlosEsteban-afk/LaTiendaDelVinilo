import { defineStore } from "pinia";
import axios from 'axios';

export const useWishlistStore = defineStore("WishlistStore",
    {
        state: () => {
            return {
                wishlistContent: {},
            }
        },
        actions: {
            async add(productId) {
                if (this.wishlistContent[productId]) {

                    delete this.wishlistContent[productId];

                    try {
                        const response = await axios.delete(`http://localhost:5000/api/users/user/203675153/wishlist`, {
                            data: { id: productId }

                        });
                        console.log(response.data);
                    } catch (error) {

                    }
                } else {
                    this.wishlistContent[productId] = {
                        productId,
                    }
                    try {
                        //const product = axios.get(`http://localhost:5000/api/products/:id`);
                        const response = await axios.post(`http://localhost:5000/api/users/user/203675153/wishlist`, {
                            id: productId,
                            name: this.wishlistContent[productId].name,
                            stock: this.wishlistContent[productId].stock,
                            price: this.wishlistContent[productId].price,
                            description: this.wishlistContent[productId].description,
                            category: this.wishlistContent[productId].category,
                            rating: this.wishlistContent[productId].rating, 
                            imgUrl: this.wishlistContent[productId].imgUrl, 
                        });
                        console.log(response.data);
                    } catch (error) {

                    }
                }


            },
            async fetchWishlist(rut) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/users/user/${rut}`);
                    const user = response.data;
                    return {
                        wishlistContent: user.wishlistItems,
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            },
            findOne(productId) {
                if (this.wishlistContent.productId) {
                    return true
                } else {
                    return false
                }
            }
        },

        getters: {
            formattedList() {
                return Object.keys(this.wishlistContent).map(productId => {
                    const product = this.wishlistContent[productId];
                    return {
                        id: product.productId,
                        name: this.wishlistContent[productId].name,
                        price: this.wishlistContent[productId].price,
                    }
                })
            },
        },
    }
);

