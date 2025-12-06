<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <!-- Header fixo -->
    <Header
      class="sticky top-0 z-20 border-b bg-white/80 backdrop-blur"
      @toggleSidebar="toggleSidebar"
    />

    <div class="flex-1 flex">
      <!-- Sidebar (desktop) -->
      <Sidebar class="hidden md:block w-64 border-r bg-white" />

      <!-- Drawer mobile -->
      <transition name="fade">
        <div
          v-if="isSidebarOpen"
          class="fixed inset-0 z-30 flex md:hidden"
        >
          <div
            class="w-72 bg-white shadow-xl border-r"
          >
            <Sidebar @navigate="closeSidebar" />
          </div>
          <button
            class="flex-1 bg-black/40"
            @click="closeSidebar"
          />
        </div>
      </transition>

      <!-- Conteúdo -->
      <main class="flex-1 px-4 py-4 md:px-8 md:py-6">
        <div class="max-w-6xl mx-auto">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Header from "../components/layout/Header.vue";
import Sidebar from "../components/layout/Sidebar.vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
