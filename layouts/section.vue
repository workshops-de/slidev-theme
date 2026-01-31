<template>
  <SectionSurface variant="blue">
    <template #header>
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Section" theme="blue" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
    </template>
    <div class="flex flex-col text-center">
      <slot />
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>
