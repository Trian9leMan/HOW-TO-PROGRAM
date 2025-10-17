<script setup lang="ts">
</script>

<template>
    <img class="background" />
</template>

<style scoped>
/* .background {
    background-image: url('../assets/backgrounds/stacked waves 1.svg');
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
} */

img.background {
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

@media screen and (max-width: 1024px) {
    img.background {
        left: 50%;
        margin-left: -512px;
    }
}
</style>
