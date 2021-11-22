<template>
 <div>
   <v-container class="mb-16">
    <v-btn text v-on:click.prevent="$router.back()" class="mt-5">
      <v-icon>
       mdi-arrow-left
      </v-icon>
       Return
    </v-btn>
    <v-row align="center" justify="center">
     <v-col md="7" lg="6" class="mr-6 ml-6">
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
           <span class="white--text text-h4">{{ selectedAccount.info.first_name[0] }}{{selectedAccount.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <p class="text-h5">{{ selectedAccount.info.first_name }} {{selectedAccount.info.last_name}}</p>
          <p class="caption">{{ selectedAccount.email}}</p>
          <p class="caption">Date Registered: {{ selectedAccount.created_at}}</p>
          <!-- <v-chip class="white--text mt-1" :color="selectedApplicant.status.status == 0 ? 'red darken-2' : 'green darken-2'" x-small>{{selectedApplicant.status.status == 0 ? 'Not Qualified' : 'Qualified'}}</v-chip> -->
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Personal Information
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-text-field type="text" class="mt-5" hide-details="auto" readonly v-model="selectedAccount.student_number" outlined dense label="Student Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.first_name" outlined dense label="First Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.middle_name" outlined dense label="Middle Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.last_name" outlined dense label="Last Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.tes_award" outlined dense label="TES Award Number"></v-text-field>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedAccount.email" outlined dense label="Email Address"></v-text-field>
     
      <v-layout class="mt-5">
         <v-dialog
            v-model="dialogApprove"
            persistent
            max-width="290"
            v-if="selectedAccount.status != 'Approved'">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="">
            Approve
            <v-icon color="green accent-3" right>mdi-account-check</v-icon>
           </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Approve
            </v-card-title>
            <v-card-text>Are you sure you want to approve this account? Make sure the TES Award Number is valid</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialogApprove = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="approveAccount">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
         <v-dialog
            v-model="dialogDelete"
            persistent
            max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="red--text">
            Delete
            <v-icon color="red accent-3" right>mdi-delete-empty</v-icon>
           </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Confirm Delete
            </v-card-title>
            <v-card-text>Are you sure you want to delete this applicant?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialogDelete = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="deleteAccount">
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
import { mapState } from 'vuex'
export default {
  data(){
    return {
      dialogApprove: false,
      dialogDelete: false,
      delete_data: {
        id: ''
      },
      approve_data: {
       id: ''
      }
     
    }
  },
  computed: {
    ...mapState('auth', ['selectedAccount'])
  },
  mounted(){
   document.title = "View Account"
   if(this.selectedAccount == 0) return this.$router.back()
  },
  methods: {
    async deleteAccount() {
      this.delete_data.id = this.selectedAccount.id
      const { status, data } = await this.$store.dispatch('auth/deleteAccount', this.delete_data);
      if(status == 200){
        this.$router.back()
        this.$toast.success(data.msg)
      }
    },
    async approveAccount() {
      this.approve_data.id = this.selectedAccount.id
      const { status, data } = await this.$store.dispatch('auth/approveAccount', this.approve_data);
      if(status == 200){
        this.$toast.success(data.msg)
        this.$router.back()
      }
    },
  }
}
</script>