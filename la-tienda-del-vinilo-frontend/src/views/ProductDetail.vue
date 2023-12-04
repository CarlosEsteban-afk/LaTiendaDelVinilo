<template>
    <main class="about-page">

        <Searchbar />

        <ProfileButton style="display: flex; justify-content: end;"></ProfileButton>

        {{ products }}

        <v-divider class="mb-4"></v-divider>

        <div v-for="product in products">
            {{ product.name }}
            {{ product.price }}
            {{ product.rating }}
            {{ product.category }}

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