<script setup lang="ts">
import Navbar from './partials/Navbar.vue'
</script>

<template>
  <div class="h-screen flex flex-col justify-between bg-zinc">
    <div class="flex-1 flex flex-col gap-2 p-6 overflow-auto">
      <slot />
    </div>
    <Navbar />
  </div>
</template>
