<template>
    <main class="about-page">

        <Searchbar />

        <ProfileButton style="display: flex; justify-content: end;"></ProfileButton>

        {{ product }}
    </main>
</template>
<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '../components/ProfileButton.vue';
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore();

const props = defineProps({
    id: String
});
async function foundProduct() {
    const product = await productStore.findItemById(props.id);
    return product;
}

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