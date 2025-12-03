<template>
  <div class="slidev-layout section why flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] transition-[background_0.4s_ease,color_0.4s_ease] relative overflow-hidden max-[768px]:p-8">
    <div class="section-backdrop absolute z-0 inset-0 pointer-events-none" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div class="section-surface purple-panel relative z-[1] flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2.5rem] overflow-hidden border border-[var(--section-border-color)] text-left max-[768px]:rounded-[1.75rem] max-[768px]:p-8">
      <!-- Main Content Area -->
      <div class="copy max-w-3xl flex flex-row gap-8">
        <SectionBadge text="Why" theme="purple" />
      </div>
      <div class="section-content flex-1 flex items-center justify-center flex-row gap-12 max-[768px]:flex-col">
        <div class="copy max-w-3xl flex flex-col gap-8">
          <div class="heading-stack flex flex-col gap-4">
            <p class="purpose-text text-lg font-medium leading-relaxed text-[var(--why-purpose-color)]">
              <slot></slot>
            </p>
          </div>
        </div>
        <WhyIllustration class="why-illustration w-40 h-auto drop-shadow-2xl max-[768px]:max-w-[220px]" />
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
import WhyIllustration from '../components/WhyIllustration.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>

<style>
.why .section-content :where(h1, h2, p) {
  margin: 0;
  color: inherit;
}

.why .section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.1;
}

.why .purpose-text {
  color: var(--why-purpose-color);
  border-left: 4px solid rgba(139, 92, 246, 0.5);
  padding-left: 1rem;
}

.why-illustration {
  transform: rotate(-3deg);
}

/* Purple theme overrides */
:root {
  --why-purpose-color: #6d28d9;
}

html.dark {
  --why-purpose-color: #c4b5fd;
}

.why .section-orb.orb-left {
  background: radial-gradient(circle, rgba(196, 181, 253, 0.8), transparent 60%);
}

.why .section-orb.orb-right {
  background: radial-gradient(circle, rgba(139, 92, 246, 0.7), transparent 55%);
}

.why .section-ribbon {
  background: linear-gradient(120deg, rgba(196, 181, 253, 0.9), rgba(139, 92, 246, 0.65), rgba(124, 58, 237, 0.7));
}

.why .purple-panel {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(237, 233, 254, 0.85));
  border-color: rgba(196, 181, 253, 0.7);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.why .purple-panel::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(139, 92, 246, 0.45);
  pointer-events: none;
}

html.dark .why .purple-panel {
  background: linear-gradient(140deg, rgba(30, 27, 75, 0.95), rgba(30, 27, 75, 0.8));
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 25px 45px rgba(4, 8, 21, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

html.dark .why .purple-panel::after {
  border-color: rgba(196, 181, 253, 0.4);
}

/* Badge styles now handled by SectionBadge component */

.why .section-content {
  color: #1d1f26;
}

html.dark .why .section-content {
  color: #f4f6fb;
}
</style>
