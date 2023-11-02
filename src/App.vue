<script setup>
import { createPreset, $emit } from "../package";
import MyGlobalModal from "./components/MyGlobalModal.vue";

const save = () => {
  console.log("data saved!!");
};

const myPreset = createPreset({
  onConfirm: save,
  // showLogs: true,
});

const emitFromApp = () => {
  $emit("Alert", myPreset);
};
</script>

<template>
  <div>
    <div>
      <MyGlobalModal />
    </div>

    <button @click="emitFromApp">emit!</button>
    <br />
    <button @click="$emit('MSG')">emit 2!</button>
  </div>
</template>
