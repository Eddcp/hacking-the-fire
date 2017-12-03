<template lang="html">
  <div>
  <form v-on:submit.prevent v-if="!formSubmitted" novalidate="novalidate">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h3>Informações do Solicitante</h3>
      </div>
      <div class="col-xs-12 col-sm-3">
        <div class="form-group">
          <label for="inputPhone">Telefone:*</label>
          <the-mask
            v-model="occurrence.phone"
            :disabled="isDisabled"
            class="form-control"
            name="phone"
            placeholder="Digite o telefone"
            :mask="['(##) #####-####']"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="form-group">
          <label for="inputName">Solicitante:*</label>
          <input
            type="text"
            v-model="occurrence.requester"
            name="requester"
            :disabled="isDisabled"
            class="form-control"
            placeholder="Digite o nome">
        </div>
      </div>
      <div class="col-xs-12 col-sm-3">
        <div class="form-group">
          <label for="inputCity">Município:*</label>
          <input
            type="text"
            v-model="occurrence.city"
            name="city"
            :disabled="isDisabled"
            class="form-control"
            id="inputCity"
            placeholder="Digite a cidade">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label for="inputAddress">Endereço:*</label>
            <input
              type="text"
              v-model="occurrence.address"
              name="address"
              :disabled="isDisabled"
              class="form-control"
              placeholder="Digite o endereço">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputNumber">Número:*</label>
            <the-mask
              v-model="occurrence.addressNumber"
              class="form-control"
              name="adressNumber"
              :disabled="isDisabled"
              v-validate="''"
              placeholder="Digite o número"
              :mask="'####'"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <div class="form-group">
            <label for="inputDistrict">Bairro:*</label>
            <input type="text" :disabled="isDisabled" v-model="occurrence.neighborhood" name="neighborhood" class="form-control" id="inputDistrict" placeholder="Digite o telefone">
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="form-group">
            <label for="inputReference">Referência:*</label>
            <input type="text" :disabled="isDisabled" v-model="occurrence.reference" name="reference" class="form-control" id="inputReference" placeholder="Digite a referência">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Informações do Paciente</h3>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label for="inputPatient">Paciente:*</label>
            <input type="text" :disabled="isDisabled" v-model="occurrence.patients[0].fullName" class="form-control" id="inputPatient" placeholder="Digite o nome">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputSex">Sexo:*</label>
            <select :disabled="isDisabled" v-model="occurrence.patients[0].gender" class="form-control" id="inputSex">
                <option selected="selected">Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputAge">Idade:*</label>
            <the-mask
              v-model="occurrence.patients[0].age"
              type="text"
              :disabled="isDisabled"
              class="form-control"
              :mask="'###'"
            />
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Informações da Ocorrência</h3>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="form-group">
            <label for="inputComplaint">Queixa do paciente:*</label>
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
            <label for="inputObservation">Observações:*</label>
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
                    @click="toggleEmergency"
                    :disabled="isDisabled"
                    type="checkbox"> É uma emergência médica.
                </label>
              </div>
            </div>
        </div>
        <div v-if="occurrence.emergency" class="col-xs-12 col-sm-4">
          <div class="form-group">
            <label for="inputEmergency">Emergência:*</label>
            <input
              type="text"
              v-model="occurrence.emergencyDescription"
              class="form-control"
              :disabled="isDisabled"
              placeholder="Digite a emergência">
          </div>
        </div>
    </div>
    <button type="button" class="btn btn-info" v-if="editButton" @click="editForm">Editar</button>
    <button type="submit" class="btn btn-info" v-if="!editButton" @click="validateBeforeSubmit">Salvar</button>
    <button @click="destinateResource" class="btn btn-success">Destinar Recurso</button>
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
      editButton: true
    }
  },
  methods: {
    toggleEmergency() {
      this.occurrence.emergency = !this.occurrence.emergency;
    },
    editForm() {
      this.isDisabled = false
      this.editButton = false
    },
    saveForm() {
      this.isDisabled = true
      this.editButton = true
    },
    destinateResource() {
      this.$router.push('/dispatch-resource')
    },
    validateBeforeSubmit(e) {
      e.preventDefault()
      this.$validator.validateAll();
      if (!this.errors.any()) {
          this.submitForm()
      }
    },
    submitForm(){
      var data = this.occurrence;
      this.saveForm()
      this.$store.dispatch('postOccurrence', {data: data})
    }
  }
}
</script>

<style lang="css">
</style>
