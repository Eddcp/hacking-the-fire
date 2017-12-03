<template lang="html">
    <div class="container">
      <edit-form></edit-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditForm from '../components/EditForm.vue';

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
    EditForm
  }
}
</script>

<style lang="css">
</style>
