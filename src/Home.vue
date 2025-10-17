<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Background from './components/Background.vue'
</script>

<template>
    <NavBar />
    <h1 id="title">How to Program</h1>
    <main>
        <h2 class="heading">Why should you code?</h2>
    </main>
    <Background src="src/assets/backgrounds/stacked waves 1.svg" />
</template>

<style scoped>
.heading {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>
