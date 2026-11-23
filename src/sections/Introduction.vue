<template>
  <div class="py-5 px-5 grid grid-cols-2">

    <div class="py-20">
      <h1 class="text-center text-8xl my-4 font-manjari">
        <span class="text-sky-700 px-1">Saad</span>
        <span class="text-gray-500 px-1">Adnan</span>
      </h1>
      <div class="text-center text-xl text-gray-500">
        {{ summary }}
      </div>
    </div>

    <div class="flex flex-col">
      <Image filename="panda.png"/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Image from '@/components/primitives/Image.vue';

const props = defineProps({
  experienceStart: String,
  summary: String,
})

const summary = computed(()=>{
  const today = Date.now();
  const start = new Date(props.experienceStart).getTime();
  const yearsOfExperience = Number.parseFloat(((today - start)/(1000*3600*24*365))).toFixed(1);

  return props.summary.replace('{years}', yearsOfExperience);
});

</script>

<style>

@utility commissioner-700 {
  font-family: "Commissioner", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>
