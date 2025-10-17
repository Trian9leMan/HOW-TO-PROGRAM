<!-- TODO: Make transitions work -->

<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{ Component }">
  <Transition name="fade" mode="out-in">
    <div>
      <component :is="Component" />
    </div>
  </Transition>
</RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
