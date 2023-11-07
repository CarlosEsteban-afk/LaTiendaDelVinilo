<template>
    <main class="edit-profile-page">
        <h1>Editar Perfil</h1>
        <br>
        <v-card color="#D9D9D9">
            <div class="d-flex flex-no-wrap">
                <v-row no-gutters>
                    <v-col cols="3">
                        <v-avatar class="ma-8" size="230" rounded="0" color="#f1f5f9">
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </v-avatar>
                    </v-col>
                    <v-col>
                        <br>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Nombre:</p>
                            </v-col>
                            <v-col>
                                <v-text-field placeholder="Jane" variant="outlined" density="compact"
                                    class="TextField"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Apellido:</p>
                            </v-col>
                            <v-col>
                                <v-text-field placeholder="Doe" variant="outlined" density="compact"
                                    class="TextField"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Correo electrónico:</p>
                            </v-col>
                            <v-col>
                                <div v-if="validateEmail()"></div>
                                <div v-else></div>
                                <v-text-field placeholder="janedoe83@correo.com" variant="outlined" density="compact"
                                    class="TextField"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Usuario:</p>
                            </v-col>
                            <v-col>
                                <div v-if="validateNewUsername()"></div>
                                <div v-else></div>
                                <v-text-field placeholder="jane1983" variant="outlined" density="compact"
                                    class="TextField"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <br>
        <div class="d-flex align-center">
            <router-link class="button" to="/profile">
                <v-btn color="#F8E3E3">
                    <h5 class="ma-1">Guardar cambios</h5>
                    <span class="material-symbols-outlined">
                        save
                    </span>
                </v-btn>
            </router-link>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");
import Searchbar from '../components/Searchbar.vue';

function validateEmail(){}

function validateNewUsername(){}

</script>

<style lang="scss">.TextField {
    padding-right: 25px;
}</style>