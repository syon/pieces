<template lang="pug">
footer
  .container
    hr
    .meta
      a(href="https://github.com/syon" class="author").
        <img src="../assets/syon.png" alt="syon" target="_blank"><span>syon</span></a>
      
      .repo
        a(href="https://github.com/syon/pieces" target="_blank") Repo
        a(href="https://app.wercker.com/project/byKey/a85109629f315de1a3cf4e0521775121")
          img(alt="Wercker status" src="https://app.wercker.com/status/a85109629f315de1a3cf4e0521775121/s/master")
</template>

<script>
export default {
  name: 'global-footer',
};
</script>

<style lang="stylus" scoped>
footer
  hr
    margin 40px 0 8px
    border 0
    border-top 1px solid #eee
  .meta
    display flex
    align-items center
    justify-content space-between
    padding 0 8px
    height 50px
    color #7e888b
    .author
      display flex
      align-items center
      text-decoration none
      color inherit
      img
        width 36px
        height 36px
        margin-right .5rem
        border-radius 100%
    .repo
      display flex
      a
        margin-left 15px
        color #7e888b
        text-decoration none
</style>
