<template>
  <div class="py-12 text-center">
    <span class=" text-2xl text-blue-400">{{ msg }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Hello Taro3");
</script>
