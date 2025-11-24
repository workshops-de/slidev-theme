<template>
  <div class="slidev-layout cover">
      <div class="workshops-content">
        <p class="eyebrow">Workshop</p>
        <h1>
          <slot name="title" />
        </h1>
        <p class="subtitle">
          <slot name="subtitle" />
        </p>
        <div class="cover-body">
          <slot />
        </div>
      </div>

    <SlideFooter />
  </div>
</template>


<style>
.slidev-layout.cover {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(2.5rem, 6vw, 4rem);
}

.cover h1 {
  font-size: clamp(2.75rem, 5vw, 4rem);
  font-weight: 700;
  margin: 0 0 1.25rem;
  line-height: 1.1;
}

.subtitle {
  font-size: clamp(1.2rem, 2.5vw, 1.65rem);
  color: var(--slidev-theme-primary);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.cover-body ul li::before {
  content: "✓";
  color: var(--slidev-theme-primary);
  font-weight: 600;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--slidev-theme-primary);
  margin-bottom: 0.5rem;
}

@media (max-width: 900px) {
  .cover-columns {
    flex-direction: column;
    text-align: center;
  }

  .workshops-content {
    max-width: 100%;
  }

  .cover-body ul li {
    justify-content: center;
  }

}
</style>
