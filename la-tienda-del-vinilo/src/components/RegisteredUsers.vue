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
        <th class="text-left">id</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.name">
        <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.id }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </template>
  
  <script>
  import { usersData } from '../data/dataUsers.js';
  export default {
    data () {
      return {
        datos: usersData,
       
      }
    },
}
  </script>

../data/dataUsers.js

