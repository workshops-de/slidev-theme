<template>
    <div class="slidev-layout section">
        <div class="section-content">
            <h1>
                <slot />
                </h1>
            </div>
    </div>
    <SlideFooter />
</template>

<style>
.section-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.section h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-align: center;
}
</style>
