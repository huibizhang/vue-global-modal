<template>
  <GlobalModal
    name="Alert"
    v-slot="{ onConfirm, onCancel }"
    class="flex bg-blue-300 transition-all duration-700"
    class-on-show="opacity-100"
    :style-on-hide="{ opacity: 0 }"
  >
    <div class="flex gap-5 p-5">
      <button
        class="rounded-lg border bg-gray-400 px-5 py-2"
        @click="onConfirm"
      >
        確認
      </button>
      <button class="rounded-lg border bg-gray-400 px-5 py-2" @click="onCancel">
        取消
      </button>
    </div>
  </GlobalModal>
</template>

<script setup>
import GlobalModal from "../../package";
</script>
