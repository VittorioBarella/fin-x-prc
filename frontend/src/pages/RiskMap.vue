<template>
  <div class="space-y-4">
    <header>
      <h1 class="text-xl font-semibold text-slate-900">
        Mapa de risco digital
      </h1>
      <p class="text-xs text-slate-500">
        Visualização consolidada dos pacientes por nível de risco e status da jornada.
      </p>
    </header>

    <BaseCard>
      <p class="text-sm text-slate-700 mb-3">
        Aqui depois podemos montar:
      </p>
      <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
        <li>Quadros de pacientes por risco (baixo, moderado, alto).</li>
        <li>Filtros por data, tipo de cirurgia, convênio.</li>
        <li>Link rápido para abrir o pré-op ou o score detalhado.</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>
