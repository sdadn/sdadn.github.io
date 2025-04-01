<template>
<div class="px-5 py-3">
  <h1 class="text-4xl pb-8 tracking-widest josefin-sans-700 text-rose-900">{{title}}</h1>
  <slot></slot>
</div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style>
.josefin-sans-700{
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>
