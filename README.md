# vue-global-modal

The vue global modal based on global emitter of npm package [vue-happy-bus](https://www.npmjs.com/package/vue-happy-bus).

---

## Why This?

- **Easy to use**
  Just a few steps, no complicated setup required.
  &nbsp;

- **Only logic & No style**
  Focus on implementing the logic of components, no any default styles.
  &nbsp;

## Usage

#### First Step

Define your modal and put into **`vue-global-modal`**:

```html
<!-- ExampleModal.vue -->

<template>
  <GlobalModal name="test" v-slot="{ onConfirm, onCancel }">
    <button class="btn-confirm" @click="onConfirm">OK</button>
    <button class="btn-cancel" @click="onCancel">Cancel</button>
  </GlobalModal>
</template>

<script setup>
  import GlobalModal from "vue-plugin-modal";
</script>
```

#### Second Step

import and call **`$emit`** anywhere you need:

```html
<script setup>
  import { $emit } from "vue-plugin-modal";

  const emitFromApp = () => {
    $emit("Alert", {
      onConfirm: () => {
        console.log("data saved!!");
      },
    });
  };
</script>

<template>
  <div>
    ...
    <div>
      <!-- something deep in the components -->
      <button @click="emitFromApp">emit!</button>
    </div>
    ...
  </div>
</template>
```

&nbsp;

## Properties

- #### name

  _type: `String`_
  _default: `"globalModal"`_
  _description:_ Event name for emit.

- #### classOnShow

  _type: `String`_
  _default: `""`_
  _description:_ class names apply when modal **showed**.

- #### classOnHide

  _type: `String`_
  _default: `""`_
  _description:_ class names apply when modal **hided**.

- #### styleOnShow

  _type: `Object`_
  _default: `{}`_
  _description:_ styles apply when modal **showed**.

- #### styleOnShow

  _type: `Object`_
  _default: `{}`_
  _description:_ styles apply when modal **hided**.

- #### showLogs

  _type: `Boolean`_
  _default: `false`_
  _description:_ Whether to display the console log when the event is triggered.
