<template lang="pug">
.screen
  .container
    h2 URLエンコード

    textarea#src.block(v-model="enc_src" placeholder="変換したいテキストを入力してください（改行で複数指定できます）")

    .centering
      button#format.button-primary(@click="doEncode") エンコード
      select(v-model="enc_charset")
        option(value="utf8") UTF-8

    .results
      .line(v-for="line in encSrcList")
        span.head INPUT
        pre.line-src
          code {{ line.src }}
        span.head ENCODED
        pre.line-dest
          code {{ line.dest }}
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
  methods: {
    doEncode() {
      this.enc_dest = urlencode(this.enc_src, this.enc_charset);
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen {
  font-size: 16px;
}

button, input, select {
  font-size: 16px;
}

.block {
  display: block;
  width: 100%;
}

#src, #dest {
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
}

#src {
  height: 100px;
}

.dest {
  padding: 5px;
  background-color: #f5f5f5;
  overflow-x: scroll;
}

.centering {
  text-align: center;
}

.results {
  .line {
    margin: 0 0 3em;
    .head {
      margin: .4em .2em;
      padding: .2em .8em;
      font-size: 11px;
      color: #444d56;
      background-color: rgba(27,31,35,0.08);
    }
    .line-src {
      margin: 0 0 .5em;
    }
    .line-dest {
      margin: 0 0 .5em;
    }
    code {
      background-color: #f6f8fa;
      border: 0;
      white-space: normal;
      word-break: break-all;
    }
  }
}
</style>
