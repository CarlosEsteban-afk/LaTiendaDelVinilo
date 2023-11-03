<template>
  <div class="registration-page">
    <h1>Registro</h1>
    <div class="icon-circle">
      <span class="material-symbols-outlined">person</span>
    </div>
    <form @submit.prevent="register">
      <div>
        <label for="username" style="display: none;">Nombre de Usuario</label>
        <input type="text" id="username" v-model="formData.username" placeholder="Nombre de Usuario" />
      </div>
      <div>
        <label for="password" style="display: none;">Contraseña</label>
        <input type="password" id="password" v-model="formData.password" placeholder="Contraseña" />
      </div>
      <div>
        <label for="email" style="display: none;">Correo Electrónico</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Correo Electrónico" />
      </div>
      <div>
        <label for="name" style="display: none;">Nombre</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Nombre" />
      </div>
      <div>
        <label for="lastname" style="display: none;">Apellido</label>
        <input type="text" id="lastname" v-model="formData.lastname" placeholder="Apellido" />
      </div>
    </form>
    <div class="page-container">
      <v-btn color="#DB2531" @click="register()">Entrar</v-btn>
      <div class="sidebar-image">
        <img src="../assets/viniloos2.png" alt="Imagen lateral" />
      </div>
    </div>
  </div>
</template>
  
<script>
import userData from '../data/dataRegister.js';
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        email: '',
        name: '',
        lastname: '',
      },
    };
  },
  methods: {
    clearPlaceholder(fieldName) {
      if (this.formData[fieldName] !== '') {
        document.getElementById(fieldName).classList.add('input-filled');
      } else {
        document.getElementById(fieldName).classList.remove('input-filled');
      }
    },
    register() {
      // logica para agregar datos
      // establece 3 caracteres minimos para la contraseña
      if (this.formData.password.length < 3) {
        alert('La contraseña debe tener al menos 3 caracteres.');
        return; 
      } else {
        this.$router.push('/profile');
        }
      userData.users.push(this.formData);
      console.log('Datos enviados:', this.formData);
      this.formData = {
        username: '',
        password: '',
        email: '',
        name: '',
        lastname: '',
      };
    },
  },
};
</script>
  
<style scoped>

form {
  display: flex;
  flex-direction: column;
}

.registration-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 30rem;
  align-items: center;
  min-height: 100vh;
}


h1 {
  font-size: 2rem;
  color: var(--grey);
  margin-bottom: 20px;
}

.material-symbols-outlined {
  font-size: 10rem;
  color: var(--dark);
}

.icon-circle {
  text-align: center;
  background-color: var(--primary);
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  font-weight: bold;
}

input {
  padding: 12px;
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid var(--grey);
  border-radius: 3px;
  margin-bottom: 15px;
  background-color: var(--primary);
  color: var(--grey);
  transition: border-color 0.2s;
}


.sidebar-image {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 100vh;
}

.sidebar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


button {
  padding: 12px;
  width: 90px;
  background-color: var(--dark-alt);
  color: #fff;
  border: var(--dark);
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
}
</style>