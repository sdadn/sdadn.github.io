<template>
<div>
  <div>
    Projects
  </div>
  
  <div class="grid grid-cols-4">

  <div v-for="project in PROJECTS" class="border p-1 m-1">
    <div>{{project.name}}</div>
    <div>{{project.year}}</div>
    <div class="flex flex-row">
        <div v-for="tag in project.tags" class="mr-1">
            {{tag}}
        </div> 
    </div>
    <div>{{project.description}}</div>
  </div>
  </div>

</div>
</template>

<script setup>
import {PROJECTS} from "../content";

</script>
