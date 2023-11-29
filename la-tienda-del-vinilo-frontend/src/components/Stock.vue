<template>
   <div>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Nombre del producto</th>
        <th class="text-left">Stock</th>
        <th class="text-left">Precio</th>
        <th class="text-left">Categoria</th>
        <th class="text-left">Detalle</th>
        <th class="text-left">id</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in info" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.price }}</td> 
        <td>{{ item.category }}</td>
          <td>
            <v-avatar style="width: 64px; height: 64px;">
                 <img :src="item.imgUrl"/>
                </v-avatar>
          </td>
          <td>{{ item.id }}</td>
          <td>
            <v-btn  color="primary" @click="editProduct(item)">Editar</v-btn>
            <v-btn color="error" @click="deleteProduct(item.id)">Eliminar</v-btn>
          </td>
      </tr>
    </tbody>
  </v-table>
        <v-snackbar v-model="showSuccessMessage" color="success">
                  Producto eliminado exitosamente.
                    <v-btn text @click="showSuccessMessage = false">Cerrar</v-btn>
          </v-snackbar>
            <td>
              <router-link class="button" to="/AddProduct"><v-btn color="#DB2531">Agregar Productos</v-btn></router-link>
          </td>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        info: [],
        showSuccessMessage: false,
      }
    },
    created() {
    this.showProducts();
  },
    methods: {
      async showProducts(){
    try{
      const response = await axios.get('http://localhost:5000/api/products');
      this.info = response.data;
    }catch (error) {
        console.error('Error get user:', error);
      }
    },
    async deleteProduct(productId){
        try{
          await axios.delete('http://localhost:5000/api/products',{
          data: { id: productId },});
        this.info = this.info.filter(item => item.id !== productId);
        this.showSuccessMessage = true;
        }catch(error){
          console.error('Error get user:', error);
        }
    }
    },
}
</script>

<style>

</style>