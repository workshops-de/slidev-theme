<script setup lang="ts">
import { computed } from 'vue';
import SectionSurface from '../components/SectionSurface.vue';

const props = withDefaults(defineProps<{
  image?: string
  class?: string
  backgroundSize?: string
}>(), {
  backgroundSize: 'cover',
})

const style = computed(() => {
  if (!props.image) return undefined
  return {
    backgroundImage: `url(${props.image})`,
    backgroundSize: props.backgroundSize,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
})
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <SectionSurface class="image-right" variant="silver">
      <div class="w-full h-full" :class="props.class">
        <slot />
      </div>
    </SectionSurface>
    <div class="w-full h-full" :style="style" />
  </div>
</template>
