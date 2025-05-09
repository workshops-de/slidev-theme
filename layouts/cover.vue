<template>
  <div class="slidev-layout cover">
      <div class="workshops-content">
        <h1><slot name="title" /></h1>
        <slot />
      </div>
  </div>
  <SlideFooter />
</template>

<style>
.workshops-content {
  max-width: 60%;
  padding-left: 3rem;
  padding-top: 3rem;
}

.cover h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cover ul {
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
}

.cover ul li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cover ul li:before {
  content: "✓";
  margin-right: 0.5rem;
}
</style>
