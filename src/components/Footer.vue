<template>
  <footer>
    <Logo />
    <a href="https://github.com/movingrock" target="blank">
      (c){{ new Date().getFullYear() }} movingrock
    </a>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;

  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>