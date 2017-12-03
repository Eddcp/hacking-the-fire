import * as types from './mutation-types';
import axios from 'axios'

axios.defaults.baseURL = 'http://172.10.100.79:8080'

export const getOccurrences = ({commit}) => {
  axios.get('/occurrences/get-ocurrences')
    .then(response => {
      if (response.data) {
        commit(types.SET_OCCURRENCES, response.data)
      }
    })
}

export const setCurrentOccurrenceId = ({commit}, {id}) => {
  commit(types.SET_OCCURRENCE_BY_ID, id)
}

export const postOccurrence = ({commit}, {data}) => {
  axios.post('/occurrences/save-occurrence', data)
    .then(response => {
      if(response) {
        console.log(response)
      }
    })
}

export const getResources = ({commit}) => {
  axios.get('/resources/get-resources')
    .then(response => {
      if (response.data) {
        commit(types.SET_RESOURCES, response.data)
      }
    })
}

export const sendOccurrenceToResource = ({commit}, {data}) => {
  axios.post('/resources/set-occurrance-to-resource', data)
    .then(response => {
      console.log(response)
    })
}
//
// export const setAvailability = ({commit}) => {
//   axios.post('/resources/set-availability', {
//     "resourceToken": "ash29920sds0101liop",
//     "latitude": -18.9031509,
//     "longitude": -48.2576969,
//     "resourceType": "Resgate"
//   })
//     .then(response => {
//       console.log(response)
//     })
// }
