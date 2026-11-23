<template>
<SectionContainer title="Skills">


    <h2 class="pb-5">Programming languages</h2>
    <div class="flex flex-row">
      <ImageCard v-for="icon in languageIcons" :imgSrc="icon.imgUrl" :text="icon.label"/>
    </div>

    <h2 class="pt-10 pb-5">Web Development</h2>
    <div class="flex flex-row">
      <ImageCard v-for="icon in webDevelopmentIcons" :imgSrc="icon.imgUrl" :text="icon.label"/>
    </div>

    <h2 class="pt-10 pb-5">Other Programming tools</h2>
    <div class="flex flex-row">
      <ImageCard v-for="icon in toolIcons" :imgSrc="icon.imgUrl" :text="icon.label"/>
    </div>
    
</SectionContainer>
</template>

<script setup>
import SectionContainer from "@/components/SectionContainer.vue";
import ImageCard from "@/components/primitives/ImageCard.vue";

import { languageIcons, webDevelopmentIcons, toolIcons } from "@/utils/iconUrls";

</script>
