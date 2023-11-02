import Modal from "./Modal.vue";
import _preset from "./preset";
import { $emit as emitter } from "vue-happy-bus";

/**
 * #### GlobalModal
 */
const modal = Modal;

export const GlobalModal = modal;

/**
 * $emit
 */
export const $emit = (name = "GlobalModal", args = {}) => {
  emitter(name, args);
};

/**
 * preset
 */
export const createPreset = (preset = {}) => {
  return { ..._preset, ...preset };
};

export default modal;
