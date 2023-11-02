<template>
  <div
    :class="_default.isOpen ? classOnShow : classOnHide"
    :style="_default.isOpen ? { ...styleOnShow } : { ...styleOnHide }"
  >
    <slot
      :isOpen="_default.isOpen"
      :show="show"
      :hide="hide"
      :onConfirm="confirm"
      :onCancel="cancel"
      :onClose="close"
    ></slot>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import _props_ from "./props";
import preset from "./preset";
import { $on } from "vue-happy-bus";

const props = defineProps(_props_);

const _default = ref(preset);

const log = (msg = "trigged.") => {
  const msgHead = "[VGM]";
  _default.value.showLogs && console.log(`${msgHead} ${msg}`);
};

const show = () => {
  !_default.value.isOpen && log("modal showed");
  _default.value.isOpen = true;
};
const hide = () => {
  _default.value.isOpen && log("modal hided");

  _default.value.isOpen = false;
};

/**
 * execute when `onConfirm` called.
 */
const confirm = () => {
  _default.value.showLogs && log("onConfirm");
  _default.value.onConfirm();
  close();
};

/**
 * execute when `onCancel` called.
 */
const cancel = () => {
  _default.value.showLogs && log("onCancel");
  _default.value.onCancel();
  close();
};

/**
 * execute when `onClose` called.
 */
const close = () => {
  _default.value.showLogs && log("onClose");
  _default.value.onClose();
  hide();
};

$on(props.name, (args) => {
  _default.value = { ..._default, ...args };
  props.showLogs && (_default.value.showLogs = props.showLogs);

  show();
});
</script>
