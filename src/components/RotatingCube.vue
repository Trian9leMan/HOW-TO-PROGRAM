<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import * as THREE from 'three'
import { ref } from 'vue'

const cubeRef = ref<THREE.Mesh | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
    if (cubeRef.value) {
        cubeRef.value.rotation.x += delta / 2
        cubeRef.value.rotation.y += delta / 2
    }
})
</script>

<template>
    <TresPerspectiveCamera :position="[7, 7, 7]" :look-at="[0, 0, 0]" />
    <TresMesh ref="cubeRef" :position="[0, 0, 0]">
        <TresBoxGeometry :args="[2, 2, 2]" />
        <TresMeshNormalMaterial />
    </TresMesh>
</template>

<style scoped></style>
