<template>
 <div>
  <user-avatar/>
  <v-container class="pt-3 pl-10 pr-10">
   <h4>{{msg}},</h4>
   <h1>{{user.info.first_name}} {{user.info.last_name}}</h1>
   <p class="grey--text lighten-1 caption mt-3">Welcome, Here is your summary</p>
   <v-row class="mt-4" align="center" justify="center">
    <v-col sm="6" md="6" lg="4">
     <v-card elevation="1" class="pa-3">
       <v-list-item three-line>
        <v-list-item-content >
          <v-list-item-title class="text-h5 mb-1  text-center">
            <span class="text-h3">{{summary.records}}</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Records
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </v-col>
    <v-col sm="6" md="6" lg="4">
     <v-card elevation="1" class="pa-3">
       <v-list-item three-line>
        <v-list-item-content >
          <v-list-item-title class="text-h5 mb-1  text-center">
            <span class="text-h3">{{summary.updates}}</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Updates
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </v-col>
    <v-col sm="6" md="6" lg="4">
     <v-card elevation="1" class="pa-3">
       <v-list-item three-line>
        <v-list-item-content >
          <v-list-item-title class="text-h5 mb-1  text-center">
            <span class="text-h3">{{summary.account}}</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Users
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import UserAvatar from '../../components/UserAvatar.vue'
import {mapState} from 'vuex'
export default {
  data(){
    return {
     msg: '',
    }
  },
  components: {UserAvatar},
  async mounted(){
   this.greetingMsg()
   await this.$store.dispatch('dashboard/getSummary');
  },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('dashboard', ['summary'])
  },
  methods: {
   greetingMsg(){
      var today = new Date()
      var curHr = today.getHours()
      if (curHr < 12) {
        this.msg = 'Good Morning'
      } else if (curHr < 18) {
        this.msg = 'Good Afternoon'
      } else {
        this.msg = 'Good Evening'
      }
    }
  }
}
</script>