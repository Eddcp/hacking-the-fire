<template lang="html">
    <div class="container">
      <medic-form></medic-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import MedicForm from '../components/MedicForm.vue';

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
    MedicForm
  }
}
</script>

<style lang="css">
</style>
