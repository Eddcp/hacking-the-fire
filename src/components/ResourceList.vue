<template lang="html">
  <form>
    <div v-if="showAlert" class="alert alert-success">
      <a href="#" class="close" @click="closeAlert" data-dismiss="alert" aria-label="close" title="close">×</a>
      <strong>Successo!</strong> Viatura encaminhada para a ocorrência!.
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Recursos Disponíveis</h3>
          <br>
        </div>
      </div>
      <div v-if="false" class="row">
        <div class="col-xs-9 col-sm-3">
          <div class="form-group">
            <select class="form-control" id="inputSex">
                <option selected="selected">Todas</option>
                <option
                  v-for="(resource, index) in resources"
                  key="index"
                  >
                  {{resource.resourceType}}
                </option>
            </select>
          </div>
        </div>
        <div class="col-xs-3 col-sm-6">
          <button type="button" class="btn btn-primary">Filtrar recursos</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="panel panel-default">
            <div class="panel-heading">Recursos</div>
            <div class="list-group">
                <button
                  v-for="(resource) in resourcesFiltered"
                  key="index"
                  type="button"
                  class="list-group-item"
                  :class="{ 'active' : resource.id == selected }"
                  @click="setActive(resource)">
                  <div class="col-sm-4">
                    ID: <strong>{{resource.id}}</strong>
                  </div>
                  <div class="col-sm-4">
                    Tipo: <strong>{{resource.resourceType}}</strong>
                  </div>
                  <div class="col-sm-4">
                    Status: <strong>{{resource.resourceStatus}}</strong>
                  </div>
                  <!-- <div class="col-sm-6">
                    Localização: <strong>({{resource.latitude}},{{resource.longitude}})</strong>
                  </div> -->
                </button>
              </div>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-2 col-sm-offset-10">
          <button type="button" @click="sendResource" :disabled="isDisabled" class="btn btn-success btn-block">Enviar Recurso</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getResources')
  },
  mounted() {

  },
  methods: {
    setActive(resource) {
      this.selected = resource.id
      this.resourceToSend = resource
      this.isDisabled = false
    },
    sendResource() {
      this.resourceToSend.occurrenceId = this.$store.currentOccurence.id
      this.resourceToSend.resourceStatus = 'ATTENDING'
      this.showAlert = true

      this.$store.dispatch('sendOccurrenceToResource', {data: this.resourceToSend})
    },
    closeAlert() {
      this.showAlert = false
    }
  },
  data() {
    return {
      resources: this.$store.state.resources,
      ocurrence: this.$store.currentOccurence,
      selected: undefined,
      resourceToSend: '',
      isDisabled: true,
      showAlert: false
    }
  },
  computed: {
    resourcesFiltered() {
        return this.resources
    }
  }
}
</script>

<style lang="css">
</style>
