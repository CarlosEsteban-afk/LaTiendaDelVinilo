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
                        const response = await axios.delete(`http://localhost:5000/api/users/user/203670605/wishlist`, {
                            data: { id: productId }

                        });
                    } catch (error) {
                        console.error('Error al eliminar producto deseado', error);
                    }
                } else {
                    this.wishlistContent[productId] = {
                        productId,
                    }
                    try {
                        const product = await axios.get(`http://localhost:5000/api/products/${productId}`);
                        const productInfo = product.data; 
                        const response = await axios.post(`http://localhost:5000/api/users/user/203670605/wishlist`, {
                            id: productId,
                            name: productInfo[0].name,
                            stock: productInfo[0].stock,
                            price: productInfo[0].price,
                            description: productInfo[0].description,
                            category: productInfo[0].category,
                            rating: productInfo[0].rating, 
                            imgUrl: productInfo[0].imgUrl,
                        });
                    } catch (error) {
                        console.error('Error al guardar producto deseado', error);
                    }
                }
            },
            async removeFromWishlist(productId){
                try {
                    const response = await axios.delete(`http://localhost:5000/api/users/user/203670605/wishlist`, {
                        data: { id: productId }

                    });
                } catch (error) {
                    console.error('Error al eliminar producto deseado', error);
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

