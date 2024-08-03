<template>
<div class="border m-1 rounded-lg">
    <div class="px-3 py-1 text-right text-sm italic bg-gray-100">{{project.year}}</div>
    <div class="text-xl px-5 pt-2 pb-4 tracking-wide bg-gray-100">{{project.name}}</div>
    <div class="px-3 py-2 flex flex-wrap cent">
        <project-tag v-for="tag in project.tags" v-bind:tag="tag"/>
    </div>
    <div class="px-3 py-2">{{project.description}}</div>
</div>
</template>

<script setup>
import ProjectTag from "./ProjectTags.vue";
const props = defineProps(['project'])
</script>
