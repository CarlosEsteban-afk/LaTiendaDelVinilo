<template>
    <main class="wishlist-page">
        <div class="item">
            <h1>Usuario</h1>
            <ProfileButton />
        </div>
        <div>
            <v-container class="navbar">
                <v-card style="width: 999px; margin-left: 20px;">
                   <v-tabs v-model="tab" color=var(--grey) align-tabs="center" max-width="999px">
                    <v-tab :value="1" width="333px" color="#520100">Lista de deseos</v-tab>
                    <v-tab :value="2" width="333px" color="#520100">Estado de compra</v-tab>
                    <v-tab :value="3" width="333px" color="#520100">Compras anteriores</v-tab>
                </v-tabs> 
                </v-card>
                
                <v-card class="navbar overflow-y-auto" style="height: 450px;">

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item v-for="n in 3" :key="n" :value="1">
                                <v-container fluid>
                                    <Wished v-for="item in wishlistStore.formattedList" :id="item.id" :name="item.name"
                                        :price="item.price">
                                    </Wished>
                                </v-container>
                            </v-window-item>
                            <v-window-item v-for="n in 3" :key="n" :value="2">
                                <v-container fluid>
                                    <UserOrder v-for="item in dataOrder" :id="item.id" :details="item.detail"
                                        :orderNumber="item.orderNumber" :user="item.user" :status="item.state" />
                                </v-container>
                            </v-window-item>
                            <v-window-item v-for="n in 3" :key="n" :value="3">
                                <v-container fluid>
                                    <PreviouslyPurchased v-for="item in dataPreviousOrders" :id="item.id" :user="item.user"
                                        :detail="item.data" :price="item.price" :date="item.date" />
                                </v-container>
                            </v-window-item>
                        </v-window>
                    </v-card-text>



                </v-card>
            </v-container>
        </div>
    </main>
</template>

<script setup>
import ProfileButton from '@/components/ProfileButton.vue';
import UserOrder from '@/components/UserOrder.vue'
import PreviouslyPurchased from '@/components/PreviouslyPurchased.vue';
import Wished from '@/components/Wished.vue';


import { ref } from 'vue';

import { stockOrder } from '@/data/dataPurchaseStatus';
import { dataOrders } from '@/data/dataAdminOrders';
import { useWishlistStore } from '@/stores/WishlistStore';
import { useCartStore } from '@/stores/CartStore';

const dataOrder = stockOrder;
const dataPreviousOrders = dataOrders;
const wishlistStore = useWishlistStore();
const tab = ref(null);

</script>

<style lang="scss">
.navbar {
    height: 500px;
    width: 999px;
    margin-left: 20px;
    align-content: center;
}

.cardItems {
    justify-content: space-between;
}
</style>