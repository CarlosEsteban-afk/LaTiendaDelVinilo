<template>
    <div>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Nº de orden</th>
        <th class="text-left">Detalle</th>
        <th class="text-left">Usuario</th>
        <th class="text-left">Email</th>
        <th class="text-left">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.name">
        <td>{{ item.orderNumber }}</td>
          <td>{{ item.detail }}</td>
          <td>{{ item.user }}</td>
          <td>{{ item.email }}</td>
          <td>
            <v-select 
              :items="state"
              v-model="item.state"
              label="Selecciona estado"
              @change="changeStatus(item)"
            ></v-select>
          </td>
      </tr>
    </tbody>
  </v-table>
          <td>
            <v-btn color="primary" @click="SaveStatus(item)">Guardar</v-btn>
          </td>
    </div>
</template>

<script>
import { stockOrder } from '../data/dataPurchaseStatus.js';
export default {
  data () {
      return {
        datos: stockOrder,
        estados: ['Verificando pedido', 'En preparación', 'Listo para retiro'],
        state: ['Verificando pedido', 'En preparación', 'Listo para retiro'],
      }
    },

    methods: {
    changeStatus(item) {
      // índice del elemento 
      const index = this.datos.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        // actualiza el estado del elemento en datos
        this.datos[index].estado = item.estado;

        this.$snackbar.show({
          message: 'Estado actualizado exitosamente',
          color: 'success',
        });
      } else {
        console.error('No se pudo encontrar el elemento correspondiente');
      }
    },
    SaveStatus(item) {
      const index = this.datos.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        stockOrder[index].estado = item.estado;
        this.$snackbar.show({
          message: 'Estado guardado exitosamente',
          color: 'success',
        });
      } else {
        console.error('No se pudo encontrar el elemento correspondiente');
      }
    },
  },
}
</script>

<style>


</style>../data/dataPurchaseStatus.js
