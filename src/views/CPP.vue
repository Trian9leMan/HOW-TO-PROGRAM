<script setup lang="ts">
// TODO: Make this work with page transitions!

import NavBar from '../components/NavBar.vue'
import RotatingDonut from '../components/RotatingDonut.vue'
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
        <RotatingDonut />
        <RotatingCube :x-rot-speed=3 :y-rot-speed=1 />
    </TresCanvas>
</template>

<style scoped>
.canvas {
    z-index: -1;
}
</style>