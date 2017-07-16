<template lang="pug">
.screen
  .container
    h2 Formatter index

    ul
      li
        router-link(to="./html/") HTML Formatter
      li
        router-link(to="./css/") CSS Formatter
      li
        router-link(to="./sql/") SQL Formatter

    router-view

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'index',
  components: {
    GlobalFooter,
  },
};
</script>

<style lang="stylus" scoped>
</style>
