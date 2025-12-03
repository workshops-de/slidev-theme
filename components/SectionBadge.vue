<template>
  <div class="section-eyebrow inline-flex items-center gap-2 px-[0.95rem] py-[0.4rem] rounded-full uppercase text-[0.78rem] tracking-[0.18em] font-semibold self-start w-fit" :class="themeClasses">
    <span class="brand-dot w-[0.65rem] h-[0.65rem] rounded-full" :class="dotClasses"></span>
    <span class="eyebrow-copy">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  theme: 'red' | 'orange' | 'silver' | 'blue' | 'purple';
}>();

const themeClasses = computed(() => {
  return {
    'theme-red': props.theme === 'red',
    'theme-orange': props.theme === 'orange',
    'theme-silver': props.theme === 'silver',
    'theme-blue': props.theme === 'blue',
    'theme-purple': props.theme === 'purple',
  };
});

const dotClasses = computed(() => {
  return {
    'bg-[#b85450]': props.theme === 'red',
    'bg-[#fb923c]': props.theme === 'orange',
    'bg-[#cdd4de]': props.theme === 'silver',
    'bg-[var(--slidev-theme-primary)]': props.theme === 'blue',
    'bg-[#8b5cf6]': props.theme === 'purple',
  };
});
</script>

<style>
/* Red theme */
.theme-red {
  background: rgba(184, 82, 80, 0.14);
  border: 1px solid rgba(184, 82, 80, 0.3);
}

html.dark .theme-red {
  background: rgba(184, 82, 80, 0.2);
  border-color: rgba(184, 82, 80, 0.35);
}

.theme-red .brand-dot {
  box-shadow: 0 0 12px rgba(184, 82, 80, 0.8);
}

/* Orange theme */
.theme-orange {
  background: rgba(251, 146, 60, 0.14);
  border: 1px solid rgba(251, 146, 60, 0.3);
}

html.dark .theme-orange {
  background: rgba(251, 146, 60, 0.2);
  border-color: rgba(251, 146, 60, 0.35);
}

.theme-orange .brand-dot {
  box-shadow: 0 0 12px rgba(251, 146, 60, 0.8);
}

/* Silver theme */
.theme-silver {
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(206, 214, 227, 0.6);
  color: #4b4f58;
}

html.dark .theme-silver {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(198, 206, 223, 0.45);
  color: #e2e5ef;
}

.theme-silver .brand-dot {
  box-shadow: 0 0 14px rgba(224, 232, 245, 0.9);
}

/* Blue theme */
.theme-blue {
  background: rgba(66, 134, 244, 0.14);
  border: 1px solid rgba(66, 134, 244, 0.3);
}

html.dark .theme-blue {
  background: rgba(66, 134, 244, 0.2);
  border-color: rgba(66, 134, 244, 0.35);
}

.theme-blue .brand-dot {
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
}

/* Purple theme */
.theme-purple {
  background: rgba(139, 92, 246, 0.14);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

html.dark .theme-purple {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.35);
}

.theme-purple .brand-dot {
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.8);
}
</style>
