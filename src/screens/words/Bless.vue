<template lang="pug">
.screen
  .jumbotron
    .container.text-center
      h1 Words of Blessings
      p This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.

  .container.text-center
    .row
      .col-md-12.messages
        hr.wedding
        dl
          dt ご結婚おめでとうございます
          dd Happy Wedding
        dl
          dt 末永くお幸せに
          dd I wish your Love grow Forever
        dl
          dt 結婚の日が、永遠に続く幸福の新しい始まりの日となりますように
          dd May your wedding day be a new beginning to everlasting happiness
        dl
          dt お二人の永遠の愛と絆をお祈りします
          dd Wishing you both everlasting Love & Togetherness
</template>

<script>
export default {
  name: 'bless',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');
.screen {
  margin: 32px;
  font-family: 'Helvetica Neue', Helvetica, Arial, YuGothic, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.jumbotron h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 100px;
}
.text-center {
  text-align: center;
}
.messages {
  font-size: 28px;
  color: #444;
}
hr.wedding {
  padding: 0;
  border: none;
  border-top: medium double #ca6;
  color: #ca6;
  text-align: center;
}
hr.wedding:after {
  content: "Wedding";
  font-family: 'Great Vibes', cursive;
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.5em;
  background: white;
}
.messages h3:after {
  content: " ";
  display: block;
  position: relative;
  top: -30px;
  border-bottom: 4px solid #ca6;
}
.messages dl {
  margin: 3em 0;
}
.messages dl dt {
  letter-spacing: -1px;
}
.messages dl dd {
  font-size: 42px;
  color: #444;
  font-family: 'Great Vibes', cursive;
  padding: 5px;
}
</style>
