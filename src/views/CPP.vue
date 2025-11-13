<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import RotatingCube from '../components/RotatingCube.vue'
import { TresCanvas } from '@tresjs/core'
</script>

<template>
    <div class="CPP1-wrapper">
        <NavBar />
        <h1 id="title">C++</h1>
        <main>
        </main>
    </div>
    <TresCanvas clear-color="#191c25" window-size class="canvas">
        <RotatingCube />
    </TresCanvas>
</template>

<style scoped>
.canvas {
    z-index: -1;
}
</style>
