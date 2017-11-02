<template lang="pug">
.tm-sidebar-left
  .tm-menu
    ul.uk-nav.uk-nav-default

      li.uk-nav-header Web Tools
      li
        router-link(to="/html-formatter/") HTML Formatter
      li
        router-link(to="/css-formatter/") CSS Formatter
      li
        router-link(to="/sql-formatter/") SQL Formatter
      li
        router-link(to="/url-encode-decode/") URLエンコード・デコード
      li
        router-link(to="/base64-encode-decode/") Base64エンコード・デコード
      li
        router-link(to="/vscode-vsix-downloader/") VSCode - VSIX Downloader

      li.uk-nav-header Code
      li
        router-link(to="/pixel-color-picker/") Pixel Color Picker
      li
        router-link(to="/chartjs/") Chart.js

      li.uk-nav-header Words
      // li
      //   router-link(to="/checkbox-tips/") Checkbox
      li
        router-link(to="/adage/") 心に響く言葉
      li
        router-link(to="/words-of-blessings/") Words of Blessings

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
    padding 40px 15px 0 40px
    overflow auto

  .uk-nav-header
    margin-bottom 3px
    padding 8px 0
    font-size 12px
    border-bottom 1px solid #e5e5e5

  a.router-link-active
    position relative
    color #222
    &:before
      content ""
      position absolute
      top 15px
      left -25px
      width 15px
      border-top 1px solid #1e87f0
</style>
