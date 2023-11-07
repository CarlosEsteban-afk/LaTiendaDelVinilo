<template>
	<div class="app">
		<Sidebar />
		<router-view></router-view>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
//el stylesheet usa sass, que es css pero el cascada
:root {
	--primary: #efe0b9;
	--primary-alt: #22c55e;
	--grey: #3E3E32;
	--light-grey: #D9D9D9;
	--dark: #520100;
	--dark-alt: #DB2531;
	--light: #f1f5f9;
	--light-alt: #F8E3E3;
	--sidebar-width: 250px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Mooli', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 3rem;

		@media (max-width: 700px) {
			padding-left: 5rem;
		}
	}
}
</style>