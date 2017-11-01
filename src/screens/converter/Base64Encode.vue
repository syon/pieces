<template lang="pug">
.screen
  .container
    h2 Base64エンコード・デコード

  .container(uk-grid)
    .uk-width-3-4
      .uk-card
        form.uk-form-stacked
          .uk-form-label Input
          .uk-form-controls
            textarea#src.uk-textarea.block(v-model="enc_src" placeholder="変換したいテキストを入力してください（改行で複数指定できます）")

        #app-encoded.results.uk-position-relative.uk-margin
          .uk-form-label Encoded
          .uk-card.uk-card-default.uk-card-body
            pre.line-dest
              .line(v-for="line in encodedList")
                code {{ line.dest }}
          copy-to-clipboard(target="#app-encoded .line-dest")

        #app-decoded.results.uk-position-relative.uk-margin
          .uk-form-label Decoded
          .uk-card.uk-card-default.uk-card-body
            pre.line-dest
              .line(v-for="line in decodedList")
                code {{ line.dest }}
          copy-to-clipboard(target="#app-decoded .line-dest")

    .uk-width-1-4
      .options-header Links
      ul
        li
          a(href="https://ja.wikipedia.org/wiki/Base64")
            | Wikipedia
        li
          a(href="https://github.com/dankogai/js-base64")
            | js-base64
      adsense(ad-client="ca-pub-2136746860059501" ad-slot="9805871014" ad-style="display:block" ad-format="auto")
</template>

<script>
import { Base64 } from 'js-base64';
import CopyToClipboard from '@/components/CopyToClipboard';
import Adsense from '@/components/AdSense';

export default {
  name: 'base64-encode',
  components: {
    CopyToClipboard,
    Adsense,
  },
  data() {
    return {
      enc_src: '',
      enc_dest: '',
    };
  },
  computed: {
    encodedList() {
      const list = this.enc_src.split('\n');
      return list.filter(d => d !== '').map((d) => {
        try {
          return { dest: Base64.encode(d) };
        } catch (e) {
          return { dest: 'error' };
        }
      });
    },
    decodedList() {
      const list = this.enc_src.split('\n');
      return list.filter(d => d !== '').map((d) => {
        try {
          if (d.match(/^[A-Za-z0-9+/=]+$/)) {
            return { dest: Base64.decode(d) };
          }
          return { dest: 'error' };
        } catch (e) {
          return { dest: 'error' };
        }
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
    padding 0.5em 0
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
      padding 0
      background-color transparent
      border 0
      white-space normal
      word-break break-all
</style>
