<template>
  <div class="space-y-4">
    <header>
      <h1 class="text-xl font-semibold text-slate-900">
        Perfil do usuário
      </h1>
      <p class="text-xs text-slate-500">
        Dados básicos do profissional, hospital e permissões.
      </p>
    </header>

    <BaseCard>
      <p class="text-sm text-slate-700 mb-3">
        Depois podemos conectar com backend para:
      </p>
      <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
        <li>Atualizar nome, CRM, especialidade.</li>
        <li>Configurar notificações de risco alto.</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>
