<template>
  <div class="space-y-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <h1 class="text-xl font-semibold text-slate-900">
          Visão geral da jornada cirúrgica
        </h1>
        <p class="text-xs text-slate-500">
          Resumo do pré-operatório, riscos e alertas dos próximos dias.
        </p>
      </div>
      <Badge>Protótipo • Fin-X PRC</Badge>
    </div>

    <div class="grid gap-3 md:grid-cols-3">
      <BaseCard>
        <p class="text-xs text-slate-500 mb-1">Cirurgias agendadas</p>
        <p class="text-2xl font-semibold text-slate-900">12</p>
        <p class="text-[11px] text-slate-400 mt-1">
          Próximos 7 dias • dados mockados
        </p>
      </BaseCard>

      <BaseCard>
        <p class="text-xs text-slate-500 mb-1">Questionários pendentes</p>
        <p class="text-2xl font-semibold text-amber-600">5</p>
        <p class="text-[11px] text-slate-400 mt-1">
          Pacientes ainda não responderam pré-op completo.
        </p>
      </BaseCard>

      <BaseCard>
        <p class="text-xs text-slate-500 mb-1">Riscos altos</p>
        <p class="text-2xl font-semibold text-rose-600">2</p>
        <p class="text-[11px] text-slate-400 mt-1">
          Necessitam revisão da equipe clínica.
        </p>
      </BaseCard>
    </div>

    <BaseCard>
      <h2 class="text-sm font-semibold text-slate-900 mb-1">
        Últimos pacientes avaliados
      </h2>
      <p class="text-xs text-slate-500 mb-3">
        Aqui depois vamos listar cards com pacientes, score de risco, status do pré-op etc.
      </p>

      <div class="space-y-2 text-xs text-slate-600">
        <div class="flex justify-between">
          <span>Paciente A • Artroplastia de quadril</span>
          <span class="text-amber-600 font-medium">Risco moderado</span>
        </div>
        <div class="flex justify-between">
          <span>Paciente B • Colecistectomia</span>
          <span class="text-emerald-600 font-medium">Risco baixo</span>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
import Badge from "../components/ui/Badge.vue";
</script>
