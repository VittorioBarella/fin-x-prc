<template>
  <div class="space-y-4">
    <header>
      <h1 class="text-xl font-semibold text-slate-900">
        Score de risco cirúrgico
      </h1>
      <p class="text-xs text-slate-500">
        Tela para exibir cálculo de score automático e recomendações.
      </p>
    </header>

    <BaseCard>
      <p class="text-sm text-slate-700 mb-3">
        Nesta tela vamos:
      </p>
      <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
        <li>Mostrar o score de risco (baixo, moderado, alto).</li>
        <li>Exibir fatores que mais contribuíram para o risco.</li>
        <li>Listar recomendações pré-operatórias sugeridas pela IA.</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>
