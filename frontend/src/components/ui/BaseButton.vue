<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
           transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
           disabled:opacity-60 disabled:cursor-not-allowed
           w-full sm:w-auto
           bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>
