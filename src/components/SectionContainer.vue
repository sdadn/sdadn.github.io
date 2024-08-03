<template>
<div class="px-5 py-3">
  <h1 class="text-4xl pb-8">{{title}}</h1>
  <slot></slot>
</div>
</template>

<script setup>
const props = defineProps(['title'])
</script>
