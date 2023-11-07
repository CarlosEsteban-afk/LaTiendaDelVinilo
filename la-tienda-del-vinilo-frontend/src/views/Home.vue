<template>
    <main class="home-page">
        <Searchbar />
        <div class="item">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
            <ProfileButton />

        </div>
        <v-divider class="mb-4"></v-divider>

        <v-carousel cycle hide-delimiters show-arrows="hover">
            <v-carousel-item v-for="datas in data">
                <v-sheet class="card-content " border rounded elevation="10">

                    <v-row class="car">

                        <v-col cols="5" style="height: 20rem;">
                            <v-img src="../assets/logo.png"></v-img>

                        </v-col>
                        <v-col cols="7" style="height: fit-content;">

                            <h1>{{ datas.name }}</h1>

                            <v-rating :model-value="datas.rating" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>
                            <br>
                            <p>
                                {{ datas.description }}


                            </p>

                            <br>
                            <h4>
                                $ {{ datas.price }}
                            </h4>


                        </v-col>

                        <v-sheet class="d-flex" style="width: 60rem;">
                            <v-sheet class="ma-2 pa-2 me-auto">

                                <v-btn text="Añadir al Carro" color="#520100" variant="tonal"
                                    @click="cartStore.add(datas.id)"></v-btn>
                            </v-sheet>
                            <v-sheet class="ma-2 pa-2">
                                <v-btn color="#520100" variant="tonal"
                                    @click="wishlistStore.add(datas.id)">
                                <v-icon>mdi-heart</v-icon>
                                </v-btn>
                            </v-sheet>
                            <v-sheet class="ma-2 pa-2">
                                <v-btn text="Comprar"></v-btn>
                            </v-sheet>


                        </v-sheet>



                    </v-row>

                </v-sheet>
            </v-carousel-item>

        </v-carousel>
        <v-divider class="mb-4"></v-divider>

        <v-sheet class="d-flex flex-wrap ">
            <Card v-for="datas in data" :id="datas.id" :name="datas.name" :description="datas.description"
                :rating="datas.rating" :price="datas.price"></Card>

        </v-sheet>





    </main>
</template>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import Card from '../components/Card.vue';
import data from '../data/data.js';
import CategoryButton from '../components/CategoryButton.vue'
import { useCartStore } from '../stores/CartStore'
import { useWishlistStore } from '@/stores/WishlistStore';
const cartStore = useCartStore();

const wishlistStore = useWishlistStore();

console.log(wishlistStore.formattedList);

</script>

<style lang="scss">
.buttons {
    margin-right: 4rem;
    padding-bottom: 1rem;
    justify-content: space-between;
}


.car {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 4rem;

}

.card-content {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;

}

.center-card {
    padding-top: 100px;
    padding-right: 50px;
    padding-bottom: 100px;
    padding-left: 50px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.CButton {
    display: flex;

    align-self: center;

}
</style>