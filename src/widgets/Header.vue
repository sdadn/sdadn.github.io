<template>
<div class="py-5 bg-red-100">
  <h1 class="text-center text-5xl my-4">
    <span class="text-red-400 px-1">Saad</span>
    <span class="text-gray-500 px-1">Adnan</span>
  </h1>
  <div class="text-center text-lg text-gray-500">
    {{SUMMARY}}
  </div>
</div>
<div class="text-right pr-2 py-2">
This site was built using: vite, vue & tailwind.
</div>
</template>

<script setup>
import {SUMMARY} from "../content";



</script>
