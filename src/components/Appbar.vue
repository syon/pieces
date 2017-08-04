<template lang="pug">
.tm-appbar.uk-navbar-container(uk-sticky)
  .uk-container
    nav.uk-navbar
      div.uk-navbar-left
        ul.uk-navbar-nav
          a.logo(href="") Pieces
</template>

<script>
export default {
  name: 'appbar',
};
</script>

<style lang="stylus" scoped>
.tm-appbar
  background linear-gradient(to right, #88c6f6, #c8d6f9, #ecfad6, #fbfef5)
  
  .uk-container
    max-width inherit
  
  .uk-navbar
    min-height 40px
  
  .logo
    padding 0 15px
    color #fff
</style>
