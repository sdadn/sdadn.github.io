<template>
  <div class="font-commissioner min-d-dvh flex flex-col">
    <Me v-bind:summary="content.summary" v-bind:experienceStart="content.yearsOfExperience"/>
    <Skills />
    <Projects />
    <Footer />
    <div>This site was built without AI generated code</div>
  </div>
</template>

<script setup>
import Header from "./sections/Header.vue";
import Me from "./sections/Me.vue";
import Projects from "./sections/Projects.vue";
import Skills from "./sections/Skills.vue";
import Footer from "./sections/Footer.vue";

import content from './utils/contentLoader.js';

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manjari&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@utility josefin-sans-700 {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

html, body, #app {
  height: 100%;
}

</style>
