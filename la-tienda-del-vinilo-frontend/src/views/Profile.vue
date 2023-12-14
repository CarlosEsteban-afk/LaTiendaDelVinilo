<template>
    <main class="profile-page">
        <div class="d-flex align-center">
            <h1>Perfil</h1> <router-link class="button" to="/editprofile">
                <v-tooltip activator="parent" location="end">
                    Editar perfil
                </v-tooltip>
                <v-btn variant="text" icon="">
                    <span class="material-symbols-outlined" style="color: var(--grey);">
                        edit_square
                    </span>
                </v-btn> </router-link>
        </div>
        <br>
        <v-card color="#D9D9D9">
            <div class="d-flex flex-no-wrap">
                <v-row no-gutters>
                    <v-col cols="3">
                        <v-avatar class="ma-8" size="230" rounded="0" color=#f1f5f9>
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
                            <v-col align-self="center">
                                <p> {{ user.name }} </p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Apellido:</p>
                            </v-col>
                            <v-col align-self="center">
                                <p>{{ user.lastname }}</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Correo electrónico:</p>
                            </v-col>
                            <v-col align-self="center">
                                <p>{{ user.email }}</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col cols="3">
                                <p class="UserInfoLabel">Usuario:</p>
                            </v-col>
                            <v-col align-self="center">
                                <p>{{ user.username }}</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <br>
        <ProfileMenu />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import ProfileMenu from '../components/ProfileMenu.vue'

const props = defineProps({})

let user = ref({});
const rut = "203670605";

import { useUserStore } from '../stores/UserStore';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(async () => {
    await userStore.fetchUser(rut).then((res) => { user.value = res });
});
console.log(user.value);
</script>

<style lang="scss">
.MenuButton {
    background-color: #F8E3E3;
    width: 200px;
    color: var(--grey);
}

.UserInfoLabel {
    margin: 10px;
}
</style>