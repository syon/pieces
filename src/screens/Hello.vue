<template lang="pug">
.screen
  .tm-appbar.uk-navbar-container
    .uk-container
      nav.uk-navbar
        div.uk-navbar-left
          ul.uk-navbar-nav
            a(href="") Pieces

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
  name: 'hello',
  components: {
    MenuFooter,
  },
};
</script>

<style lang="stylus" scoped>
</style>
