<template lang="html">
  <div class="container">
    <div class="col-xs-12 col-sm-6">
      <occurrence-list></occurrence-list>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import OccurrenceList from '../components/OccurrenceList.vue';

export default {
  data() {
    return {
    }
  },
  methods:{
    ...mapActions([
      'getOccurrences'
    ])
  },
  components: {
    OccurrenceList
  }
}
</script>

<style lang="css">
</style>
