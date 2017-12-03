<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacking The Fire</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li @click="setActive('call')" :class="{ active: isActive('call') }" ><router-link to="/call">Chamada</router-link></li>
          <li @click="setActive('medic-team')" :class="{ active: isActive('medic-team') }"><router-link to="/medic-team">Equipe Médica</router-link></li>
          <li @click="setActive('dispatch')" :class="{ active: isActive('dispatch') }"><router-link to="/dispatch">Despacho</router-link></li>
        </ul>
        <!-- <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Buscar">
          </div>
          <button type="submit" class="btn btn-default">Buscar</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
   return { activeItem: 'call' }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style lang="css">
</style>
