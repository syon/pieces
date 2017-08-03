<template lang="pug">
.tm-appbar.uk-navbar-container
  .uk-container
    nav.uk-navbar
      div.uk-navbar-left
        ul.uk-navbar-nav
          a(href="") Pieces
</template>

<script>
export default {
  name: 'appbar',
};
</script>

<style lang="stylus" scoped>
.tm-appbar
  background linear-gradient(to left, #28a5f5, #1e87f0)
  
  .uk-navbar
    min-height 40px
  
  a
    color #fff
</style>
