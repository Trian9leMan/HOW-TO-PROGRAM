<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const transitionName = ref('slide-from-left');
const transitionMode = ref<"out-in" | "default" | "in-out" | undefined>('out-in');

watch(() => route.fullPath, (to, from) => {
  const toSegments = to.split('/').filter(Boolean)
  const fromSegments = from?.split('/').filter(Boolean) ?? []

  const toDepth = toSegments.length
  const fromDepth = fromSegments.length

  const toBase = toSegments[0] || ''
  const fromBase = fromSegments[0] || ''

  const sameSection = toBase === fromBase && toBase !== ''

  if (sameSection && Math.abs(toDepth - fromDepth) === 1) {
    // Navigating within a section (e.g. python → python/2)
    // transitionName.value = toDepth > fromDepth ? 'slide-from-left' : 'slide-from-right'
    transitionName.value = toDepth > fromDepth ? 'scale-slide-fade-from-left' : 'scale-slide-fade-from-right'
    transitionMode.value = 'default'
  } else {
    // Navigating between root pages (home → python or cpp → home)
    transitionName.value = 'fade'
    transitionMode.value = 'out-in'
  }
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="transitionName" :mode="transitionMode" appear :key="route.fullPath">
    <!-- <Transition name="fade" mode="out-in" appear :key="route.fullPath"> -->
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
@import "./transitions.css";
</style>