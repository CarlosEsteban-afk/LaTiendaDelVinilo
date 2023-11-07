<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo-tienda">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <span class="material-symbols-outlined" @click="ToggleMenu">
                    start
                </span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/register">
                <span class="material-symbols-outlined">app_registration</span>
                <span class="text">Registro</span>
            </router-link>
            <router-link class="button" to="/login">
                <span class="material-symbols-outlined">account_circle</span>
                <span class="text">Acceso</span>
            </router-link>
            <router-link class="button" to="/cart">
                <div v-if="cartLoaded()">

                    <v-badge class="material-symbols-outlined" :content="cartStore.productsTotal" color="red">
                        <v-icon icon="mdi-cart" size="48"></v-icon>
                    </v-badge>

                </div>
                <div v-else>

                    <v-icon class="material-symbols-outlined" icon="mdi-cart" size="48"></v-icon>

                </div>


                <span class="text">Carrito</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-symbols-outlined">groups</span>
                <span class="text">About</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
import { ref } from 'vue'

const cartStore = useCartStore();

function cartLoaded() {
    return cartStore.formattedCart.length;
}

const is_expanded = ref(false);

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(6rem + 48px); //el doble del padding mas 32px que corresponden al tamaño de los iconos
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem;


    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 5rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-symbols-outlined {

                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;


            }


            &:hover {
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }

        }



    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2 ease-out;

            .material-symbols-outlined {
                font-size: 3rem;
                color: var(--primary);
                transition: 0.2s ease-out;

            }

            .text {
                font-size: 2rem;

                color: var(--primary);
                transition: 0.2s ease-out;
            }

            &:hover {
                transition: 0.2s ease-out;

                background-color: var(--dark-alt);

                .material-symbols-outlined,
                .text {
                    color: var(--primary);
                }
            }
        }

    }


    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -5rem;

            .menu-toggle {
                transform: rotate(180deg);
            }

        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-symbols-outlined {
                margin-right: 1rem;
            }

        }


    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>