<template>
  <div class="slidev-layout task">
    <div class="task-icon" aria-hidden="true">
      <svg viewBox="0 0 200 200" role="presentation" focusable="false">
        <path
          class="task-clip"
          d="M80 32h40a10 10 0 0 1 10 10v12H70V42a10 10 0 0 1 10-10Z"
        />
        <rect x="50" y="52" width="100" height="120" rx="16" />
        <rect x="66" y="92" width="28" height="28" rx="6" />
        <path d="M108 102h36" />
        <path d="M108 124h36" />
        <path d="M90 146h54" />
      </svg>
    </div>
    <div class="task-content">
      <slot />
    </div>
  </div>
  <SlideFooter />
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  flex-wrap: nowrap;
}

.task-icon {
  width: 220px;
  flex: 0 0 auto;
}

.task-icon svg {
  width: 100%;
  height: auto;
  stroke: #4286f4;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 10px rgba(66, 134, 244, 0.6));
}

.task-icon .task-clip {
  fill: rgba(66, 134, 244, 0.1);
  stroke-width: 8;
}

.task-icon .task-alert {
  stroke-width: 6;
  fill: rgba(66, 134, 244, 0.16);
}

.task-icon .task-alert-dot {
  fill: #4286f4;
  stroke: none;
}

.task-content {
  flex: 1 1 auto;
}

.task-content h1 {
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0;
}
</style>
