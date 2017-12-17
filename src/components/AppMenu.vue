<template lang="html">
  <nav>
    <ul>
      <router-link v-for="(item, index) in itemsMenu" tag="li" :key="index" :to="item.path">{{ item.name }}</router-link>
    </ul>    
  </nav>
</template>

<script>
import routes from '../routes'

export default {    
  data () {
    return {
      itemsMenu: routes      
    }
  }
}
</script>

<style lang="stylus" scoped>
nav
  background-color #2D2E40
  font-size 16px
  position fixed
  top 0
  left 0
  bottom 0
  width 180px

  ul
    padding 10px

    li
      color #005954
      list-style none
      margin-top 7px

    li:hover
      color #00B5AC
      cursor pointer 

    li.router-link-active 
      color #00B5AC
</style>