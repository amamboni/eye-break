<template>
  <div class="flex flex-col">
    <h1 class="text-lg font-semibold">
      <slot name="title" />
    </h1>
    <p v-if="$slots.description" class="text-gray"><slot name="description" /></p>
  </div>
</template>
