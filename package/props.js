export default {
  /**
   * #### Event Name
   * The event name which you want to emit.
   *
   * using this stuct to make your own global modal, for example using `"test"` for the event name:
   * ```html
   * <GlobalModal name="test">
   *  <!-- your-components -->
   * </GlobalModal>
   * ```
   *
   * Then, call **$emit** with event name `test` where you need to trigger the modal:
   * ```js
   * import { $emit } from "vue-global-modal"
   * $emit("test")
   * ```
   */
  name: {
    type: String,
    default: "globalModal",
  },

  classOnShow: { type: String, default: "" },
  classOnHide: { type: String, default: "" },
  styleOnShow: { type: Object, default: {} },
  styleOnHide: { type: Object, default: {} },

  showLogs: { type: Boolean, default: false },
};
