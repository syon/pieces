<template lang="pug">
.screen
  .container
    h2 Formatter index

    ul
      li
        a(href="./html/") HTML
      li
        a(href="./css/") CSS
      li
        a(href="./sql/") SQL

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'hello',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="stylus" scoped>
</style>
