<template>
  <nav class="h-full flex flex-col">
    <div class="px-4 py-4 border-b">
      <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        Navegação
      </p>
    </div>

    <ul class="flex-1 py-2">
      <SidebarLink
        to-name="dashboard"
        icon="🏠"
        label="Dashboard"
        @navigate="emitNavigate"
      />
      <SidebarLink
        to-name="pre-op"
        icon="📝"
        label="Questionários Pré-Op"
        @navigate="emitNavigate"
      />
      <SidebarLink
        to-name="risk-score"
        icon="📊"
        label="Score de Risco"
        @navigate="emitNavigate"
      />
      <SidebarLink
        to-name="risk-map"
        icon="🗺️"
        label="Mapa de Risco"
        @navigate="emitNavigate"
      />
      <SidebarLink
        to-name="profile"
        icon="👤"
        label="Perfil"
        @navigate="emitNavigate"
      />
      <SidebarLink
        to-name="settings"
        icon="⚙️"
        label="Configurações"
        @navigate="emitNavigate"
      />
    </ul>

    <div class="px-4 py-3 border-t text-xs text-slate-400">
      v0.1.0 • protótipo
    </div>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const emit = defineEmits(["navigate"]);

const router = useRouter();
const route = useRoute();

const emitNavigate = () => emit("navigate");

// Componente interno pra evitar repetir código
const SidebarLink = {
  props: {
    toName: String,
    icon: String,
    label: String,
  },
  emits: ["navigate"],
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();

    const isActive = computed(() => route.name === props.toName);

    const handleClick = () => {
      router.push({ name: props.toName });
      emit("navigate");
    };

    return { isActive, handleClick };
  },
  template: `
    <li>
      <button
        @click="handleClick"
        class="w-full flex items-center gap-2 px-4 py-2.5 text-sm
               hover:bg-slate-100 focus:bg-slate-100
               transition-colors border-l-4"
        :class="isActive ? 'border-blue-500 text-blue-700 bg-slate-100' : 'border-transparent text-slate-700'"
      >
        <span class="text-base">{{ icon }}</span>
        <span>{{ label }}</span>
      </button>
    </li>
  `,
};
</script>
