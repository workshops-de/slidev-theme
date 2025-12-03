<template>
  <div class="slidev-layout section what-if flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] transition-[background_0.4s_ease,color_0.4s_ease] relative overflow-hidden max-[768px]:p-8">
    <div class="section-backdrop absolute z-0 inset-0 pointer-events-none" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div class="section-surface relative z-[1] flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2.5rem] overflow-hidden border border-[rgba(184,82,80,0.25)] text-left max-[768px]:rounded-[1.75rem] max-[768px]:p-8">
      <!-- Main Content Area -->
      <div class="copy max-w-3xl flex flex-row gap-8">
          <SectionBadge text="What If" theme="red" />
        </div>
      <div class="section-content flex-1 flex items-center justify-center flex-row gap-12 max-[768px]:flex-col">
        <p class="purpose-text text-lg font-medium leading-relaxed text-[var(--what-if-purpose-color)] border-l-4 border-l-[rgba(184,82,80,0.5)] pl-4">
          <slot>
          </slot>
        </p>
      </div>

      <!-- Footer Logo -->
      <div class="section-footer flex justify-center items-center pointer-events-none">
        <WorkshopsLogo class="h-6 w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionBadge from '../components/SectionBadge.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>

<style>
.section-content :where(h1, h2, p) {
  margin: 0;
  color: inherit;
}

.section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.1;
}

/* Wine red theme overrides */
.what-if .section-orb.orb-left {
  background: radial-gradient(circle, rgba(232, 200, 200, 0.65), transparent 60%);
}

.what-if .section-orb.orb-right {
  background: radial-gradient(circle, rgba(184, 82, 80, 0.7), transparent 55%);
}

.what-if .section-ribbon {
  background: linear-gradient(120deg, #722f37, #b85450, #d4a5a5);
}


/* CSS Variables */
:root {
  --what-if-purpose-color: #8b2635;
}

html.dark {
  --what-if-purpose-color: #e8c4c4;
}

/* Border styles for the what-if layout */

.what-if .section-surface::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(184, 82, 80, 0.25);
  pointer-events: none;
}

html.dark .what-if .section-surface::after {
  border-color: rgba(184, 82, 80, 0.35);
}
</style>
