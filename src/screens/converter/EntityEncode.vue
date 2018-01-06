<template lang="pug">
.screen
  .container
    h2 文字実体参照エンコード・デコード

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
      .options-header Options
      form.uk-form-stacked
        .uk-margin
          .uk-form-label HTML / XML
          .uk-grid-small.uk-child-width-auto.uk-grid.uk-child-width-expand
            label
              input.uk-radio(type="radio" v-model="which" value="html" name="which")
              span.uk-margin-small-left HTML
            label
              input.uk-radio(type="radio" v-model="which" value="xml" name="which")
              span.uk-margin-small-left XML
      .options-header Links
      ul
        li
          a(href="https://ja.wikipedia.org/wiki/%E6%96%87%E5%AD%97%E5%8F%82%E7%85%A7")
            | 文字参照 - Wikipedia
        li
          a(href="http://rinrin.saiin.net/~aor/hms/cer")
            | 文字実体参照一覧
        li
          a(href="https://github.com/fb55/entities")
            | entities
      adsense(ad-client="ca-pub-2136746860059501" ad-slot="9805871014" ad-style="display:block" ad-format="auto")
</template>

<script>
import entities from 'entities';
import CopyToClipboard from '@/components/CopyToClipboard';
import Adsense from '@/components/AdSense';

export default {
  name: 'url-encode',
  components: {
    CopyToClipboard,
    Adsense,
  },
  data() {
    return {
      enc_src: 'こんにちは\n&copy;\n&lt;',
      which: 'html',
      enc_dest: '',
    };
  },
  computed: {
    encodedList() {
      const list = this.enc_src.split('\n');
      return list.filter(d => d !== '').map((d) => {
        try {
          let encoder;
          if (this.which === 'html') {
            encoder = entities.encodeHTML;
          } else {
            encoder = entities.encodeXML;
          }
          return { dest: encoder(d) };
        } catch (e) {
          return { dest: 'error' };
        }
      });
    },
    decodedList() {
      const list = this.enc_src.split('\n');
      return list.filter(d => d !== '').map((d) => {
        try {
          let decoder;
          if (this.which === 'html') {
            decoder = entities.decodeHTML;
          } else {
            decoder = entities.decodeXML;
          }
          return { dest: decoder(d) };
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
