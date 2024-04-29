<template>
  <div :style="{ width: `${size}rem`, height: `${size}rem`, zIndex }" :class="{ absolute, fixed }"
    class="spinner-border text-primary">

  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    // 부모 요소 기준 가운데 배치
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      dafault: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.absolute {
    position: absolute;
  }

  &.fixed {
    position: fixed;
  }
}
</style>