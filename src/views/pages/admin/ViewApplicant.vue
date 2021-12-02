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
           <span class="white--text text-h4">{{ selectedApplicant.info.first_name[0] }}{{selectedApplicant.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <p class="text-h5">{{ selectedApplicant.info.first_name }} {{selectedApplicant.info.last_name}}</p>
          <p class="caption">{{ selectedApplicant.email}}</p>
          <p class="caption">Date Registered: {{ selectedApplicant.created_at}}</p>
          <v-chip class="white--text mt-1" :color="selectedApplicant.status == 'Unofficial' ? 'red darken-2' : 'green darken-2'" x-small>{{selectedApplicant.status == 'Official' ? 'Officially Enrolled' : 'Unofficial'}}</v-chip>
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Personal Information
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-text-field type="text" class="mt-5" hide-details="auto" readonly v-model="selectedApplicant.student_number" outlined dense label="Student Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.first_name" outlined dense label="First Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.middle_name" outlined dense label="Middle Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.last_name" outlined dense label="Last Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.gender" outlined dense label="Gender"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.birthday" outlined dense label="Birthday"></v-text-field>
       <!-- <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.marital_status" outlined dense label="Marital Status"></v-text-field> -->
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.street" rows="2" outlined dense label="Street"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.barangay" rows="2" outlined dense label="Barangay"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.town" rows="2" outlined dense label="Town"></v-textarea>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.province" outlined dense label="Province"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.zipcode" outlined dense label="Zip Code"></v-text-field>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Contact Information
       </p>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.email" outlined dense label="Primary Email Address">
         <v-icon v-if="selectedApplicant.email_verified_at" slot="append" color="green">mdi-check</v-icon>
         <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
       </v-text-field>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.email_secondary" outlined dense label="Secondary Email Address">
         <v-icon v-if="selectedApplicant.email_secondary_verified_at" slot="append" color="green">mdi-check</v-icon>
         <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
       </v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.info.contact_number" outlined dense label="Primary Contact Number"></v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.info.contact_number2" outlined dense label="Secondary Contact Number"></v-text-field>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Grant Type
       </p>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="selectedApplicant.info.tes_award" outlined dense label="TES Award Number"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="selectedApplicant.info.application_number" outlined dense label="Application Number"></v-text-field>
        <v-select :items="testype" class="mt-4" hide-details="auto" outlined v-model="selectedApplicant.info.tes_grant_type" label="Type of TES Grant" dense></v-select>
      
      <v-layout class="mt-5">
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
                @click="deleteApplicant">
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
      dialogDelete: false,
      delete_data: {
        id: ''
      },
      testype: [
        {
          value: 'Listahan', text: 'Listahan'
        },
        {
          value: '4Ps', text: '4Ps'
        },
        {
          value: 'SWDI', text: 'SWDI'
        },
        {
          value: 'ESGPPA', text: 'ESGPPA'
        },
      ],
    }
  },
  computed: {
    ...mapState('applicant', ['selectedApplicant'])
  },
  mounted(){
    document.title = "View Applicant"
   if(this.selectedApplicant == 0) return this.$router.back()
  },
  methods: {
    
    async deleteApplicant() {
      this.delete_data.id = this.selectedApplicant.id
      const { status, data } = await this.$store.dispatch('applicant/deleteApplicant', this.delete_data);
      if(status == 200){
        this.$router.back()
        this.$toast.success(data.msg)
      }
    },
  }
}
</script>