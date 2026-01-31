<template>
  <SectionSurface class="cover" variant="blue">
    <div class="w-full flex flex-col items-center justify-center text-center gap-6">
      <div class="cover-logo">
        <slot name="logo" />
      </div>
      <h1 class="m-0">
        <slot name="title" />
      </h1>
      <p class="m-0">
        <slot name="subtitle" />
      </p>
      <WorkshopsLogo class="h-6 w-auto" />
      <div class="cover-body">
        <slot />
      </div>
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>
