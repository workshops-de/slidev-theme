<template>
  <div class="slidev-layout section why flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] max-[768px]:p-8">
    <div class="section-surface flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2rem] border border-[var(--section-border-color)] bg-[var(--section-panel-bg)] text-left max-[768px]:rounded-[1.5rem] max-[768px]:p-8">
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Why" theme="purple" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
      <div class="section-content flex-1 flex items-center flex-row gap-12 max-[768px]:flex-col">
        <div class="copy max-w-3xl flex flex-col gap-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineOptions({ name: 'WhyLayout' })
</script>

<style>
.why .section-content :where(h1, h2, p) {
  @apply m-0 text-inherit;
}
</style>
