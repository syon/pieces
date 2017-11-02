<template lang="pug">
.screen
  .container
    h2 Base64エンコード・デコード

  .container(uk-grid)
    .uk-width-3-4
      .uk-card
        h3.uk-heading-line
          span エンコード
        .uk-form-stacked
          .uk-form-label Input (Text)
          .uk-form-controls
            textarea#src.uk-textarea.block(v-model="enc_src" placeholder="変換したいテキストを入力してください（改行で複数指定できます）")

        #app-encoded.results.uk-position-relative.uk-margin
          .uk-form-label Encoded
          .uk-card.uk-card-default.uk-card-body
            pre.line-dest
              .line(v-for="line in encodedList")
                code {{ line.dest }}
          copy-to-clipboard(target="#app-encoded .line-dest")

        h3.uk-heading-line
          span デコード
        .uk-form-stacked
          .uk-form-label Input (Text)
          .uk-form-controls
            textarea#src.uk-textarea.block(v-model="dec_src" placeholder="変換したいテキストを入力してください（改行で複数指定できます）")

        #app-decoded.results.uk-position-relative.uk-margin
          .uk-form-label Decoded
          .uk-card.uk-card-default.uk-card-body
            pre.line-dest
              .line(v-for="line in decodedList")
                code {{ line.dest }}
          copy-to-clipboard(target="#app-decoded .line-dest")

        h3.uk-heading-line
          span 画像のエンコード
        .uk-form-stacked
          .uk-form-label Input (Image)
          .uk-form-controls
            input(type="file" @change="onFileChange")
            div
              img(:src="base64edImage" style="max-width:150px;")

        #app-encoded-img.results.uk-position-relative.uk-margin
          .uk-form-label Encoded (Image)
          .uk-card.uk-card-default.uk-card-body(style="max-height:150px;overflow:auto;")
            pre.line-dest
              .line
                code {{ base64edImage }}
          copy-to-clipboard(target="#app-encoded-img .line-dest")

        h3.uk-heading-line
          span Base64画像の表示
        .uk-form-stacked
          .uk-form-label Input (Base64 Image)
          .uk-form-controls
            textarea#src.uk-textarea.block(v-model="dec_img_src" placeholder="data:image/png;base64,AAAAAAAAAAAA...")

        #app-decoded-img.results.uk-position-relative.uk-margin
          .uk-form-label Show Image
          .uk-card.uk-card-default.uk-card-body
            img(:src="dec_img_src" style="max-height:500px;")

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
      dec_src: '',
      base64edImage: '',
      dec_img_src: '',
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
      const list = this.dec_src.split('\n');
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
    destImg() {
      return this.base64edImage;
    },
    uriImage() {
      return this.base64edImage;
    },
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) { return; }
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;
      reader.onload = (e) => {
        vm.base64edImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.base64edImage = '';
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
