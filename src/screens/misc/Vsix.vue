<template lang="pug">
.screen
  .container
    h2 VSCode - VSIX Downloader
    p Download an extension directly from the Marketplace.

    .alert-wrap(v-if="alrt")
      .uk-alert-danger(ref="alert" uk-alert) {{ alrt }}

    form(v-on:submit.prevent="onSubmit" uk-grid).uk-grid-medium
      div
        label.uk-form-label Extension Name
        .uk-form-controls
          input#extn.uk-input.uk-form-width-medium(type="text" v-model="extn" @keyup.enter="openSearch" placeholder="extension-name" pattern="^[0-9A-Za-z_-]+$")
          span &nbsp;
          button#sch.uk-button.uk-button-default(type="button" @click="openSearch") Search
      div
        label.uk-form-label Publisher
        .uk-form-controls
          input#publ.u-full-width.uk-input(type="text" v-model="publ" placeholder="publisher" pattern="^[0-9A-Za-z_-]+$")
      div
        label.uk-form-label Version
        .uk-form-controls
          input#vers.uk-input.uk-form-width-small(type="text" v-model="vers" placeholder="1.0.0" pattern="[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}")
          span &nbsp;
          button#latest.uk-button.uk-button-default(type="button" @click="getLatest") Latest

      div
        label.uk-form-label Item Name
        .uk-form-controls
          code {{ itemName }}

      div
        label.uk-form-label Badge
        .uk-form-controls
          a(:href="badgeLink" rel="noreferrer noopener")
            img(:src="badgeImage" alt="Version")

      div
        label.uk-form-label URL
        .uk-form-controls
          pre
            code {{ dlUrl }}

      div
        button.uk-button.uk-button-primary(type="button" @click="doDownload") Download
        button#oep.uk-button.uk-button-default.uk-margin-left(type="button" @click="openExtn") Open Extension Page

    hr

    ul
      li
        a(href="http://code.visualstudio.com/docs/editor/extension-gallery#_common-questions") Managing Extensions in Visual Studio Code
</template>

<script>
export default {
  name: 'vsix',
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
    itemName() {
      return `${this.publ}.${this.extn}`;
    },
    dlUrl() {
      const publisher = this.publ;
      const extensionName = this.extn;
      const version = this.vers;
      const url = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extensionName}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;
      return url;
    },
    badgeLink() {
      return `https://marketplace.visualstudio.com/items?itemName=${this.itemName}`;
    },
    badgeImage() {
      return `https://vsmarketplacebadge.apphb.com/version/${this.itemName}.svg`;
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
