<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="panel panel-danger">
          <div class="panel-heading">Emergências Médicas</div>
          <div class="list-group"
                v-for="(occurrence, index) in occurrences"
                key="index">
              <button @click="setCurrentOccurrenceId(occurrence)" to="/call" v-if="occurrence.emergency" tag="button" class="list-group-item">
                <div class="col-sm-3">
                  Cod: <strong>{{occurrence.id}}</strong>
                </div>
                <div class="col-sm-5">
                  Sintoma: <strong>{{occurrence.patients[0].symptomDescription}}</strong>
                </div>
                <div class="col-sm-4">
                  Status: <strong>{{occurrence.occurrenceStatus}}</strong>
                </div>
              </button>
            </div>
          </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-info">
          <div class="panel-heading">Ocorrências normais</div>
          <div class="list-group"
                v-for="(occurrence, index) in occurrences"
                key="index"
                v-if="!occurrence.emergency">
              <button @click="setCurrentOccurrenceId(occurrence)" class="list-group-item">
                <div class="col-sm-4">
                  Cod: <strong>{{occurrence.id}}</strong>
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
  methods: {
    setCurrentOccurrenceId(occurrence) {
      this.$store.currentOccurence = occurrence
      console.log(this.$store.currentOccurence)
      this.$router.push('/edit-call')
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
