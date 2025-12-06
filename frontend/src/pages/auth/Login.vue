<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div class="w-full max-w-md">
      <BaseCard>
        <div class="flex flex-col items-center gap-2 mb-6">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-semibold">
            FX
          </div>
          <h1 class="text-lg font-semibold text-slate-900 text-center">
            Acessar Fin-X PRC
          </h1>
          <p class="text-xs text-slate-500 text-center">
            Faça login para acessar os questionários pré-operatórios e o painel de risco cirúrgico.
          </p>
        </div>

        <form class="space-y-4">
          <BaseInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="seu.email@hospital.com"
          />
          <BaseInput
            id="password"
            label="Senha"
            type="password"
            placeholder="••••••••"
          />

          <div class="flex items-center justify-between text-xs text-slate-500">
            <label class="inline-flex items-center gap-2">
              <input type="checkbox" class="rounded border-slate-300" />
              <span>Lembrar acesso neste dispositivo</span>
            </label>
          </div>

          <BaseButton type="button" class="mt-2" @click="goToDashboard">
            Entrar
          </BaseButton>
        </form>
      </BaseCard>

      <p class="mt-4 text-[11px] text-slate-400 text-center">
        Protótipo para entrevista — Fin-X PRC • Não utilizar em pacientes reais.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseCard from "../../components/ui/BaseCard.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import BaseInput from "../../components/ui/BaseInput.vue";

const router = useRouter();

const goToDashboard = () => {
  router.push({ name: "dashboard" });
};
</script>
