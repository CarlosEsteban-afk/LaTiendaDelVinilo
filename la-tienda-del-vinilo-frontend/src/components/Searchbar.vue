<template>

   
    <v-form>
        <v-text-field append-inner-icon="mdi-magnify" clearable v-model="keyword" label="Buscar"
            @change="search"></v-text-field>

    </v-form>

</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'

const keyword = ref("");


function search() {
    const findItem = products.filter(
        (item) => item.name === keyword.value
    );
    if (findItem) {
        console.log(findItem)

    } else {
        console.log("nada encontrado");
    }


}

</script>

<style lang="scss">
.test {
    width: 500px;
    text-align: center;
}
</style>