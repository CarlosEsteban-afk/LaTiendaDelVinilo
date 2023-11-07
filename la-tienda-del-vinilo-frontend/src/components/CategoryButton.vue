

<template>
    <div class="text-center">
        <v-menu open-on-hover :close-delay="1000">
            <template v-slot:activator="{ props }">
                <v-btn color="#efe0b9" v-bind="props">
                    <v-icon>mdi-music</v-icon>
                    <v-divider class="ms-3" inset vertical></v-divider>
                    <p>Categorias</p>
                </v-btn>
            </template>

            <v-list>
                <v-list-item color="red" v-for="(item, index) in items" :key="index" :value="index">

                    <v-list-item-title>
                        <v-icon>
                            {{ item.icon }}
                        </v-icon>
                        {{ item.title }}
                    </v-list-item-title>

                </v-list-item>
            </v-list>

        </v-menu>
    </div>
</template>

<script setup>

const items = [
    {
        title: 'ROCK',
        icon: 'mdi-guitar-electric'
    },
    {
        title: 'JAZZ',
        icon: 'mdi-saxophone'

    },
    {
        title: 'FUNK',
        icon: 'mdi-emoticon-cool'

    },
    {
        title: 'PUNK',
        icon: 'mdi-waveform'

    },
    {
        title: 'DISCO',
        icon: 'mdi-disc'
    }
];



</script>

<style></style>