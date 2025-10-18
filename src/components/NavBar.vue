<script setup lang="ts">
</script>

<template>
    <nav id="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/python/1">Python</RouterLink>
        <RouterLink to="/cpp/1">C++</RouterLink>
    </nav>
</template>

<style scoped>
#navbar {
    background-color: var(--navbar-background);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    text-justify: auto;
}

#navbar a {
    color: var(--navbar-text);
    padding: 0.428rem 1.25rem;
    text-decoration: none;
    text-align: center;
    line-height: 2rem;
    transition: background-color 250ms;
    text-transform: uppercase;
    font-weight: bold;
}

#navbar a:hover {
    background-color: var(--accent-colour);
}
</style>
