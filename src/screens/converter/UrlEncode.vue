<template lang="pug">
.screen
  .container(uk-grid)
    h2 URLエンコード

    .uk-width-3-4
      .uk-card
        form.uk-form-stacked
          .uk-form-label INPUT
          .uk-form-controls
            textarea#src.uk-textarea.block(v-model="enc_src" placeholder="変換したいテキストを入力してください（改行で複数指定できます）")

        .results.uk-margin
          .uk-form-label ENCODED
          .uk-card.uk-card-default.uk-card-body
            pre.line-dest
              .line(v-for="line in encSrcList")
                code {{ line.dest }}

    .uk-width-1-4
      .options-header Options
      form.uk-form-stacked
        .uk-margin
          .uk-form-label Charset
          .uk-form-controls
            select.uk-select(v-model="enc_charset")
              option(value="utf8") UTF-8
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';
import urlencode from 'urlencode';

export default {
  name: 'url-encode',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      enc_src: '',
      enc_charset: 'utf8',
      enc_dest: '',
    };
  },
  computed: {
    encSrcList() {
      const list = this.enc_src.split('\n');
      return list.filter(d => d !== '').map((d) => {
        const cs = this.enc_charset;
        return { src: d, dest: urlencode(d, cs) };
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen
  font-size 16px

button, input, select
  font-size 16px

.block
  display block
  width 100%

#src, #dest
  font-family Consolas, "Liberation Mono", Menlo, Courier, monospace
  font-size 12px

#src
  height 100px

.dest
  padding 5px
  background-color #f5f5f5
  overflow-x scroll

.options-header
  font-size 14px
  margin-bottom 15px
  padding 8px 0
  font-size 12px
  border-bottom 1px solid #e5e5e5

.results
  pre
    padding 0
    border 0
  .line
    // margin 0 0 3em
    border-bottom 1px solid #ebf0f4
    .head
      margin .4em .2em
      padding .2em .8em
      font-size 11px
      color #444d56
      background-color rgba(27,31,35,0.08)
    .line-src
      margin 0 0 .5em
    .line-dest
      margin 0 0 .5em
    code
      background-color transparent
      border 0
      white-space normal
      word-break break-all
</style>
