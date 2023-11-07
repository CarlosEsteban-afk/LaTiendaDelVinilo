
<template>
  <v-row no-gutters class="items">

    <v-card :loading="loading" width="400" style="height: fit-content;" variant="tonal">

      <v-img height="250" cover src="../assets/logo.png" />

      <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="red" height="4" indeterminate></v-progress-linear>
      </template>

      <v-card-item>
        <v-card-title>
          {{ props.name }}
        </v-card-title>
        <v-card-subtitle>
          <span class="me-1">Nombre Artista</span>
          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <!-- rating discos -->
          <v-rating :model-value="props.rating" color="amber" density="compact" half-increments readonly
            size="small"></v-rating>
          <div class="text-grey ms-4">
            {{ props.rating }} (+50)
          </div>
          
          <div class="my-4 px-4 text-subtitle-1">
            $ • {{ props.price }}
          </div>


        </v-row>
        <!-- precio -->
       
        <v-card-actions style="display: inline;">
          <v-btn color="lighten-2" variant="text" icon="" @click="wishlistStore.add(props.id)">
            <div v-if="liked()">
              <span class="material-symbols-outlined">favorite</span>
            </div>
            <div v-else>
              <span class="material-symbols-outlined">heart_check</span>
            </div>
            <span class=""></span>
          </v-btn>
          <v-btn color="lighten-2" variant="text" @click="cartStore.add(props.id)">
            <span class="material-symbols-outlined">shopping_cart</span>
            <p>Añadir al Carro</p>
          </v-btn>
        </v-card-actions>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>


      <v-card-actions>
        <v-dialog width="700">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="#520100" variant="tonal">Ver Detalles</v-btn>
          </template>
          <template v-slot:default="{ isActive }">

            <v-row>
              <v-col cols="6">
                <v-img src="../assets/logo.png"></v-img>
              </v-col>
              <v-col cols="6">
                <v-card :title="props.name">
                  <v-card-text>
                    {{ props.description }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Cerrar" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

          </template>
        </v-dialog>
      </v-card-actions>

    </v-card>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/CartStore'
import { useWishlistStore } from '../stores/WishlistStore';

const loading = ref(false);
const is_selected = ref(false);

const props = defineProps({
  id: Number,
  name: String,
  description: String,
  rating: Number,
  price: Number,
});

function iterImg(productId) {

}
console.log(props.id);

const cartStore = useCartStore();


const wishlistStore = useWishlistStore();
const loved = ref(false);
function liked() {
  if (wishlistStore.formattedList.find(item => item.id === props.id)) {
    return false
  }
  return true
}

</script>
<style>
.items {
  padding: 2rem;
  width: fit-content;
}

.asdf {

  position: absolute;

}
</style>