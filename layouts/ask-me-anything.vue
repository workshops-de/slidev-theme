<template>
  <SectionSurface class="ask-me-anything" variant="blue">
    <template #header>
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Ask Me Anything" theme="blue" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
    </template>
    <div class="w-full flex items-center justify-center text-center">
      <h1 class="ama-title">
        <strong>Ask me anything</strong>
      </h1>
    </div>
  </SectionSurface>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import SectionSurface from '../components/SectionSurface.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineOptions({ name: 'AskMeAnythingLayout' })
</script>

<style>
.ask-me-anything .ama-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  margin: 0;
  text-align: center;
}
</style>
