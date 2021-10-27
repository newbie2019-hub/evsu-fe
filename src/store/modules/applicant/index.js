import API from '../../base/'

export default {
    namespaced: true,
    state: {
      applicants: [
       {
        info: {
         first_name: '', middle_name: '', last_name: '',
        }
       }
      ],
      selectedApplicant: [],
    },
    getters: {

    },
    mutations: {
       SET_APPLICANTS(state, data) {
           state.applicants = data
       },
       SET_VIEW_APPLICANT(state, data){
         state.selectedApplicant = data.data
       }
    },
    actions: {
        async getApplicants({ commit }) {
            const res = await API.get(`/admin/applicant?`).then(res => {
                commit('SET_APPLICANTS', res.data)
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async saveApplicant({ commit }, payload) {
            const res = await API.post('/admin/applicant', payload).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async deleteApplicant({ commit }, payload) {
            const res = await API.delete(`/admin/applicant/${payload.id}`).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },

    },
}