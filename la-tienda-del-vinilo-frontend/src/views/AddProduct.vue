<template>
  <v-container>
    <h1 class="font-weight-bold text-h2 py-6">Nuevos Productos</h1>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="id"
              v-model="id"
              :rules="[() => !!id || 'Campo obligatorio', checkIsNumber('id')]"
              :error-messages="errorMessages"
              label="id del producto"
              required
            ></v-text-field>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'Campo obligatorio']"
              :error-messages="errorMessages"
              label="Nombre del producto"
              required
            ></v-text-field>
            <v-text-field
              ref="Stock"
              v-model="stock"
              :rules="[
                () => !!stock || 'Campo obligatorio',
                checkIsNumber('stock'),
              ]"
              label="Numero del stock"
              required
            ></v-text-field>
            <v-text-field
              ref="price"
              v-model="price"
              :rules="[
                () => !!price || 'Campo obligatorio',
                checkIsNumber('price'),
              ]"
              label="Precio del producto"
              required
            ></v-text-field>
            <v-text-field
              ref="img"
              v-model="img"
              :rules="[() => !!img || 'Campo obligatorio']"
              label="img del producto"
              required
            ></v-text-field>
            <v-select
              :items="state"
              v-model="selectedState"
              label="Selecciona una categoria"
              @change="changeStatus"
            ></v-select>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <router-link class="button" to="/Admin">
              <v-btn variant="text"> Cancelar </v-btn></router-link
            >
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on">
                  </v-btn>
                </template>
        
            </v-slide-x-reverse-transition>
            <v-btn color="primary" variant="text" @click="submit">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    errorMessages: "",
    id: null,
    name: null,
    stock: null,
    price: null,
    img: null,
    formHasErrors: false,
    selectedState: null,
    state: ["Rock", "Jazz", "Funk", "Punk", "Disco"],

    validationRules: {
      id: (val) => !isNaN(val) || "Debe ser un número",
      stock: (val) => !isNaN(val) || "Debe ser un número",
      price: (val) => !isNaN(val) || "Debe ser un número",
    },
  }),

  methods: {
    resetForm() {
      this.errorMessages = "";
      this.formHasErrors = false;
    },
    async submit() {
      const fieldsWithErrors = [];
      if (fieldsWithErrors.length === 0) {
        try {
          const response = await axios.post('http://localhost:5000/api/products', {
            id: this.id,
            name: this.name,
            stock: this.stock,
            price: this.price,
            imgUrl: this.img,
            category: this.selectedState
          });
          console.log('Datos guardados correctamente:', response.data);
          this.$router.push('/Admin');
        } catch (error) {
          console.error('Error al guardar los datos:', error);
        }
      } else {
        this.formHasErrors = true;
        console.log('Campos con errores:', fieldsWithErrors);
      }
    },
    checkIsNumber(fieldName) {
        return (value) => {
    return !isNaN(value) || `El campo ${fieldName} debe ser un número`;
    };
    },
  },
};
</script>

<style>
</style>