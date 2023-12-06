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
                        console.error('Error al eliminar producto deseado', error);
                    }
                } else {
                    this.wishlistContent[productId] = {
                        productId,
                    }
                    try {
                        const product = await axios.get(`http://localhost:5000/api/products/${productId}`);
                        console.log(product);
                        const response = await axios.post(`http://localhost:5000/api/users/user/203675153/wishlist`, {
                            id: productId,
                            name: product.name,
                            stock: product.stock,
                            price: product.price,
                            description: product.description,
                            category: product.category,
                            rating: product.rating, 
                            imgUrl: product.imgUrl,
                        });
                        console.log(response.data);
                    } catch (error) {
                        console.error('Error al guardar producto deseado', error);
                    }
                }
            },
            async fetchWishlist(rut) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/users/user/${rut}`);
                    const user = response.data;
                    console.log(response.data);
                    return {
                        wishlistContent: user.wishlistItems,
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            },
            async findOne(productId, rut) {
                const response = await axios.get(`http://localhost:5000/api/users/user/${rut}`);
                const user = response.data;
                const wishlistUser = await this.fetchWishlist(user.rut);
                if (wishlistUser.wishlistContent[productId]) {
                    return true
                } else {
                    return false
                }
            },
            getWishlist(){
                return this.wishlistContent
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

