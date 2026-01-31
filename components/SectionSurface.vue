<template>
  <div class="slidev-layout section flex flex-col min-h-full px-4 py-8 bg-[var(--section-surface-bg)] text-[var(--section-text-color)]">
    <div
      class="section-surface flex-1 flex flex-col gap-y-6 px-4 py-8 rounded-[2rem] border max-[768px]:rounded-[1.5rem]"
      :class="variantClass"
    >
      <slot name="header" />
      <div class="section-content flex-1 flex items-center justify-center">
        <slot />
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'red' | 'orange' | 'silver' | 'blue' | 'purple'
}>(), {
  variant: 'blue',
})

const variantClass = computed(() => `surface-${props.variant}`)

defineOptions({ name: 'SectionSurface' })
</script>

<style>
.surface-red {
  background: rgba(184, 82, 80, 0.14);
  border-color: rgba(184, 82, 80, 0.3);
}

html.dark .surface-red {
  background: rgba(184, 82, 80, 0.2);
  border-color: rgba(184, 82, 80, 0.35);
}

.surface-orange {
  background: rgba(251, 146, 60, 0.14);
  border-color: rgba(251, 146, 60, 0.3);
}

html.dark .surface-orange {
  background: rgba(251, 146, 60, 0.2);
  border-color: rgba(251, 146, 60, 0.35);
}

.surface-silver {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(206, 214, 227, 0.6);
  color: #4b4f58;
}

html.dark .surface-silver {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(198, 206, 223, 0.45);
  color: #e2e5ef;
}

.surface-blue {
  background: rgba(66, 134, 244, 0.14);
  border-color: rgba(66, 134, 244, 0.3);
}

html.dark .surface-blue {
  background: rgba(66, 134, 244, 0.2);
  border-color: rgba(66, 134, 244, 0.35);
}

.surface-purple {
  background: rgba(139, 92, 246, 0.14);
  border-color: rgba(139, 92, 246, 0.3);
}

html.dark .surface-purple {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.35);
}
</style>
