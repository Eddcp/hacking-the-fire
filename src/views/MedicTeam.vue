<template lang="html">
    <medic-occurrence-list></medic-occurrence-list>
</template>

<script>
import { mapActions } from 'vuex';
import MedicOccurrenceList from '../components/MedicOccurrenceList.vue';

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
    MedicOccurrenceList
  }
}
</script>

<style lang="css">
</style>
