<template lang="pug">
.screen
  .container
    h2 pixel-color

    div(style="display:flex; align-items:flex-start;")
      canvas#myCanvas(style="cursor: crosshair;")
      #clickedColor
        div(style="width:100px; height:100px;")

    ul
      li
        a(href="https://msdn.microsoft.com/ja-jp/library/jj203843(v=vs.85).aspx") Canvas を使って画像の色をサンプリングする (Windows)

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';
import ImagePath from './pixel-color.jpg';

export default {
  name: 'pixel-color',
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
    this.init();
  },
  methods: {
    init() {
      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      const image = document.createElement('img');
      image.src = ImagePath;
      image.addEventListener('load', () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, 500, 500);
      }, false);

      canvas.onmousemove = (evt) => {
        const mouseX = parseInt(evt.offsetX, 10);
        const mouseY = parseInt(evt.offsetY, 10);
        const hex = this.getHexByXY(mouseX, mouseY);
        const div = document.getElementById('clickedColor');
        div.style = `background-color:${hex}`;
      };
    },
    getHexByXY(x, y) {
      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      const imagedata = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // const data = imagedata.data;
      const i = ((y * canvas.width) + x) * 4;
      const r = imagedata.data[i];
      const g = imagedata.data[i + 1];
      const b = imagedata.data[i + 2];
      // const a = imagedata.data[i + 3];
      return `#${this.d2Hex(r)}${this.d2Hex(g)}${this.d2Hex(b)}`;
    },
    d2Hex(d) {
      // Converts a decimal number to a two digit Hex value
      let hex = Number(d).toString(16);
      while (hex.length < 2) {
        hex = `0${hex}`;
      }
      return hex.toUpperCase();
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
