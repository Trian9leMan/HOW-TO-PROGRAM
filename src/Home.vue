<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Background from './components/Background.vue'
</script>

<template>
    <NavBar />
    <h1 id="title">How to Program</h1>
    <main>
        <h2 class="heading">Why Programming?</h2>
        <p>
            Programming is an essential skill in today's technology-driven world. It empowers individuals to create software, solve complex problems, and innovate across various industries. Learning to code enhances critical thinking, creativity, and problem-solving abilities, making it a valuable asset in both personal and professional contexts. Whether you're interested in web development, data science, artificial intelligence, or game development, programming opens up a world of opportunities and allows you to bring your ideas to life.
        </p>
        <h2 class="heading">How to start coding</h2>
    </main>
    <Background src="src/assets/backgrounds/stacked waves 1.svg" style="top: 7rem;" />
</template>

<style scoped>
.heading {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>