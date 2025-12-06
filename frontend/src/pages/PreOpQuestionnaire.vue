<template>
  <div class="space-y-4">
    <header>
      <h1 class="text-xl font-semibold text-slate-900">
        Questionários pré-operatórios
      </h1>
      <p class="text-xs text-slate-500">
        Estrutura base para formular perguntas, salvar respostas e calcular risco.
      </p>
    </header>

    <BaseCard>
      <p class="text-sm text-slate-700 mb-3">
        Aqui depois vamos montar:
      </p>
      <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
        <li>Formulário multi-etapas (história clínica, comorbidades, exames).</li>
        <li>Validação básica de campos.</li>
        <li>Envio dos dados para o backend FinFlow PRC.</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>
