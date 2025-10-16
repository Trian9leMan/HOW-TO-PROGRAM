<!-- TODO: MAKE THIS WORK -->

<script setup lang="ts">
</script>

<template>
    <div class="background" bg-src={{ src }}></div>
</template>

<style scoped>
.background {
    background-image: attr(bg-src);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
