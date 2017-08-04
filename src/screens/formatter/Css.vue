<template lang="pug">
.screen
  .container
    h2 CSS Formatter

    textarea#src.uk-textarea.block(v-model="src")

    .centering
      button#format.button-primary(@click="doFormat") Format

    pre#dest {{ dest }}
</template>

<script>
import jsBeautify from 'js-beautify';

export default {
  name: 'css',
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
  background-color: #f5f5f5;
  overflow-x: scroll;
}

.centering {
  text-align: center;
}
</style>
