<template>
  <div class="registration-page">
    <h1>Registro</h1>
    <div class="icon-circle">
      <span class="material-symbols-outlined">person</span>
    </div>
    <form @submit.prevent="register">
      <div>
        <label for="username" style="display: none">Nombre de Usuario</label>
        <input
          type="text"
          id="username"
          v-model="formData.username"
          placeholder="Nombre de Usuario"
          required
        />
      </div>
      <div>
        <label for="password" style="display: none">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          placeholder="Contraseña"
          required
        />
      </div>
      <div>
        <label for="rut" style="display: none">Rut</label>
        <input
          type="rut"
          id="rut"
          v-model="formData.rut"
          placeholder="Rut sin punto ni guion"
          required
        />
      </div>
      <div>
        <label for="email" style="display: none">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="Correo Electrónico"
          @blur="validateEmail"
          required
        />
      </div>
      <div>
        <label for="name" style="display: none">Nombre</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="Nombre"
          required
        />
      </div>
      <div>
        <label for="lastname" style="display: none">Apellido</label>
        <input
          type="text"
          id="lastname"
          v-model="formData.lastname"
          placeholder="Apellido"
          required
        />
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
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        rut: "",
        email: "",
        name: "",
        lastname: "",
      },
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.formData.email)) {
        this.emailError = "Por favor, ingrese un correo electrónico válido.";
      } else {
        this.emailError = "";
      }
    },
    validarRut(rut) {
      if (!/^\d{8,9}$/.test(rut)) {
    return false; // El RUT no cumple con las condiciones requeridas
      }
  return true; // El RUT no cumple con la longitud requerida
  },
    clearPlaceholder(fieldName) {
      if (this.formData[fieldName] !== "") {
        document.getElementById(fieldName).classList.add("input-filled");
      } else {
        document.getElementById(fieldName).classList.remove("input-filled");
      }
    },
    async register() {
      // logica para agregar datos
      // establece 3 caracteres minimos para la contraseña
      this.validateEmail();
      if (this.formData.password.length < 3) {
        alert("La contraseña debe tener al menos 3 caracteres.");
        return;
      }
      const fields = Object.values(this.formData);
      if (fields.some((field) => !field)) {
        alert("Por favor, complete todos los campos.");
        return;
      }
      const isValidRut = this.validarRut(this.formData.rut);
      if (!isValidRut) {
        alert("El RUT ingresado no es válido.");
        return;
      }
      if (this.emailError) {
        // Si hay un error en el correo, detener el registro
        alert("Correo Electronico no valido.");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          this.formData
        );
        console.log("Datos enviados:", response.data);
        this.formData = {
          username: "",
          password: "",
          rut: "",
          email: "",
          name: "",
          lastname: "",
        };

        this.$router.push("/profile");
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert(
          "Hubo un error al enviar los datos. Por favor, intenta nuevamente."
        );
      }
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