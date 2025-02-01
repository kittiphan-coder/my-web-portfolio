<template>
    <div class="relative w-full md:w-fit max-w-[650px]">
    <!-- Navbar -->
    <div class="flex text-[32px] gap-4 ml-auto md:ml-0 text-text justify-center items-center px-4 w-fit h-[64px] bg-navbar border-border border-2 rounded-[3px]">

      <!-- Desktop Menu (แสดงเมื่อจอกว้าง) -->
      <div class="hidden md:flex gap-4">
        <div class="cursor-pointer hover:text-4xl hover:text-amber-50 duration-200" @click="handleScroll('home')">HOME</div>
        <div class="cursor-pointer hover:text-4xl hover:text-amber-50 duration-200" @click="handleScroll('about')">ABOUT</div>
        <div class="cursor-pointer hover:text-4xl hover:text-amber-50 duration-200" @click="handleScroll('work')">WORK</div>
        <div class="cursor-pointer hover:text-4xl hover:text-amber-50 duration-200" @click="handleScroll('contact')">CONTACT</div>
      </div>

      <!-- Hamburger Button (แสดงเฉพาะ Mobile) -->
      <button class="md:hidden text-3xl" @click="isOpen = !isOpen">
        ☰
      </button>
    </div>

    <!-- Mobile Menu (แสดงเมื่อ isOpen = true) -->
    <div v-if="isOpen" class="absolute top-[64px] right-0 w-[150px] bg-primary border-border border-2 rounded-[3px] p-4 flex flex-col gap-4 md:hidden">
      <div class="cursor-pointer hover:text-amber-50 duration-200" @click="handleScroll('home'); isOpen = false">HOME</div>
      <div class="cursor-pointer hover:text-amber-50 duration-200" @click="handleScroll('about'); isOpen = false">ABOUT</div>
      <div class="cursor-pointer hover:text-amber-50 duration-200" @click="handleScroll('work'); isOpen = false">WORK</div>
      <div class="cursor-pointer hover:text-amber-50 duration-200" @click="handleScroll('contact'); isOpen = false">CONTACT</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNavStore } from '@/stores/NavBarStore';
const isOpen = ref(false);

const scrollStore = useNavStore();

const handleScroll = (section: string) => {
  scrollStore.setSection(section);
  console.log(scrollStore.sections)
};
</script>

<style scoped>

</style>