<template lang="pug">
footer
  .container
    hr
    .meta
      a(href="https://github.com/syon" class="author").
        <img src="../assets/syon.png" alt="syon" target="_blank"><span>syon</span></a>
      
      .repo
        a(href="https://github.com/syon/pieces" target="_blank")
          span(uk-icon="icon:github")
        a(href="https://app.wercker.com/project/byKey/a85109629f315de1a3cf4e0521775121")
          img(alt="Wercker status" src="https://app.wercker.com/status/a85109629f315de1a3cf4e0521775121/s/master")
</template>

<script>
export default {
  name: 'menu-footer',
};
</script>

<style lang="stylus" scoped>
footer
  hr
    margin 0
    border 0
    border-top 1px solid #eee
  .meta
    display flex
    align-items center
    justify-content space-between
    padding 8px 16px
    height 50px
    font-size 12px
    font-family sans-serif
    color #7e888b
    .author
      display flex
      align-items center
      text-decoration none
      color inherit
      img
        width 30px
        height 30px
        margin-right .4rem
        border-radius 100%
    .repo
      display flex
      a
        margin-left 15px
        color #7e888b
        text-decoration none
</style>
