<template>
  <div class="slidev-layout section flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] transition-[background_0.4s_ease,color_0.4s_ease] relative overflow-hidden max-[768px]:p-8">
    <div class="section-backdrop absolute z-0 inset-0 pointer-events-none" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div
      class="section-surface relative z-[1] flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2.5rem] overflow-hidden border border-[var(--section-border-color)] max-[768px]:rounded-[1.75rem] max-[768px]:p-8"
      :class="image ? 'text-left' : 'text-center'"
    >
      <!-- Row 1: Badge and Logo -->
      <div class="row-1 flex flex-row justify-between items-center">
        <SectionBadge text="Topic" theme="blue" />
        <WorkshopsLogo class="h-6 w-auto pointer-events-none" />
      </div>
      <div
        class="section-content flex-1 flex items-center justify-center"
        :class="image ? 'flex-row gap-12 max-[768px]:flex-col' : 'flex-col'"
      >
        <TaskIllustration v-if="image === '/task.svg'" :class="imageClass" />
        <img v-else-if="image" :src="image" alt="" :class="imageClass" />
        <div class="flex flex-col">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import TaskIllustration from '../components/TaskIllustration.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';

defineProps<{
  image?: string
  imageClass?: string
}>()
</script>

<style>
.section-content :where(h1, h2, p) {
  @apply m-0 text-inherit;
}

.section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  @apply font-bold uppercase tracking-[0.05em];
}

.section-grid {
  position: absolute;
  inset: -25%;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 120px 120px;
  transform: rotate(-8deg);
  mix-blend-mode: screen;
}

.section-orb {
  position: absolute;
  width: clamp(220px, 32vw, 420px);
  height: clamp(220px, 32vw, 420px);
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.55;
}

.section-orb.orb-left {
  top: -12%;
  left: -8%;
  background: radial-gradient(circle, rgba(66, 134, 244, 0.65), transparent 60%);
}

.section-orb.orb-right {
  bottom: -18%;
  right: -12%;
  background: radial-gradient(circle, rgba(48, 35, 174, 0.7), transparent 55%);
}

.section-ribbon {
  position: absolute;
  inset: 10% -15% auto -10%;
  height: clamp(220px, 28vw, 360px);
  background: var(--workshops-blue-gradient);
  opacity: 0.45;
  filter: blur(12px);
  transform: rotate(-6deg) skewX(-6deg);
  border-radius: 30% 70% 65% 35% / 45% 35% 65% 55%;
}

.section-surface {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75));
  box-shadow: 0 25px 65px rgba(15, 23, 42, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.section-surface::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(66, 134, 244, 0.25);
  pointer-events: none;
}

html.dark .section-surface {
  background: linear-gradient(145deg, rgba(4, 8, 21, 0.92), rgba(4, 8, 21, 0.7));
  box-shadow: 0 25px 45px rgba(4, 8, 21, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

html.dark .section-surface::after {
  border-color: rgba(66, 134, 244, 0.35);
}

html.dark .section-grid {
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
}

/* Badge styles now handled by SectionBadge component */
</style>
