<template lang="html">
  <div id="app">       
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style lang="stylus">
@import './assets/lib/normalize'

html, body
 overflow hidden 
</style>