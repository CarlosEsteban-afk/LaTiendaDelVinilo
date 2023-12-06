<template>
    <v-form>
        <v-text-field append-inner-icon="mdi-magnify" clearable v-model="keyword" label="Buscar"
            @update:model-value="search()"></v-text-field>


    </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/ProductStore';
import router from '@/router';

const productStore = useProductStore();
const keyword = ref('');
let findItem = ref([]);

const search = async () => {
    
    findItem = await productStore.findItemByName(keyword.value);
    console.log(findItem);
    if (findItem) {
        router.push({ name: 'ProductDetail', params: { id: findItem.id } })
    }
}



</script>

<style lang="scss">
.test {
    width: 500px;
    text-align: center;
}
</style>