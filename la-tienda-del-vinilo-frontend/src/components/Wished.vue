<template>
    <v-card color="#F8E3E3">
        <v-row style="justify-content: space-evenly;">
            <v-col cols="2" style="align-self: center;">
                <v-img class="ma-4" height="60" src="../assets/logo.png"></v-img>
            </v-col>
            <v-col cols="4" style="align-self: center;">
                <v-card-item>
                    <v-card-title>{{ props.id }}</v-card-title>
                </v-card-item>
            </v-col>
            <v-col cols="1" style="align-self: center;">
                <h4>{{ props.price }}</h4>
            </v-col>
            <v-col cols="4" style="align-self: center;">
                <v-card-actions>
                    <v-btn color="lighten-2" variant="tonal" @click="cartStore.add(props.id)" style="margin: 15px;">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <p>Añadir al Carro</p>
                    </v-btn>
                    <v-btn variant="text" @click="wishlistStore.add(props.id)" icon="" style="">
                        x
                    </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
    <br>
</template>
<script setup>
import { useWishlistStore } from '@/stores/WishlistStore';
import { useCartStore } from '@/stores/CartStore';
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const props = defineProps({
    id: String,
    name: String,
    price: Number,
});
</script>