import * as types from './mutation-types'

export const mutations = {
    [types.INIT_CALL] (state, payload){
      state.occurrences.push(...payload)
    },
    [types.SET_OCCURRENCES] (state, payload) {
      state.occurrences = payload
    },
    [types.SET_OCCURRENCE_BY_ID](state, id) {
       state.currentOccurrence = state.occurrences.find((occurrence) => occurrence.id == id)
     },
    [types.SET_RESOURCES] (state, payload) {
      state.resources = payload
    }
}
