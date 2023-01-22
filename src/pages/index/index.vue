<template>
  <view class="index p-4">
    <text>{{ msg }}</text>
  </view>
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
