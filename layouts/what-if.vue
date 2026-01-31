<template>
  <SectionSurface class="what-if" variant="red">
    <template #header>
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="What If" theme="red" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
    </template>
    <div class="w-full flex items-center justify-center flex-row gap-12 max-[768px]:flex-col text-left">
      <div class="copy max-w-3xl flex flex-col gap-6">
        <slot />
      </div>
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineOptions({ name: 'WhatIfLayout' })
</script>

<style>
.what-if .section-content :where(h1, h2, p) {
  @apply m-0 text-inherit;
}
</style>
