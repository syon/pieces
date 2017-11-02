<template lang="pug">
.screen
  .container
    h2 CSS Formatter

  .container.uk-flex-1(uk-grid)
    .uk-width-3-4.uk-flex.uk-flex-column
      textarea#src.uk-textarea.block(v-model="src")

      .uk-margin.centering
        button#format.uk-button.uk-button-primary(@click="doFormat") Format

      .uk-position-relative

        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-margin
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

export default {
  name: 'css',
  components: {
    CopyToClipboard,
  },
  data() {
    return {
      src: 'body{color:red;}',
      dest: '',
      indent_width: 2,
      preserve_newlines: true,
      eol: '\\r\\n',
    };
  },
  methods: {
    doFormat() {
      const opts = {
        indent_size: this.indent_width,
        indent_with_tabs: this.indent_width === 'tab',
        preserve_newlines: this.preserve_newlines,
        eol: this.eol,
      };
      this.dest = jsBeautify.css(this.src, opts);
    },
  },
};
</script>

<style lang="stylus" scoped>
.block {
  display: block;
  width: 100%;
}

#src, #dest {
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
}

#src {
  height: 150px;
}

#dest {
  height: 300px;
  padding: 5px;
  border: 0;
  overflow-x: scroll;
}

.centering {
  text-align: center;
}

.options-header
  font-size 14px
  margin-bottom 15px
  padding 8px 0
  font-size 12px
  border-bottom 1px solid #e5e5e5
</style>
