<template>
  <div class="slidev-layout section">
    <div class="section-backdrop" aria-hidden="true">
      <div class="section-grid"></div>
      <div class="section-orb orb-left"></div>
      <div class="section-orb orb-right"></div>
      <div class="section-ribbon"></div>
    </div>

    <div class="section-surface">
      <div class="section-content">
        <slot />
        <div class="section-eyebrow">
          <span class="brand-dot"></span>
          <span class="eyebrow-copy">New Topic</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.section {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(2.5rem, 5vw, 4.5rem);
  background: var(--section-surface-bg);
  color: var(--section-text-color);
  transition: background 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}

.section-backdrop {
  position: absolute;
  z-index: 0;
  inset: 0;
  pointer-events: none;
}

.section-grid {
  position: absolute;
  inset: -25%;
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
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  text-align: center;
  padding: clamp(2.5rem, 6vw, 5rem);
  border-radius: 2.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75));
  border: 1px solid var(--section-border-color);
  box-shadow:
    0 25px 65px rgba(15, 23, 42, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  overflow: hidden;
}

.section-surface::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border-radius: 2rem;
  border: 1px dashed rgba(66, 134, 244, 0.25);
  pointer-events: none;
}

.section-content {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-content :where(h1, h2, p) {
  margin: 0;
  color: inherit;
}

.section-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .slidev-layout.section {
    padding: 2rem;
  }

  .section-surface {
    border-radius: 1.75rem;
    padding: 2rem;
  }
}

html.dark .section-surface {
  background: linear-gradient(145deg, rgba(4, 8, 21, 0.92), rgba(4, 8, 21, 0.7));
  box-shadow:
    0 25px 45px rgba(4, 8, 21, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

html.dark .section-surface::after {
  border-color: rgba(66, 134, 244, 0.35);
}

html.dark .section-grid {
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

html.dark .section-eyebrow {
  background: rgba(66, 134, 244, 0.2);
  border-color: rgba(66, 134, 244, 0.35);
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  background: rgba(66, 134, 244, 0.14);
  border: 1px solid rgba(66, 134, 244, 0.3);
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  margin-top: 1.75rem;
}

.section-eyebrow .brand-dot {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: var(--slidev-theme-primary);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
}
</style>
