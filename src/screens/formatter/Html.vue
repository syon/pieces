<template lang="pug">
.screen
  .container
    h2 HTML Formatter

    textarea#src.block(v-model="src")

    .centering
      button#format.button-primary(@click="doFormat") Format

    pre#dest {{ dest }}
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';
import jsBeautify from 'js-beautify';

export default {
  name: 'html',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      src: '<section><h1>Hello</h1></section>',
      dest: '',
    };
  },
  methods: {
    doFormat() {
      const inText = this.src;
      const outText = jsBeautify.html(inText);
      this.dest = outText;
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
