<template lang="pug">
.screen
  .container
    h1 {{ msg }}
    ul
      li
        router-link(to="/formatter/html/") HTML Formatter
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
