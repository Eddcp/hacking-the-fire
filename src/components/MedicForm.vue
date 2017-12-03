<template lang="html">
  <div>
  <form v-on:submit.prevent v-if="this.occurrence" novalidate="novalidate">
    <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Informações do Paciente</h3>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label for="inputPatient">Paciente:</label>
            <input type="text" :disabled="isDisabled" v-model="occurrence.patients[0].fullName" class="form-control" id="inputPatient" placeholder="Digite o nome">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputSex">Sexo:</label>
            <select :disabled="isDisabled" v-model="occurrence.patients[0].gender" class="form-control" id="inputSex">
                <option selected="selected">Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputAge">Idade:</label>
            <the-mask
              v-model="occurrence.patients[0].age"
              type="text"
              :disabled="isDisabled"
              class="form-control"
              :mask="'###'"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputPressure">Pressão:*</label>
            <input v-model="occurrence.patients[0].pressure" readonly="readonly" type="text" class="form-control" id="inputPressure">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputCardiacFrequency">Frequência Cardíaca:*</label>
            <input v-model="occurrence.patients[0].cardiacFrequency" readonly="readonly" type="text" class="form-control" id="inputCardiacFrequency">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputO2Saturation">Saturação:*</label>
            <input v-model="occurrence.patients[0].o2Saturation" readonly="readonly" type="text" class="form-control" id="inputO2Saturation">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputTemperature">Temperatura:*</label>
            <input v-model="occurrence.patients[0].temperature" readonly="readonly" type="text" class="form-control" id="inputTemperature">
          </div>
        </div>

    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Informações da Ocorrência</h3>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="form-group">
            <label for="inputComplaint">Queixa do paciente:</label>
            <textarea
              v-model="occurrence.patients[0].symptomDescription"
              class="form-control"
              rows="3"
              :disabled="isDisabled"
              placeholder="Digite a queixa do paciente"></textarea>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="form-group">
            <label for="inputObservation">Observações:</label>
            <input
              v-model="occurrence.comments"
              type="text"
              class="form-control"
              :disabled="isDisabled"
              placeholder="Digite as observações">
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input
                    v-model="occurrence.emergency"
                    :disabled="isDisabled"
                    type="checkbox"> É uma emergência médica.
                </label>
              </div>
            </div>
        </div>
        <div v-if="occurrence.emergency" class="col-xs-12 col-sm-4">
          <div class="form-group">
            <label for="inputEmergency">Emergência:</label>
            <input
              type="text"
              v-model="occurrence.emergencyDescription"
              class="form-control"
              :disabled="isDisabled"
              placeholder="Digite a emergência">
          </div>
        </div>
    </div>
    <button @click="destinateResource" class="btn btn-success">Destinar Recurso</button>
    <br>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      occurrence: this.$store.currentOccurence,
      isDisabled: true,
      formSubmitted: false,
    }
  },
  methods: {
    destinateResource() {
      this.$router.push('/dispatch-resource')
    }
  }
}
</script>

<style lang="css">
</style>
