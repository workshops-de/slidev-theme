<template>
  <div class="slidev-layout task">
    <div class="task-backdrop" aria-hidden="true">
      <div class="task-grid"></div>
      <div class="task-orb orb-left"></div>
      <div class="task-orb orb-right"></div>
      <div class="task-ribbon"></div>
    </div>

    <div class="task-surface">
      <div class="task-icon" aria-hidden="true">
        <svg viewBox="0 0 240 280" role="presentation" focusable="false">
          <defs>
            <linearGradient id="task-clip-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#6ec5ff" />
              <stop offset="100%" stop-color="#4a7dff" />
            </linearGradient>
            <linearGradient id="task-board-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f7f9ff" />
              <stop offset="100%" stop-color="#dae6ff" />
            </linearGradient>
          </defs>

          <rect class="task-glow" x="54" y="46" width="152" height="206" rx="44" />

            <g class="task-row" transform="translate(0, 0)">
                <circle class="task-dot" cx="86" cy="120" r="8" />
                <rect class="task-line" x="106" y="108" width="72" height="18" rx="9" />
            </g>

            <g class="task-row" transform="translate(0, 40)">
                <circle class="task-dot" cx="86" cy="120" r="8" />
                <rect class="task-line" x="106" y="108" width="86" height="18" rx="9" />
            </g>

            <g class="task-row" transform="translate(0, 80)">
                <circle class="task-dot" cx="86" cy="120" r="8" />
                <rect class="task-line" x="106" y="108" width="70" height="18" rx="9" />
            </g>

        </svg>
      </div>

      <div class="task-body">
        <slot />
        <div class="task-badge">
          <span class="badge-dot"></span>
          <span class="badge-copy">ACTION REQUIRED</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.task {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--section-surface-bg);
}

.task-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.task-grid {
  position: absolute;
  inset: -20%;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    );
  background-size: 120px 120px;
  transform: rotate(-7deg);
  mix-blend-mode: screen;
}

.task-orb {
  position: absolute;
  width: clamp(220px, 33vw, 420px);
  height: clamp(220px, 33vw, 420px);
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.55;
}

.task-orb.orb-left {
  top: -10%;
  left: -6%;
  background: radial-gradient(circle, rgba(66, 134, 244, 0.6), transparent 60%);
}

.task-orb.orb-right {
  bottom: -18%;
  right: -10%;
  background: radial-gradient(circle, rgba(48, 35, 174, 0.75), transparent 55%);
}

.task-ribbon {
  position: absolute;
  inset: 12% -18% auto -12%;
  height: clamp(200px, 26vw, 360px);
  background: var(--workshops-blue-gradient);
  opacity: 0.45;
  filter: blur(14px);
  transform: rotate(-5deg) skewX(-5deg);
  border-radius: 28% 72% 68% 32% / 42% 36% 64% 58%;
}

.task-surface {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75));
  border: 1px solid var(--section-border-color, rgba(66, 134, 244, 0.2));
  box-shadow:
    0 25px 65px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.task-surface::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(66, 134, 244, 0.25);
  pointer-events: none;
}

.task-icon {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-icon svg {
  width: min(300px, 100%);
  height: auto;
  filter: drop-shadow(0 25px 60px rgba(45, 105, 255, 0.28));
}

.task-icon .task-glow {
  fill: rgba(66, 134, 244, 0.18);
  filter: blur(16px);
}

.task-icon .task-board {
  fill: url(#task-board-gradient);
  stroke: rgba(66, 134, 244, 0.4);
  stroke-width: 6;
}

.task-icon .task-clip {
  fill: url(#task-clip-gradient);
  stroke: rgba(66, 134, 244, 0.55);
  stroke-width: 8;
  stroke-linejoin: round;
}

.task-icon .task-clip-highlight {
  fill: rgba(255, 255, 255, 0.65);
  stroke: rgba(66, 134, 244, 0.4);
  stroke-width: 4;
}

.task-icon .task-details .task-paper {
  fill: rgba(255, 255, 255, 0.85);
  stroke: rgba(66, 134, 244, 0.15);
  stroke-width: 4;
}

.task-icon .task-dot {
  fill: rgba(66, 134, 244, 1);
  filter: drop-shadow(0 0 10px rgba(66, 134, 244, 0.5));
}

.task-icon .task-line {
  fill: rgba(66, 134, 244, 0.9);
}

.task-icon .task-checkmark {
  fill: none;
  stroke: rgba(66, 134, 244, 0.95);
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.task-body {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.task-body ::slotted(h1),
.task-body h1 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.1;
  margin: 0;
  color: inherit;
}

.task-body ::slotted(p) {
  font-size: 1.2rem;
  color: inherit;
}

.task-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  background: rgba(66, 134, 244, 0.2);
  border: 1px solid rgba(66, 134, 244, 0.3);
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  margin: 1.5rem auto 0;
}

.badge-dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--slidev-theme-primary);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.9);
}

@media (min-width: 640px) {
  .slidev-layout.task {
    padding: clamp(2rem, 5vw, 4rem);
  }

  .task-surface {
    border-radius: 2rem;
    padding: clamp(2.25rem, 5vw, 3.25rem);
  }
}

@media (min-width: 960px) {
  .slidev-layout.task {
    padding: clamp(2.5rem, 5vw, 4.5rem);
  }

  .task-surface {
    grid-template-columns: minmax(220px, 320px) minmax(0, 1fr);
    gap: clamp(2rem, 4vw, 3.5rem);
    text-align: left;
    border-radius: 2.25rem;
  }

  .task-body {
    text-align: left;
    align-items: flex-start;
    max-width: 38rem;
  }

  .task-badge {
    margin-left: 0;
    margin-right: 0;
  }
}

html.dark .task-surface {
  background: linear-gradient(145deg, rgba(4, 8, 21, 0.92), rgba(4, 8, 21, 0.72));
  box-shadow:
    0 25px 45px rgba(4, 8, 21, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

html.dark .task-surface::after {
  border-color: rgba(66, 134, 244, 0.35);
}

html.dark .task-grid {
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    );
}

html.dark .task-badge {
  background: rgba(66, 134, 244, 0.3);
  border-color: rgba(66, 134, 244, 0.45);
}
</style>
