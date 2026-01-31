<template>
  <SectionSurface class="task-next" variant="orange">
    <template #header>
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Task" theme="orange" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
    </template>
    <div class="w-full flex items-center flex-row gap-12 max-[768px]:flex-col text-left">
      <div class="flex flex-col gap-12 max-w-3xl">
        <slot />
      </div>
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineOptions({ name: 'TaskLayout' })
</script>

<style>
.section-content p {
  line-height: 1.65;
  max-width: 48ch;
}
</style>
