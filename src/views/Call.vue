<template lang="html">
    <div class="container">
      <call-form></call-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CallForm from '../components/CallForm.vue';

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods:{
    ...mapActions([
      'initCall'
    ])
  },
  components: {
    CallForm
  }
}
</script>

<style lang="css">
</style>
