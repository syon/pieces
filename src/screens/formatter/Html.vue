<template lang="pug">
.screen.uk-flex.uk-flex-column
  .container
    h2 HTML Formatter

  .container.uk-flex-1(uk-grid)
    .uk-width-3-4.uk-flex.uk-flex-column

      textarea#src.uk-textarea(v-model="src" placeholder="変換したいテキストを入力してください。中に含まれたCSS・JavaScriptも整形されます。タグであれば完全なHTML文書である必要はありません。")

      .uk-margin.centering
        button#format.uk-button.uk-button-primary(@click="doFormat") Format

      .uk-position-relative.uk-flex-1.uk-flex

        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-margin.uk-flex-1.uk-width-1-1
          pre#dest {{ dest }}

        copy-to-clipboard(target="#dest")

    .uk-width-1-4
      .options-header Options
      form.uk-form-stacked
        .uk-margin
          .uk-form-label インデント
          .uk-grid-small.uk-child-width-auto.uk-grid.uk-child-width-expand
            label
              input.uk-radio(type="radio" v-model="indent_width" value="2" name="indent_width")
              span.uk-margin-small-left 2
            label
              input.uk-radio(type="radio" v-model="indent_width" value="4" name="indent_width")
              span.uk-margin-small-left 4
            label
              input.uk-radio(type="radio" v-model="indent_width" value="tab" name="indent_width")
              span.uk-margin-small-left TAB
        .uk-margin
          .uk-form-label 改行コード
          .uk-grid-small.uk-child-width-auto.uk-grid.uk-child-width-expand
            label
              input.uk-radio(type="radio" v-model="eol" value="\\r\\n" name="eol")
              span.uk-margin-small-left CRLF
            label
              input.uk-radio(type="radio" v-model="eol" value="\\n" name="eol")
              span.uk-margin-small-left LF
        .uk-margin
          .uk-grid-small.uk-child-width-auto.uk-grid
            label
              input.uk-checkbox(type="checkbox" v-model="preserve_newlines" name="preserve_newlines")
              span.uk-margin-small-left 改行を維持する
      .options-header Links
      ul
        li
          a(href="https://github.com/beautify-web/js-beautify")
            | js-beautify
      adsense(ad-client="ca-pub-2136746860059501" ad-slot="9805871014" ad-style="display:block" ad-format="auto")
</template>

<script>
import jsBeautify from 'js-beautify';
import CopyToClipboard from '@/components/CopyToClipboard';
import Adsense from '@/components/AdSense';

export default {
  name: 'html',
  components: {
    CopyToClipboard,
    Adsense,
  },
  data() {
    return {
      src: '<section><h1>Hello</h1></section>',
      dest: '',
      indent_width: 2,
      preserve_newlines: true,
      eol: '\\r\\n',
    };
  },
  methods: {
    doFormat() {
      const inText = this.src;
      const opts = {
        indent_size: this.indent_width,
        indent_with_tabs: this.indent_width === 'tab',
        preserve_newlines: this.preserve_newlines,
        eol: this.eol,
      };
      const outText = jsBeautify.html(inText, opts);
      this.dest = outText;
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen
  height calc(100vh - 150px)

#src, #dest
  font-family Consolas, "Liberation Mono", Menlo, Courier, monospace
  font-size 12px

#src
  height 150px

#dest
  height 100%
  padding 5px
  border 0
  overflow-x scroll

.centering
  text-align center

.options-header
  font-size 14px
  margin-bottom 15px
  padding 8px 0
  font-size 12px
  border-bottom 1px solid #e5e5e5
</style>
