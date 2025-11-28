<template>
  <div class="slidev-layout cover flex flex-col min-h-full p-[clamp(2.5rem,6vw,4rem)]">
      <div class="max-[900px]:max-w-full">
        <p class="uppercase tracking-[0.2em] text-sm font-semibold text-[var(--slidev-theme-primary)] mb-2">Workshop</p>
        <h1 class="text-[clamp(2.75rem,5vw,4rem)] font-bold mb-5 leading-[1.1] m-0">
          <slot name="title" />
        </h1>
        <p class="text-[clamp(1.2rem,2.5vw,1.65rem)] text-[var(--slidev-theme-primary)] mb-6 font-medium">
          <slot name="subtitle" />
        </p>
        <div class="cover-body">
          <slot />
        </div>
      </div>

    <SlideFooter />
  </div>
</template>
