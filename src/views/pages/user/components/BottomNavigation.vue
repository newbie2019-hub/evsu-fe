<template>
    <v-navigation-drawer
      v-model="isOpened"
      fixed
      temporary>
      <v-divider></v-divider>

      <v-list
        v-model="group"
        nav
        dense>
          <v-layout d-flex column align-center justify-center class="mb-5 mt-6">
        <img src="@/assets/images/logo.png" alt="" class="img-fluid mb-4">
        <h5>EVSU - TES</h5>
      </v-layout>
      <v-divider></v-divider>
        <v-list-item link to="/user/dashboard">
          <v-list-item-icon>
              <v-icon small>mdi-file-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      
        <v-list-item link to="/user/chat">
          <v-list-item-icon>
              <v-icon small>mdi-chat</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Chat</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      
        <v-list-item link to="/user/settings">
          <v-list-item-icon>
              <v-icon small>mdi-account-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item link to="/user/logs">
          <v-list-item-icon>
              <v-icon small>mdi-clipboard-clock-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Activity Log</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-dialog
          v-model="dialogLogout"
          persistent
          max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-on="on" v-bind="attrs">
          <v-list-item-icon>
              <v-icon small>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Confirm Log-out
          </v-card-title>
          <v-card-text>Are you sure you want to log-out?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="gray"
              text
              @click="dialogLogout = false">
              Cancel
            </v-btn>
            <v-btn
              color="green darken-3"
              text
              @click="logout">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-divider></v-divider>

     
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data: () => ({ 
      value: 'updates', 
      group: false,
      dialogLogout: false,
      isOpened: {
        get(){
          return this.$store.state['updates'].drawer
        },
        set(val){
          console.log(val)
          return val
        }
      }
    }),
    methods: {
      ...mapActions('auth', ['logoutAuthUser']),
      async logout(){
        this.isLoading = true
        const res = await this.logoutAuthUser()
        if(res.status == 200){
          this.$router.push('/')
        }
        else if (res.status == 401){
          this.$store.commit('auth/UNSET_USER')
          this.$router.push('/')
        }
        this.isLoading = false
      },
    },
    computed: { 
      ...mapState('updates', ['drawer']),
    },
    watch: {
      group () {
        this.drawer = false
      },
      drawer(){
        this.isOpened = { get() { this.$store.state['updates'].drawer } }
      }
    },
  }
</script>