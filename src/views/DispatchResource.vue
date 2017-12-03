<template lang="html">
  <div class="container">
    <div class="row">
      <resource-list></resource-list>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12">
          <br>
          <google-map name="example"></google-map>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';
import ResourceList from '../components/ResourceList.vue';

export default {
  mounted() {
  },
  components: {
    GoogleMap,
    ResourceList
  }
}
</script>

<style lang="css">
</style>
