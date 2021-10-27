<template>
 <div>
   <v-container class="mb-15">
    <v-row align="center" justify="center">
     <v-col md="7" lg="6" class="mr-6 ml-6">
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
           <span class="white--text text-h5">{{ user.info.first_name[0] }}{{user.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <p class="text-h5">{{ user.info.first_name }} {{user.info.last_name}}</p>
          <p class="caption">{{ user.email}}</p>
          <p class="caption grey--text">ADMINISTRATOR</p>
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-account-circle</v-icon>
         Personal Information
        </p>
       <v-divider class="mt-2"></v-divider>
       <v-form ref="form"  class="mt-5">
         <v-text-field type="text" :loading="initialLoading" clearable outlined v-model="data.first_name" label="First Name" dense :rules="[rules.required]"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" clearable outlined v-model="data.middle_name" label="Middle Name" dense :rules="[rules.required]"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" clearable outlined v-model="data.last_name" label="Last Name" dense :rules="[rules.required]"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" clearable outlined v-model="data.contact_number" label="Contact Number" dense :rules="[rules.required]"></v-text-field>
         <v-select :items="gender" outlined v-model="data.gender" label="Select gender" dense></v-select>
         <p class="mt-4 text-uppercase primary--text">
            <v-icon color="primary">mdi-account-key</v-icon>
            Login Credentials
            </p>
          <v-divider class="mt-2 mb-5"></v-divider>
          <v-text-field type="text" :loading="initialLoading" clearable outlined v-model="data.email" :rules="[rules.required, rules.email]" label="Email Address" prepend-inner-icon="mdi-email" dense>
          </v-text-field>
          <v-text-field type="password" 
            clearable 
            outlined 
            v-model="data.password" 
            label="Password"  
            prepend-inner-icon="mdi-lock" 
            hint="If empty, password wont be changed"
            persistent-hint
            dense>
          </v-text-field>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success darken-1 mt-3"
                dark
                v-bind="attrs"
                v-on="on">
                Save Changes
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Update Account
              </v-card-title>
              <v-card-text>Enter your current password to save your changes</v-card-text>
              <v-text-field type="password" hint="Current Password" class="pl-5 pr-5" :rules="[rules.required]" required counter clearable outlined v-model="data.confirm_password" label="Current password" dense></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" text @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn  v-on:click.prevent="save" color="green darken-1" text>
                  Proceed
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
       </v-form>
       <v-layout class="mt-5">
         <v-dialog
            v-model="dialogLogout"
            persistent
            max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="red--text">
            Log-out Account
            <v-icon color="red accent-3" right>mdi-exit-to-app</v-icon>
           </v-btn>
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
       </v-layout>
     </v-col>
    </v-row>
   </v-container>
 </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      dialogLogout: false,
      data: {
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        contact_number: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
      changePassword: false,
      gender: [
        { value: "Male", text: "Male"},
        { value: "Female", text: "Female"},
      ]
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  async mounted(){
    this.initialLoading = true
    await this.$store.dispatch('auth/checkUser')
    this.setDetails()
    this.initialLoading = false
  },
  methods: {
   ...mapActions('auth', ['logoutUser']),
   async logout(){
     this.isLoading = true
     const res = await this.logoutUser()
     if(res.status == 200){
       this.$router.push('/')
     }
     else if (res.status == 401){
       this.$store.commit('auth/UNSET_USER')
       this.$router.push('/')
     }
     this.isLoading = false
   },
   setDetails(){
     this.data.first_name = this.user.info.first_name
     this.data.middle_name = this.user.info.middle_name
     this.data.last_name = this.user.info.last_name
     this.data.gender = this.user.info.gender
     this.data.contact_number = this.user.info.contact_number
     this.data.email = this.user.email
   },
   async save(){
     this.$refs.form.validate()
     const {status, data} = await this.$store.dispatch('auth/updateAdminAccount', this.data)
     this.checkStatus(data, status, '', 'auth/checkUser')
     this.data.password = ''
   }
  }
}
</script>