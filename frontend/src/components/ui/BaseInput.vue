<template>
  <div class="w-full">
    <label
      v-if="label"
      class="block text-xs font-medium text-slate-600 mb-1"
      :for="id"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      v-model="model"
      class="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             placeholder:text-slate-400 bg-white"
      v-bind="$attrs"
    />

    <p v-if="hint" class="mt-1 text-[11px] text-slate-400">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  id: String,
  label: String,
  hint: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
