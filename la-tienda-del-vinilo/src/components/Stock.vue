<template>
   <div>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Nombre del producto</th>
        <th class="text-left">Stock</th>
        <th class="text-left">Precio</th>
        <th class="text-left">Detalle</th>
        <th class="text-left">id</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in datos" :key="item.name">
        <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.price }}</td>
          <td>
            <v-avatar style="width: 64px; height: 64px;">
                 <img :src="item.detail"/>
                </v-avatar>
          </td>
          <td>{{ item.id }}</td>
          <td>
            <v-btn  color="primary" @click="editProduct(item)">Editar</v-btn>
            <v-btn color="error" @click="deleteProduct(item)">Eliminar</v-btn>
          </td>
      </tr>
    </tbody>
  </v-table>
            <td>
              <router-link class="button" to="/AddProduct"><v-btn color="#DB2531">Agregar Productos</v-btn></router-link>
          </td>
    </div>
</template>

<script>
import { stockData } from '../data/dataStock.js';
export default {
    data () {
      return {
        datos: stockData,
    
      }
    },
    methods: {
      editProduct(producto) {
     
    },
    deleteProduct(producto) {
      
    },
  },
}
</script>

<style>

</style>