<template>
  <Header/>
  <Skills />
  <Projects />
  <Footer />
</template>

<script setup>
import Header from "./sections/Header.vue";
import Projects from "./sections/Projects.vue";
import Skills from "./sections/Skills.vue";
import Footer from "./sections/Footer.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

</style>
