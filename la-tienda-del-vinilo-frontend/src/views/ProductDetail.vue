<template>
    <main class="about-page">

        <Searchbar />

        <ProfileButton style="display: flex; justify-content: end;"></ProfileButton>
        <v-divider class="mb-4"></v-divider>
        {{ products }}
        <div v-for="product in products" class="mt-7">
            <v-sheet>
                <v-row>
                    <v-col style="height: 20rem;">
                        <v-img src="../assets/logo.png"></v-img>
                    </v-col>
                    <v-col >
                        <div class="mb-2">
                            <h1>{{ product.name }}</h1>
                        </div>
                        <div class="mt-2">
                            {{ product.description }}
                        </div>

                    </v-col>

                </v-row>

            </v-sheet>
        </div>

    </main>
</template>
<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '../components/ProfileButton.vue';
import { useProductStore } from '@/stores/ProductStore';
import { onMounted } from 'vue';
import { ref } from 'vue';

const productStore = useProductStore();
const products = ref({});

const props = defineProps({
    id: String
});

onMounted(async () => {
    products.value = await productStore.findItemById(props.id);

})


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