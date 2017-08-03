<template lang="pug">
.tm-sidebar-left
  .tm-menu
    ul
      li
        router-link(to="/chartjs/") Chart.js
    ul
      li
        router-link(to="/formatter/html/") HTML Formatter
      li
        router-link(to="/formatter/css/") CSS Formatter
      li
        router-link(to="/formatter/sql/") SQL Formatter
    ul
      li
        router-link(to="/tips/checkbox/") Checkbox
    ul
      li
        router-link(to="/words/adage/") 心に響く言葉
      li
        router-link(to="/words/bless/") Words of Blessings
    ul
      li
        router-link(to="/url-encode-decode/") URLエンコード
      li
        router-link(to="/misc/pixel-color/") PixelColor
      li
        router-link(to="/misc/vscode-vsix/") VSCode - VSIX Downloader

  .tm-author
    menu-footer
</template>

<script>
import MenuFooter from '@/components/MenuFooter';

export default {
  name: 'sidebar',
  components: {
    MenuFooter,
  },
};
</script>

<style lang="stylus" scoped>
.tm-sidebar-left
  position fixed
  top 40px
  bottom 0
  display flex
  flex-direction column
  border-right 1px #e5e5e5 solid

  .tm-menu
    flex 1
    box-sizing border-box
    width 240px !important
    padding 40px 16px 0
    overflow auto
</style>
