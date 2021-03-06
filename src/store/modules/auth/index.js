import API from '../../base/'

export default {
  namespaced: true,
  state: {
    user: {
      info: {
        first_name: "Evsu",
        last_name: "Tacloban",
      }
    },
    userinfo: [],
    useraccount: [],
    signup: '',
    adminlogs: [],
    userlogs: [],
    accounts: [],
    token: localStorage.getItem('auth') || '',
    selectedAccount: [],
  },
  getters: {
    GET_USER(state) {
      return state.user;
    }
  },
  mutations: {
    SET_ACCOUNTS(state, data){
      state.accounts = data
    },
    SET_VIEW_ACCOUNT(state, data){
      state.selectedAccount = data.data
    },
    SET_AUTH_ACC(state, data) {
      state.userinfo = data.user_info
      state.useraccount = data.user_account
      const bearer_token = localStorage.getItem('auth') || ''
      API.defaults.headers.common['Authorization'] = `Bearer ${bearer_token}`
    },
    SET_ACC(state, data){
      state.user = data
      const bearer_token = localStorage.getItem('auth') || ''
      API.defaults.headers.common['Authorization'] = `Bearer ${bearer_token}`
    },
    SET_USER_LOGS(state, data) {
      state.userlogs = data
    },
    SET_ADMIN_LOGS(state, data) {
      state.adminlogs = data
    },
    SET_USER_ACC(state, data) {
      state.user = data
    },
    SET_USER_TOKEN(state, token) {
     localStorage.setItem('auth', token)
     localStorage.setItem('isUser', 'true')
     state.token = token

     const bearer_token = localStorage.getItem('auth') || ''
     API.defaults.headers.common['Authorization'] = `Bearer ${bearer_token}`
    },
    SET_AUTH_TOKEN(state, token) {
     localStorage.setItem('auth', token)
     localStorage.setItem('isAdmin', 'true')
     state.token = token

     const bearer_token = localStorage.getItem('auth') || ''
     API.defaults.headers.common['Authorization'] = `Bearer ${bearer_token}`
    },
    SET_ORG_DEPARTMENT(state, data){
     state.signup = data
    },
    UNSET_USER(state){
     localStorage.removeItem('auth');
     localStorage.removeItem('isUser');
     localStorage.removeItem('isAdmin');
     state.token = ''
     state.user = {
        info: {
          first_name: "Evsu",
          last_name: "Tacloban",
        }
      },

     API.defaults.headers.common['Authorization'] = ''
   } 
  },
  actions: {
    async exportData({ commit }, status) {
      const res = await API.get(`/admin/accounts/export?status=${status}`,{
          headers:
          {
              'Content-Disposition': "attachment; filename=accounts.xlsx",
              'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          },
          responseType: 'arraybuffer',
      }).then(res => {
          return res;
      }).catch(err => {
          return err.response
      })

      return res;
    },
    async getAdminLogs({commit}){
      const res = await API.get('/auth/admin/logs').then(res => {
        commit('SET_ADMIN_LOGS', res.data)

        return res;
      }).catch(err => {
       return err
      })

      return res;
    },
    async getUserLogs({commit}){
      const res = await API.get('/auth/user/logs').then(res => {
        commit('SET_USER_LOGS', res.data)

        return res;
      }).catch(err => {
       return err
      })

      return res;
    },
    async loginAccount({commit}, payload){
      const res = await API.post('/auth/admin/login', payload).then(res => {
        commit('SET_AUTH_ACC', res.data)
        commit('SET_AUTH_TOKEN', res.data.access_token)

        return res;
      }).catch(err => {
       return err
      })

      return res;
    },
    async loginUserAccount({commit}, payload){
      const res = await API.post('/auth/user/login', payload).then(res => {
        commit('SET_USER_ACC', res.data.user)
        commit('SET_USER_TOKEN', res.data.access_token)

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async registerAccount({commit}, payload){

      const res = await API.post('/auth/user/store', payload).then(res => {

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getAccounts({commit}, {search, status}){
      const res = await API.get(`/auth/admin/accounts?search=${search}&status=${status}`).then(res => {
        commit('SET_ACCOUNTS', res.data);

        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getSignUpInfo({commit}){
      const res = await API.get('depandorg').then(res => {
        commit('SET_ORG_DEPARTMENT', res.data);
        return res
      }).catch(err => {
        return err.response;
      })

      return res;
    },
    async updateAccount({commit}, data){
      const res = await API.post(`auth/user/update`, data).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async updateAdminAccount({commit}, data){
      const res = await API.post(`auth/admin/update`, data).then(res => {
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    async logoutUser({commit}){
     const res = await API.post('auth/admin/logout?token=' + localStorage.getItem('auth')).then(response => {
       commit('UNSET_USER')
       return response
     }).catch(error => {
       return error.response
     });

     return res;
   },
    async logoutAuthUser({commit}){
     const res = await API.post('auth/user/logout?token=' + localStorage.getItem('auth')).then(response => {
       commit('UNSET_USER')
       return response
     }).catch(error => {
       return error.response
     });

     return res;
   },
   async checkUser({commit, dispatch}) {
    const res = await API.post('auth/admin/me?token=' + localStorage.getItem('auth')).then(res => {
      commit('SET_ACC', res.data)
      return res;
    }).catch(error => {
      if(error.response.status == 401){
        commit('UNSET_USER')
        location.reload()
      }
      return error.response;
    })

    return res;
   },
   async changeAdminPassword({commit}, data) {
    const res = await API.post('auth/admin/change_password', data).then(res => {
      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async changeUserPassword({commit}, data) {
    const res = await API.post('auth/user/change_password', data).then(res => {
      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async checkAuthUser({commit}) {
    const res = await API.post('auth/user/me?token=' + localStorage.getItem('auth')).then(res => {
      commit('SET_ACC', res.data)

      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async checkEmail({commit}, data){
    const res = await API.post('request/account/reset', data).then(res => {

      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async deleteAccount({ commit }, payload) {
    const res = await API.delete(`/admin/account/${payload.id}`).then(res => {
        return res;
    }).catch(err => {
        return err.response
    })

    return res;
   },
   async approveAccount({ commit }, payload) {
    const res = await API.put(`/admin/account/approve/${payload.id}`).then(res => {
        return res;
    }).catch(err => {
        return err.response
    })

    return res;
   },
   async verifyEmail({commit}, data){
    const res = await API.post('user/email/verify', data).then(res => {

      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async checkResetPassword({commit}, data){
    const res = await API.post('request/check/reset', data).then(res => {

      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
   async saveResetPassword({commit}, data){
    const res = await API.post('request/reset/password', data).then(res => {

      return res;
    }).catch(error => {
      return error.response;
    })

    return res;
   },
  },
}