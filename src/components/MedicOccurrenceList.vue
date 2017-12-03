<template lang="html">
  <!-- TODO Implements only one occurrence list component-->
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-danger">
          <div class="panel-heading">Emergências Médicas</div>
          <div class="list-group"
              v-for="(occurrence, index) in occurrences"
              key="index">
              <button @click="setCurrentOccurrenceId(occurrence)" to="/call" v-if="occurrence.emergency" tag="button" class="list-group-item">
                <div class="col-sm-4">
                  Cod: <strong>{{occurrence.id}}</strong>
                </div>
                <div class="col-sm-4">
                  Sintoma: <strong>{{occurrence.patients[0].symptomDescription}}</strong>
                </div>
                <div class="col-sm-4">
                  Status: <strong>{{occurrence.occurrenceStatus}}</strong>
                </div>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getOccurrences')
  },
  data() {
    return {

    }
  },
  methods: {
    setCurrentOccurrenceId(occurrence) {
      this.$store.currentOccurence = occurrence
      this.$router.push('/patient-information')
    }
  },
  computed: {
    occurrences() {
        return this.$store.state.occurrences
    }
  }
}
</script>

<style lang="css">
</style>
