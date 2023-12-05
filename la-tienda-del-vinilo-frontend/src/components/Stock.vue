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
          <v-dialog v-model="editDialog" max-width="500px">
    <v-card>
      <v-card-title>Editar Producto</v-card-title>
      <v-card-text>
      <!--campos editables para el producto -->
        <v-text-field v-model="editedProduct.name" label="Nombre del Producto"></v-text-field>
        <v-text-field v-model="editedProduct.stock" label="Stock del Producto" type="number"></v-text-field>
        <v-text-field v-model="editedProduct.price" label="Precio del Producto" type="number"></v-text-field>
        <v-select
            v-model="editedProduct.category"
            :items="categoryOptions"
              label="Categoría del Producto"
              ></v-select>
        <v-text-field v-model="editedProduct.imgUrl" label="Imgagen del Producto"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveChanges" :disabled="!isFormValid">Guardar Cambios</v-btn>
        <v-btn color="error" @click="editDialog = false">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        info: [],
        showSuccessMessage: false,
        editDialog: false,
      editedProduct: {},
      editedProduct: {
        category: '',
      },
      categoryOptions: ["Rock", "Jazz", "Funk", "Punk", "Disco"],
      }
    },
    computed: {
    isFormValid() {
      // Verifica si todos los campos tienen valores
      return (
        this.editedProduct.name &&
        this.editedProduct.stock &&
        this.editedProduct.price &&
        this.editedProduct.category &&
        this.editedProduct.imgUrl
      );
    }
  },
    created() {
    this.showProducts();
  },
    methods: {
      editProduct(item) {
      this.editedProduct = { ...item }; 
      this.editDialog = true; 
    },
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
    },
    async saveChanges() {
      try {
        const productId = this.editedProduct.id;
         await axios.put('http://localhost:5000/api/products/', {
          id: productId,
          name: this.editedProduct.name,
          stock: this.editedProduct.stock,
          price: this.editedProduct.price,
          category: this.editedProduct.category,
          imgUrl: this.editedProduct.imgUrl
        });
        console.log('Producto actualizado con éxito');
        this.editDialog = false;
        this.showProducts();
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
        console.log('Detalles del error:', error.response);
      }
      },


    },
  }
</script>

<style>

</style>