<template>
  <Header/>
  <Skills />
  <Projects />
  <Footer />
</template>

<script setup>
import Header from "./widgets/Header.vue";
import Projects from "./widgets/Projects.vue";
import Skills from "./widgets/Skills.vue";
import Footer from "./widgets/Footer.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

</style>
