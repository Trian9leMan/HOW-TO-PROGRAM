<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import * as THREE from 'three'
import { ref } from 'vue'

interface Props {
    xRotSpeed?: number,
    yRotSpeed?: number,
    colour?: string,
}

const props = withDefaults(defineProps<Props>(), {
    xRotSpeed: 1 / 2,
    yRotSpeed: 1 / 2,
});


const cubeRef = ref<THREE.Mesh | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
    if (cubeRef.value) {
        cubeRef.value.rotation.x += delta / (1 / props.xRotSpeed)
        cubeRef.value.rotation.y += delta / (1 / props.yRotSpeed)
    }
})
</script>

<template>
    <TresPerspectiveCamera :position="[7, 7, 7]" :look-at="[0, 0, 0]" />
    <TresMesh ref="cubeRef" :position="[0, 0, 0]">
        <TresTorusGeometry :args="[5, 2, 16, 100]" />
        <!-- <TresBoxGeometry :args="[2, 2, 2]" /> -->
        <TresMeshNormalMaterial />
    </TresMesh>
</template>

<style scoped></style>
