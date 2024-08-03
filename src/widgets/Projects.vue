<template>
<section-container title="Projects">
  <div class="grid grid-cols-4 flex flex-wrap">
      <project-cards v-for="project in PROJECTS" v-bind:project="project"/>
  </div>
</section-container>

</template>

<script setup>
import SectionContainer from "../components/SectionContainer.vue";
import ProjectCards from "../components/ProjectCards.vue";
import {PROJECTS} from "../content";

</script>
