<template>
  <div class="flex flex-col h-30 w-30 overflow-hidden rounded-md border border-solid m-1">
    <div class="flex flex-1 min-h-0 min-w-0 items-center justify-center p-3">
      <img :src="props.imgSrc" class="h-full w-full object-contain"/>
    </div>
    <div class="border-t border-solid p-1 text-center">
      <span class="block truncate">
        {{ props.text }}
      </span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  imgSrc: String,
  text: String
})

</script>
<style></style>