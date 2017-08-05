<template lang="pug">
#app
  appbar
  sidebar
  .tm-main.uk-section
    .uk-container
      router-view
</template>

<script>
import Appbar from '@/components/Appbar';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'app',
  components: {
    Appbar,
    Sidebar,
  },
};
</script>

<style lang="stylus">
.tm-main
  margin-left 240px
  padding-top 40px

.app-clipboard
  font-size 12px
</style>
