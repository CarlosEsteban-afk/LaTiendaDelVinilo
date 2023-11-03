<template>
    <div>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">N° de orden</th>
        <th class="text-left">Usuario</th>
        <th class="text-left">Datos</th>
        <th class="text-left">Precio</th>
        <th class="text-left">Fecha</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.name">
          <td>{{ item.number }}</td>
          <td>{{ item.user }}</td>
          <td>{{ item.data }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </template>
  
  <script>

  import { dataOrders } from '../data/dataAdminOrders.js';
  export default {
    data () {
      return {
        datos: dataOrders
      }
    },
}
  </script>../data/dataOrders.js../data/dataStatusPurchase.js../data/dataAdminOrders.js
