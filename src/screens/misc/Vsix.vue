<template lang="pug">
.screen
  .container
    h2 VSCode - VSIX Downloader
    p Download an extension directly from the Marketplace.

    .alert-wrap(v-if="alrt")
      .alert(ref="alert") {{ alrt }}

    form(v-on:submit.prevent="onSubmit")
      .row
        .five.columns
          label Extension Name
          div.vvv
            input#extn(type="text" v-model="extn" @keyup.enter="openSearch" placeholder="extension-name" pattern="^[0-9A-Za-z_-]+$")
            span &nbsp;
            button#sch.button(type="button" @click="openSearch") Search
        .three.columns
          label Publisher
          input#publ.u-full-width(type="text" v-model="publ" placeholder="publisher" pattern="^[0-9A-Za-z_-]+$")
        .four.columns
          label Version
          div.vvv
            input#vers(type="text" v-model="vers" placeholder="1.0.0" pattern="[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}")
            span &nbsp;
            button#latest.button(type="button" @click="getLatest") Latest

      .row
        label URL
        pre
          code {{ dlUrl }}

      .row
        button.button-primary(type="button" @click="doDownload") Download
        span &nbsp;
        button#oep.button(type="button" @click="openExtn") Open Extension Page

    hr

    ul
      li
        a(href="http://code.visualstudio.com/docs/editor/extension-gallery#_common-questions") Managing Extensions in Visual Studio Code

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'vsix',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      extn: 'vscode-icons',
      publ: 'robertohuertasm',
      vers: '7.3.0',
      rslt: null,
      alrt: null,
    };
  },
  computed: {
    dlUrl() {
      const publisher = this.publ;
      const extensionName = this.extn;
      const version = this.vers;
      const url = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extensionName}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;
      return url;
    },
  },
  mounted() {
    // console.log('mounted.');
  },
  methods: {
    openSearch() {
      const extensionName = this.extn;
      const url = (`https://marketplace.visualstudio.com/search?term=${extensionName}&target=VSCode&sortBy=Relevance`);
      window.open(url);
    },
    getLatest() {
      const publisher = this.publ;
      const extensionName = this.extn;
      fetch(`https://marketplace.visualstudio.com/items?itemName=${publisher}.${extensionName}`)
        .then(r => r.text())
        .then((t) => {
          const m = t.match(/"version":"([0-9.]+?)"/);
          this.vers = m[1];
        }).catch((e) => {
          this.alrt = e.toString();
        });
    },
    openExtn() {
      const publisher = this.publ;
      const extensionName = this.extn;
      const url = (`https://marketplace.visualstudio.com/items?itemName=${publisher}.${extensionName}`);
      window.open(url);
    },
    doDownload() {
      window.open(this.dlUrl);
    },
  },
};
</script>

<style lang="stylus" scoped>
.alert {
  color: red;
  background-color: rgb(255,240,240);
  margin-bottom: 2em;
  padding: 1em;
}
input[type=text] {
  font-size: 15px;
}
pre > code {
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-all;
}
input[pattern]:invalid {
  border-color: red;
}
.vvv {
  display: flex;
  #vers {
    width: 100px;
  }
  input {
    flex: 1;
  }
  .button {
    padding: 0 15px;
  }
}
</style>
