<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style lang="css">

</style>
