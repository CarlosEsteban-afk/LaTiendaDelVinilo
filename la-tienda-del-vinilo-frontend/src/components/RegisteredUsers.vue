<template>
    <div>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Usuarios</th>
        <th class="text-left">Correo electronico</th>
        <th class="text-left">Nombre</th>
        <th class="text-left">Apellido</th>
        <th class="text-left">Rut</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in info" :key="item.name">
        <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.rut }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data () {
      return {
        info: [],
      }
    },
   async created(){
    
    try{
      const response = await axios.get('http://localhost:5000/api/users');
      this.info = response.data;
    }catch (error) {
        console.error('Error get user:', error);
      }
    }
  }
  </script>

../data/dataUsers.js

