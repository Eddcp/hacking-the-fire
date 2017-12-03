<template lang="html">
  <!-- TODO Implements only one form component for all screens-->
  <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted" novalidate="novalidate">
    <div v-if="showAlert" class="alert alert-success">
      <a href="#" class="close" @click="closeAlert" data-dismiss="alert" aria-label="close" title="close">×</a>
      <strong>Success!</strong> Indicates a successful or positive action.
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h3>Informações do Solicitante</h3>
      </div>
      <div class="col-xs-12 col-sm-3">
        <div class="form-group">
          <label for="inputPhone">Telefone:*</label>
          <the-mask
            v-model="occurrence.phone"
            class="form-control"
            name="phone"
            placeholder="Digite o telefone"
            :mask="['(##) #####-####']"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="form-group">
          <label for="inputName">Solicitante:</label>
          <input
            type="text"
            v-model="occurrence.requester"
            name="requester"
            class="form-control"
            placeholder="Digite o nome">
        </div>
      </div>
      <div class="col-xs-12 col-sm-3">
        <div class="form-group">
          <label for="inputCity">Município:</label>
          <input
            type="text"
            v-model="occurrence.city"
            name="city"
            class="form-control"
            placeholder="Digite a cidade">
            <span class="text-danger"</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label for="inputAddress">Endereço:</label>
            <input
              type="text"
              v-model="occurrence.address"
              name="address"
              class="form-control"
              placeholder="Digite o endereço">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputNumber">Número:</label>
            <the-mask
              v-model="occurrence.addressNumber"
              class="form-control"
              id="inputNumber"
              name="adressNumber"
              v-validate="''"
              placeholder="Digite o número"
              :mask="'####'"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <div class="form-group">
            <label for="inputDistrict">Bairro:</label>
            <input type="text" v-model="occurrence.neighborhood" name="neighborhood" class="form-control" id="inputDistrict" placeholder="Digite o telefone">
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="form-group">
            <label for="inputReference">Referência:</label>
            <input type="text" v-model="occurrence.reference" name="reference" class="form-control" id="inputReference" placeholder="Digite a referência">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h3>Informações do Paciente</h3>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label for="inputPatient">Paciente:</label>
            <input type="text" v-model="occurrence.patients[0].fullName" class="form-control" placeholder="Digite o nome">
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <label for="inputSex">Sexo:*</label>
          <select
            name="gender"
            v-model="occurrence.patients[0].gender"
            class="form-control">
              <option selected="selected" disabled>Selecione</option>
              <option>Masculino</option>
              <option>Feminino</option>
          </select>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="form-group">
            <label for="inputAge">Idade:*</label>
            <the-mask
              name="age"
              v-model="occurrence.patients[0].age"
              type="text"
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
              placeholder="Digite a emergência">
          </div>
        </div>
    </div>
    <button class="btn btn-success" type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      occurrence: {
        address: '',
        addressNumber: '',
        city: '',
        comments: '',
        emergency: false,
        emergencyDescription: '',
        neighborhood: '',
        occurrenceStatus: 'OPENED',
        patientComplaint: '',
        patients: [
          {
            age: '',
            fullName: '',
            gender: '',
            symptomDescription: ''
          }
        ],
        phone: '',
        reference: '',
        requester: '',
      },
      formSubmitted: false,
      showAlert: false
    }
  },
  methods: {
    closeAlert() {
      this.showAlert = false
    },
    toggleEmergency() {
      this.occurrence.emergency = !this.occurrence.emergency;
    },
    validateBeforeSubmit(e) {
      e.preventDefault()
      this.$validator.validateAll();
      if (!this.errors.any()) {
          this.submitForm()
      }
    },
    submitForm(){
      this.showAlert = true
      this.$store.currentOccurence = this.occurrence
      this.$store.dispatch('postOccurrence', {data: this.occurrence})

      if (this.occurrence.emergency) {
        this.$router.push('/medic-team')
      } else {
        this.$router.push('/dispatch')
      }

    }
  }
}
</script>

<style lang="css">
</style>
