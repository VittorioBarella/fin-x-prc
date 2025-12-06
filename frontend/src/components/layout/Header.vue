<template>
  <header class="w-full">
    <div class="mx-auto max-w-6xl px-4 h-14 md:h-16 flex items-center justify-between">
      <!-- Esquerda -->
      <div class="flex items-center gap-3">
        <!-- Botão menu mobile -->
        <button
          class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm"
          @click="$emit('toggleSidebar')"
        >
          <span class="sr-only">Abrir menu</span>
          <span class="w-4 h-0.5 bg-slate-800 rounded block mb-1"></span>
          <span class="w-4 h-0.5 bg-slate-800 rounded block"></span>
        </button>

        <!-- Logo / texto -->
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center text-sm"
          >
            FX
          </div>
          <div class="leading-tight">
            <p class="text-sm font-semibold text-slate-900">
              Fin-X PRC
            </p>
            <p class="text-[11px] text-slate-500">
              Pré-operatório & Risco Cirúrgico
            </p>
          </div>
        </div>
      </div>

      <!-- Direita -->
      <div class="flex items-center gap-3">
        <span class="hidden sm:inline text-xs text-slate-500">
          Usuário de testes
        </span>
        <div
          class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-semibold"
        >
          UF
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// sem lógica por enquanto
</script>
