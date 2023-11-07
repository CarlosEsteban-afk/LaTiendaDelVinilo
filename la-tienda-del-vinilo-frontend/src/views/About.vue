<template>
    <main class="about-page">

        <Searchbar />

        <ProfileButton style="display: flex; justify-content: end;"></ProfileButton>

        <div class="text-center">
            <h1>Contactanos</h1>
        </div>


        <v-layout class="rounded rounded-md">

            <v-main class="d-flex align-center" style="min-height: 500px;">
                <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                    <v-icon class="mb-5" color="#520100" icon="mdi-account" size="112"></v-icon>

                    <h2 class="text-h5 mb-6">Acerca de nosotros</h2>
                    <p>Entra a la tienda del vinilo! y encuentra las mejores ofertas en los catalogos de nuestra tienda</p>

                    <div class="about-item align-center py-3">

                        <v-icon class="mb-3" icon="mdi-cellphone" size="35">
                        </v-icon>

                        <p>+564 5247 8965</p>

                    </div>
                    <div class="about-item inline align-center py-3">

                        <v-icon class="mb-3" icon="mdi-map-marker" size="35">
                        </v-icon>

                        <p>Av.Alemania 0671, Temuco</p>

                    </div>




                    <v-divider class="mb-4"></v-divider>

                    <div class="text-end">
                        <v-btn class="text-none" color="#22c55e" rounded variant="flat">
                            <p> Tu opnion nos importa
                            </p>
                        </v-btn>
                    </div>
                </v-sheet>
            </v-main>



        </v-layout>


    </main>
</template>
<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '../components/ProfileButton.vue';
</script>

<style lang="scss">
.footer-style {

    border: 1px solid red;
    height: 200px;
    width: 100rem;
}

.container {
    display: flex;
    border: 1px solid red;
    align-items: center;
    justify-content: center;
}


.about-item {
    display: flex;
    align-content: center;
}
</style>