<template lang="pug">
.copy-to-clipboard.uk-position-right
  a.app-clipboard.uk-link-muted(:data-clipboard-target="target" href="#" v-on:click.prevent="")
    span クリップボードにコピー
</template>

<script>
export default {
  name: 'copy-to-clipboard',
  props: ['target'],
};
</script>

<style lang="stylus" scoped>
.copy-to-clipboard
  font-size 12px
</style>
