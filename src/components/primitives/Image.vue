<template>
  <div class="flex-1" v-bind:style="backgroundImage">
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';

const props = defineProps({
  filename: String
})

const backgroundImage = computed(() => {

  // const imageUrl = props.filename.startsWith('https:') ? new URL(props.filename) : new URL(`../../img/${props.filename}`, import.meta.url).href;
  const imageUrl = props.filename.startsWith('https:') ? props.filename : new URL(`../../img/${props.filename}`, import.meta.url).href;

  return {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }

})

</script>