<template>
  <div class="slidev-layout section task-next flex flex-col min-h-full p-[clamp(2.5rem,5vw,4.5rem)] bg-[var(--section-surface-bg)] text-[var(--section-text-color)] transition-[background_0.4s_ease,color_0.4s_ease] relative overflow-hidden max-[768px]:p-8">
    <div class="section-backdrop absolute z-0 inset-0 pointer-events-none" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div class="section-surface relative z-[1] flex-1 flex flex-col p-[clamp(2.5rem,6vw,5rem)] rounded-[2.5rem] overflow-hidden border border-[var(--section-border-color)] text-left max-[768px]:rounded-[1.75rem] max-[768px]:p-8">
      <!-- Main Content Area -->
      <div class="section-content flex-1 flex items-center justify-center flex-row gap-12 max-[768px]:flex-col">
        <div class="flex flex-col gap-6 max-w-3xl">
          <slot />
          <div class="section-eyebrow inline-flex items-center gap-2 px-[0.95rem] py-[0.4rem] rounded-full uppercase text-[0.78rem] tracking-[0.18em] font-semibold self-start w-fit">
            <span class="brand-dot w-[0.65rem] h-[0.65rem] rounded-full bg-[#fb923c]"></span>
            <span class="eyebrow-copy">Task</span>
          </div>
        </div>
        <img src="/task.svg" alt="Task board illustration" class="task-illustration w-50 h-auto drop-shadow-2xl max-[768px]:max-w-[220px]" />
      </div>

      <!-- Footer Logo -->
      <div class="section-footer flex justify-center items-center pointer-events-none">
        <WorkshopsLogo class="h-6 w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkshopsLogo from '../components/WorkshopsLogo.vue';
</script>

<style>
.section-content :where(h1, h2, p) {
  margin: 0;
  color: inherit;
}

.section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.1;
}

.section-content p {
  line-height: 1.65;
  max-width: 48ch;
}

.task-illustration {
  transform: rotate(-1deg);
}

/* Orange theme overrides */
.task-next .section-orb.orb-left {
  background: radial-gradient(circle, rgba(251, 146, 60, 0.65), transparent 60%);
}

.task-next .section-orb.orb-right {
  background: radial-gradient(circle, rgba(234, 88, 12, 0.7), transparent 55%);
}

.task-next .section-ribbon {
  background: linear-gradient(120deg, #c2410c, #ea580c, #fb923c);
}

.task-next .section-surface {
  border-color: rgba(251, 146, 60, 0.25);
}

.task-next .section-surface::after {
  border-color: rgba(251, 146, 60, 0.25);
}

html.dark .task-next .section-surface::after {
  border-color: rgba(251, 146, 60, 0.35);
}

.task-next .section-eyebrow {
  background: rgba(251, 146, 60, 0.14);
  border-color: rgba(251, 146, 60, 0.3);
}

html.dark .task-next .section-eyebrow {
  background: rgba(251, 146, 60, 0.2);
  border-color: rgba(251, 146, 60, 0.35);
}

.task-next .section-eyebrow .brand-dot {
  box-shadow: 0 0 12px rgba(251, 146, 60, 0.8);
}
</style>
