<script setup lang="ts">
import SectionSurface from '../components/SectionSurface.vue';

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <SectionSurface class="two-columns" align="top" variant="silver">
    <div class="two-columns w-full h-full grid grid-cols-2" :class="props.layoutClass">
      <div class="col-left" :class="props.class">
        <slot />
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </SectionSurface>
</template>
