<template>
  <SectionSurface class="end">
    <div class="w-full h-full grid place-content-center text-center text-xl tracking-widest select-none">
      <slot>END</slot>
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionSurface from '../components/SectionSurface.vue';
</script>
