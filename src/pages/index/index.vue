<template>
  <div>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello world");

    return {
      msg,
    };
  },
};
</script>
