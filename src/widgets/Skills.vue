<template>
<section-container title="Skills">

    <h2 class="pb-5">Programming languages</h2>
    <div class="flex flex-row">
      <img v-for="icon in languageIcons" v-bind:src="icon" class="h-20 pr-2">
    </div>

    <h2 class="pt-10 pb-5">Web Development Icons</h2>
    <div class="flex flex-row">
      <img v-for="icon in webDevelopmentIcons" v-bind:src="icon" class="h-20 pr-2">
    </div>

    <h2 class="pt-10 pb-5">Other Programming tools</h2>
    <div class="flex flex-row">
      <img v-for="icon in iconURLS" v-bind:src="icon" class="h-20 pr-2">
    </div>
</section-container>
</template>

<script setup>
import SectionContainer from "../components/SectionContainer.vue";

const languageIcons = {
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  csh: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
}

const webDevelopmentIcons = {
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  tailwindcss: "https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
}

const iconURLS = {
  arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg",
  bash: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
}


</script>
