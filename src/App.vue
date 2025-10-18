<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const transitionName = ref('slide-from-left');
const transitionMode = ref<"out-in" | "default" | "in-out" | undefined>('out-in');

watch(() => route.fullPath, (to, from) => {
  const toDepth = to.split('/').length;
  const fromDepth = from ? from.split('/').length : 0;

  transitionName.value = toDepth < fromDepth
    ? 'slide-from-right'
    : toDepth === fromDepth
      ? 'fade'
      : 'slide-from-left';

  transitionMode.value = toDepth === fromDepth ? 'out-in' : 'default';
});

useRouter().afterEach((to, from) => {
  console.log('Navigated from', from.fullPath, 'to', to.fullPath);
});
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <!-- <Transition :name="transitionName" :mode="transitionMode" :key="route.fullPath"> -->
    <Transition name="fade" mode="out-in" :key="route.fullPath">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
@import "./transitions.css";
</style>