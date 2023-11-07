<template>
    <v-card color="#F8E3E3">
        <v-row style="justify-content: space-evenly;">
            <v-col cols="2" style="align-self: center;">
                <v-img class="ma-4" height="60" src="../assets/logo.png"></v-img>
            </v-col>
            <v-col cols="5" style="align-self: center;">
                <v-card-item>
                    <v-card-title>{{props.details}}</v-card-title>
                </v-card-item>
            </v-col>
            <v-col cols="2" style="align-self: center;">
                <h4>Estado:</h4>
            </v-col>
            <v-col cols="2" style="align-self: center;">
                {{ props.status }}
            </v-col>
        </v-row>
    </v-card>
    <br>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: Number,
    details: String,
    orderNumber: Number,
    user: String,
    status: String
});
</script>