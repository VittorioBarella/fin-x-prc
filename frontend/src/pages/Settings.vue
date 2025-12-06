<template>
  <div class="space-y-4">
    <header>
      <h1 class="text-xl font-semibold text-slate-900">
        Configurações
      </h1>
      <p class="text-xs text-slate-500">
        Ajustes de ambiente, integrações e preferências da aplicação.
      </p>
    </header>

    <BaseCard>
      <p class="text-sm text-slate-700 mb-3">
        Exemplos de coisas que podemos colocar aqui:
      </p>
      <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
        <li>Modo claro/escuro.</li>
        <li>Integração com HIS/ERP hospitalar.</li>
        <li>Regras de alerta para risco cirúrgico.</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>
