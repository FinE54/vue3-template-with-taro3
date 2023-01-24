<template>
  <div>
    <span>{{ msg }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Hello world");

return {
  msg,
};
</script>
