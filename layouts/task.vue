<template>
  <div class="slidev-layout section task-next flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] max-[768px]:p-8">
    <div class="section-surface flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2rem] border border-[var(--section-border-color)] bg-[var(--section-panel-bg)] text-left max-[768px]:rounded-[1.5rem] max-[768px]:p-8">
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Task" theme="orange" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
      <div class="section-content flex-1 flex items-center flex-row gap-12 max-[768px]:flex-col">
        <div class="flex flex-col gap-12 max-w-3xl">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineOptions({ name: 'TaskLayout' })
</script>

<style>
.section-content p {
  line-height: 1.65;
  max-width: 48ch;
}
</style>
