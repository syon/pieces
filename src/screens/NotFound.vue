<template lang="pug">
.screen
  .container
    h1 404

    .params
      code {{ params }}

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'not-found',
  components: {
    GlobalFooter,
  },
  computed: {
    params() {
      return this.$route.params[0];
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen
  text-align center

  .params
    margin-bottom 2em
    font-size 2.5rem

h1
  margin 3em
</style>
