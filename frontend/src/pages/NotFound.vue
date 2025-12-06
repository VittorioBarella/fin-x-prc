<template>
  <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-3xl font-semibold text-slate-900 mb-2">404</h1>
    <p class="text-sm text-slate-600 mb-4">
      Página não encontrada.
    </p>
    <BaseButton @click="goHome">Voltar para o dashboard</BaseButton>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseButton from "../components/ui/BaseButton.vue";

const router = useRouter();

const goHome = () => {
  router.push({ name: "dashboard" });
};
</script>
