<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div
    class="w-full min-h-screen bg-primary flex justify-center items-center text-text libre-bodoni-bold "
  >
    <div
      class="max-w-[1440px] w-full min-h-screen px-[32px] md:px-[64px] flex flex-col items-center"
    >
    <header class="mt-16 sticky top-4 md:top-8 z-10 md:backdrop-blur-[30px] flex md:block md:w-fit justify-end w-full">
      <NavBar />
    </header>
      <RouterView />
    </div>
  </div>
  <footer class="w-full h-[64px] bg-primary"></footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap");

.libre-bodoni-reg {
  font-family: "Libre Bodoni", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.libre-bodoni-bold {
  font-family: "Libre Bodoni", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>
