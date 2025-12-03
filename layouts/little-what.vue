<template>
  <div class="slidev-layout section little-what flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] transition-[background_0.4s_ease,color_0.4s_ease] relative overflow-hidden max-[768px]:p-8">
    <div class="section-backdrop absolute z-0 inset-0 pointer-events-none" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div class="section-surface silver-panel relative z-[1] flex-1 flex flex-col gap-y-6 p-[clamp(2.5rem,6vw,5rem)] rounded-[2.5rem] overflow-hidden border border-[var(--section-border-color)] text-left max-[768px]:rounded-[1.75rem] max-[768px]:p-8">
      <!-- Main Content Area -->
      <div class="section-content flex-1 flex items-center justify-center flex-row gap-12 max-[768px]:flex-col">
        <div class="copy max-w-3xl flex flex-col gap-8">
          <div class="heading-stack flex flex-col gap-4">
            <slot name="heading">
              <slot name="heading"></slot>
            </slot>
            <p class="purpose-text text-lg font-medium leading-relaxed text-[var(--little-what-purpose-color)]">
              <slot name="explanation">
              </slot>
            </p>
          </div>

          <div class="section-eyebrow inline-flex items-center gap-2 px-[0.95rem] py-[0.4rem] rounded-full uppercase text-[0.78rem] tracking-[0.18em] font-semibold self-start w-fit">
            <span class="brand-dot w-[0.65rem] h-[0.65rem] rounded-full bg-[#cdd4de]"></span>
            <span class="eyebrow-copy">Little What</span>
          </div>
        </div>
        <LittleWhatIllustration class="little-what-illustration w-40 h-auto drop-shadow-2xl max-[768px]:max-w-[220px]" />
      </div>

      <!-- Footer Logo -->
      <div class="section-footer flex justify-center items-center pointer-events-none">
        <WorkshopsLogo class="h-6 w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LittleWhatIllustration from '../components/LittleWhatIllustration.vue';
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>

<style>
/** h1 has same size as h2 just for easier editing */
h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.little-what .section-content :where(h1, h2, p) {
  margin: 0;
  color: inherit;
}

.little-what .section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.1;
}

.little-what .purpose-text {
  color: var(--little-what-purpose-color);
  border-left: 4px solid rgba(255, 255, 255, 0.4);
  padding-left: 1rem;
}

.little-what-illustration {
  transform: rotate(-3deg);
}

/* Silver theme overrides */
:root {
  --little-what-purpose-color: #5e6470;
}

html.dark {
  --little-what-purpose-color: #d4d8e2;
}

.little-what .section-orb.orb-left {
  background: radial-gradient(circle, rgba(227, 232, 240, 0.8), transparent 60%);
}

.little-what .section-orb.orb-right {
  background: radial-gradient(circle, rgba(176, 183, 197, 0.7), transparent 55%);
}

.little-what .section-ribbon {
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(176, 183, 197, 0.65), rgba(134, 141, 154, 0.7));
}

.little-what .silver-panel {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(230, 233, 240, 0.85));
  border-color: rgba(210, 218, 233, 0.7);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.little-what .silver-panel::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(160, 170, 189, 0.45);
  pointer-events: none;
}

html.dark .little-what .silver-panel {
  background: linear-gradient(140deg, rgba(28, 32, 44, 0.95), rgba(28, 32, 44, 0.8));
  border-color: rgba(148, 156, 173, 0.4);
  box-shadow: 0 25px 45px rgba(4, 8, 21, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

html.dark .little-what .silver-panel::after {
  border-color: rgba(198, 206, 223, 0.4);
}

.little-what .section-eyebrow {
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(206, 214, 227, 0.6);
  color: #4b4f58;
}

html.dark .little-what .section-eyebrow {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(198, 206, 223, 0.45);
  color: #e2e5ef;
}

.little-what .section-eyebrow .brand-dot {
  box-shadow: 0 0 14px rgba(224, 232, 245, 0.9);
}

.little-what .section-content {
  color: #1d1f26;
}

html.dark .little-what .section-content {
  color: #f4f6fb;
}
</style>
