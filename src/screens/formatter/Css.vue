<template lang="pug">
.screen
  .container
    h2 CSS Formatter

    textarea#src.uk-textarea.block(v-model="src")

    .uk-margin.centering
      button#format.uk-button.uk-button-primary(@click="doFormat") Format

    .uk-position-relative

      .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-margin
        pre#dest {{ dest }}

      copy-to-clipboard(target="#dest")
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
    };
  },
  methods: {
    doFormat() {
      this.dest = jsBeautify.css(this.src);
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
</style>
