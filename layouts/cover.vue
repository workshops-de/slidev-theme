<template>
  <SectionSurface class="cover" variant="blue">
    <div class="w-full flex flex-col items-center justify-center text-center gap-2">
      <div v-if="logo" class="cover-logo">
        <img :src="logo" alt="logo" class="h-48 w-auto" />
      </div>
      <h1 class="m-0">
        <slot name="title" />
      </h1>
      <p class="m-0">
        <slot name="subtitle" />
      </p>
      <div class="cover-body">
        <slot />
      </div>
      <WorkshopsLogo class="h-6 w-auto" />
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineProps<{
  logo?: string
}>()
</script>
