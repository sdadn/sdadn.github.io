<template>
<div class="p-5">
  <div>
    Projects
  </div>
  
  <div class="grid grid-cols-4 flex flex-wrap">
      <project-cards v-for="project in PROJECTS" v-bind:project="project"/>
  </div>

</div>
</template>

<script setup>
import ProjectCards from "../components/ProjectCards.vue";
import {PROJECTS} from "../content";

</script>
