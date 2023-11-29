<template>
  <main class="cart-page">
    <Searchbar />
    <div class="item">
      <h1>Carrito</h1>
      <ProfileButton />
    </div>

    <div v-if="!cartStore.formattedCart.length">
      <v-layout class="rounded rounded-md">

        <v-main class="d-flex align-center" style="min-height: 500px;">
          <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
            <v-icon class="mb-5" color="#520100" icon="mdi-cart" size="112" />

            <div class="align-center py-3">
              <h4>Carrito Vacio!</h4>
            </div>

            <v-divider class="mb-4"></v-divider>

            <div class="text-center">
              <router-link to="/">
                <v-btn variant="tonal" style="color: #520100;">
                  Comprar
                </v-btn>
              </router-link>
            </div>

          </v-sheet>
        </v-main>
      </v-layout>
    </div>

    <div v-else>
      <v-table hover>
        <thead>
          <tr>
            <th class="text-left">
              Nombre
            </th>
            <th class="text-left">
              Cantidad
            </th>
            <th class="text-left">
              Precio
            </th>
            <th>
              Total
            </th>
            <th>
              Eliminar Item
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.formattedCart" :key="item.name">
            <td>{{ item.name }}</td>

            <td>
              <div class="item">
                {{ item.quantity }}
                <div>
                  <v-btn icon="mdi-plus" variant="tonal" @click="cartStore.add(item.id)" />
                  <v-btn icon="mdi-minus" variant="tonal" @click="cartStore.remove(item.id)" />
                </div>
              </div>
            </td>

            <td>{{ item.price }}</td>
            <td>{{ item.cost }}</td>
            <td>
              <v-btn icon="mdi-delete" color="red" variant="tonal" @click="cartStore.removeProduct(item.id)" />
            </td>
          </tr>
        </tbody>

      </v-table>

      <div class="d-flex justify-end py-3">
        <v-btn variant="tonal" append-icon="mdi-cart-check">
          Pagar
        </v-btn>
      </div>


    </div>


  </main>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
import Searchbar from '@/components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
const cartStore = useCartStore();
</script>

<style lang ="scss">
.cart-header {
  display: flex;
  justify-content: space-between;
  width: 75rem;
}


.red-border {

  border: 1px solid red;


}

.blue-border {

  border: 1px solid blue;


}
</style>