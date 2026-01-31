<template>
  <div class="callout" :class="calloutClass">
    <div class="callout-title">
      <span class="callout-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path :d="iconPath" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="callout-label">{{ displayTitle }}</span>
    </div>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'info' | 'tip' | 'important' | 'warning' | 'caution'
  title?: string
}>(), {
  type: 'info',
})

const labels: Record<NonNullable<typeof props.type>, string> = {
  info: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
}

const icons: Record<NonNullable<typeof props.type>, string> = {
  info: 'M12 7h.01M11 11h2v6h-2M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20z',
  tip: 'M9 18h6M10 21h4M8 9a4 4 0 1 1 8 0c0 1.657-.895 2.965-2 3.5V15h-4v-2.5C8.895 11.965 8 10.657 8 9z',
  important: 'M9.5 9h5M9.5 13h5M8 4h8l4 4v12H8V4z',
  warning: 'M12 9v4M12 17h.01M10.29 3.86l-8 14A2 2 0 0 0 4 20h16a2 2 0 0 0 1.71-2.14l-8-14a2 2 0 0 0-3.42 0z',
  caution: 'M8.5 3h7l4.5 4.5v9L15.5 21h-7L4 16.5v-9L8.5 3zM12 8v5M12 17h.01',
}

const displayTitle = computed(() => props.title ?? labels[props.type])
const iconPath = computed(() => icons[props.type])
const calloutClass = computed(() => `callout--${props.type}`)
</script>

<style>
.callout {
  border-left: 4px solid var(--box-accent);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  background: var(--box-bg);
  color: var(--box-text);
  display: grid;
  gap: 0.5rem;
}

.callout-title {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--box-accent);
}

.callout-icon {
  width: 1.1rem;
  height: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.callout-icon svg {
  width: 100%;
  height: 100%;
}

.callout-body {
  color: var(--box-text);
}

.callout--info {
  --box-accent: #2563eb;
  --box-bg: rgba(37, 99, 235, 0.08);
  --box-text: #1f2937;
}

.callout--tip {
  --box-accent: #15803d;
  --box-bg: rgba(21, 128, 61, 0.08);
  --box-text: #1f2937;
}

.callout--important {
  --box-accent: #7c3aed;
  --box-bg: rgba(124, 58, 237, 0.08);
  --box-text: #1f2937;
}

.callout--warning {
  --box-accent: #b45309;
  --box-bg: rgba(180, 83, 9, 0.08);
  --box-text: #1f2937;
}

.callout--caution {
  --box-accent: #dc2626;
  --box-bg: rgba(220, 38, 38, 0.08);
  --box-text: #1f2937;
}

html.dark .callout {
  --box-text: #e5e7eb;
}

html.dark .callout--info {
  --box-accent: #60a5fa;
  --box-bg: rgba(96, 165, 250, 0.12);
}

html.dark .callout--tip {
  --box-accent: #4ade80;
  --box-bg: rgba(74, 222, 128, 0.12);
}

html.dark .callout--important {
  --box-accent: #c4b5fd;
  --box-bg: rgba(196, 181, 253, 0.12);
}

html.dark .callout--warning {
  --box-accent: #f59e0b;
  --box-bg: rgba(245, 158, 11, 0.12);
}

html.dark .callout--caution {
  --box-accent: #f87171;
  --box-bg: rgba(248, 113, 113, 0.12);
}
</style>
