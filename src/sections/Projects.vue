<template>
<section-container title="Portfolio">
  <div class="grid grid-cols-4">
      <project-cards v-for="project in PROJECTS" v-bind:project="project"/>
  </div>
</section-container>

</template>

<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import ProjectCards from "@/components/ProjectCards.vue";
import {PROJECTS} from "@data/content";

</script>
