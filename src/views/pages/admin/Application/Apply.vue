<template>
 <div>
   <v-container class="h-100">
    <v-row align="center" justify="center">
     <v-col class="pa-1" sm="10" md="10" lg="7">
      <v-btn text v-on:click.prevent="$router.back()" class="mt-5"> 
        <v-icon>
         mdi-arrow-left
        </v-icon>
        Return
      </v-btn>
      <v-layout class="pl-6 mt-5">
       <p class="headline">TES Application Form</p>
      </v-layout>
      <v-layout class="pl-6 pr-5">
       <p class="subtitle-2">In consonance with The Data Privacy Act of 2012 all information provided in this form will be treated with confidentiality.</p>
      </v-layout>
      <v-layout class="pl-6 pr-5">
       <p class="subtitle-2 mt-4 red--text" v-if="!isValid">All fields are required!</p>
      </v-layout>
      <v-form ref="form" @submit.prevent="apply">
        <v-stepper class="mt-2" flat v-model="currentStep" vertical non-linear>
           <v-stepper-step editable
             step="1">
             Student Data
           </v-stepper-step>

           <v-stepper-content step="1">
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.student_id" outlined dense label="Student ID"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.first_name" outlined dense label="First Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.middle_name" outlined dense label="Middle Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.last_name" outlined dense label="Last Name"></v-text-field>
             <v-select :items="gender" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.gender" label="Gender" dense></v-select>
            <v-dialog
               ref="dialog"
               v-model="birthdayModal"
               :return-value.sync="date"
               persistent
               width="290px"
             >
               <template v-slot:activator="{ on, attrs }">
                 <v-text-field
                   v-model="data.birthday"
                   label="Date of Birth"
                   prepend-icon="mdi-calendar"
                   readonly
                   v-bind="attrs"
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="data.birthday" scrollable>
                 <v-spacer></v-spacer>
                 <v-btn text color="primary" @click="birthdayModal = false">
                   Cancel
                 </v-btn>
                 <v-btn text color="primary" @click="$refs.dialog.save(date)">
                   OK
                 </v-btn>
               </v-date-picker>
             </v-dialog>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]"  v-model="data.contact_number" outlined dense label="Contact Number"></v-text-field>
             <v-checkbox v-model="data.hasDisability" label="Has Disability?" color="red darken-3" hide-details></v-checkbox>
             <v-text-field type="text" class="pt-4" hide-details="auto" :rules="[rules.required]" v-model="data.street" outlined dense label="Street"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.barangay" outlined dense label="Barangay"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.town" outlined dense label="Town"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.province" outlined dense label="Province"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.zipcode" outlined dense label="Zip Code"></v-text-field>
             <v-select :items="programs" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.program" label="Program Name" dense></v-select>
             <v-select :items="yearlevel" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.year_level" label="Year Level" dense></v-select>
             <v-btn
               color="primary" small class="mt-3"
               @click="currentStep = 2">
               Next
             </v-btn>
           </v-stepper-content>

           <v-stepper-step editable
             step="2">
             Family Information
           </v-stepper-step>

           <v-stepper-content step="2">
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.father_first_name" outlined dense label="Father's First Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.father_middle_name" outlined dense label="Father's Middle Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.father_last_name" outlined dense label="Father's Last Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.father_monthly_salary" outlined dense label="Father's Monthly Salary"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.mother_first_name" outlined dense label="Mother's First Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.mother_maiden_name" outlined dense label="Mother's Maiden Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.mother_last_name" outlined dense label="Mother's Last Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.mother_monthly_salary" outlined dense label="Mother's Monthly Salary"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.siblings_monthly_salary" outlined dense label="Siblings Monthly Salary"></v-text-field>
             <v-text-field type="number" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.house_member" outlined dense label="House Member"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.household_number" outlined dense label="Household Number"></v-text-field>
             <v-btn
               color="primary" small class="mt-3"
               @click="currentStep = 3">
               Next
             </v-btn>
           </v-stepper-content>

           <v-stepper-step step="3"  editable>
             Login Credentials
           </v-stepper-step>

           <v-stepper-content step="3">
             <v-text-field type="email" class="pt-2" :rules="[rules.required, rules.email]" hide-details="auto" v-model="data.email" outlined dense label="Email Address"></v-text-field>
             <v-text-field type="password" class="pt-2" :rules="[rules.required]" hide-details="auto" v-model="data.password" outlined dense label="Password"></v-text-field>
             <v-btn type="submit" small color="primary" :loading="isLoading" class="mt-3 mr-2">
               Submit
             </v-btn>
             <v-btn type="button" @click.prevent="$router.back()" small color="grey" class="mt-3">
               Cancel
             </v-btn>
           </v-stepper-content>
         </v-stepper>
       </v-form>
     </v-col>
    </v-row>
   </v-container>
 </div>
</template>
<script>
import testData from '@/assets/js/train.js'
export default {
   data () {
     return {
       birthdayModal: false,
       rules: {
         required: value => !!value || 'Required.',
         email: value => {
           const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           return pattern.test(value) || 'Invalid e-mail.'
         },
       },
       currentStep: 1,
       isValid: false,
       date: '',
       data: {
        first_name: '',
        middle_name: '',
        birthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        last_name: '',
        gender: '',
        contact_number: '',
        year_level: '',
        email: '',
        password: '',
        confirm_password: '',
        street: '',
        barangay: '',
        town: '',
        program: '',
        province: '',
        zipcode: '',
        hasDisability: false,
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_monthly_salary: '',
        mother_first_name: '',
        mother_maiden_name: '',
        mother_last_name: '',
        mother_monthly_salary: '',
        siblings_monthly_salary: '',
        house_member: '',
        household_number: '',
       },
       gender: [
        { value: "Male", text: "Male"},
        { value: "Female", text: "Female"},
       ],
       yearlevel: [{value: 'I', text: 'I'},{value: 'II', text: 'II'},{value: 'III', text: 'III'},{value: 'IV', text: 'IV'},{value: 'V', text: 'V'}],
       programs: [
        {value: '(BEEd) - Bachelor of Elementary Education ', text: '(BEEd) - Bachelor of Elementary Education'},
        {value: '(BECEd) - Bachelor of Early Childhood Education', text: '(BECEd) - Bachelor of Early Childhood Education'},
        {value: '(BSNEd) - Bachelor of Special Needs Education', text: '(BSNEd) - Bachelor of Special Needs Education'},
        {value: '(BPEd) - Bachelor of Physical Education', text: '(BPEd) - Bachelor of Physical Education'},
        {value: '(BTLEd) - Bachelor of Technology and Livelihood Education', text: '(BTLEd) - Bachelor of Technology and Livelihood Education'},
        {value: '(BSEd ENGLISH) - Bachelor of Secondary Education Major in English', text: '(BSEd ENGLISH) - Bachelor of Secondary Education Major in English'},
        {value: '(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino', text: '(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino'},
        {value: '(BSEd MATH) - Bachelor of Secondary Education Major in Math', text: '(BSEd MATH) - Bachelor of Secondary Education Major in Math'},
        {value: '(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies', text: '(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies'},
        {value: '(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science', text: '(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science'},
        {value: '(BSA) - Bachelor of Science in Accountancy', text: '(BSA) - Bachelor of Science in Accountancy'},
        {value: '(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management', text: '(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management'},
        {value: '(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management', text: '(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management'},
        {value: '(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management', text: '(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management'},
        {value: '(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management', text: '(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management'},
        {value: '(BSOA) - Bachelor of Science in Office Administration', text: '(BSOA) - Bachelor of Science in Office Administration'},
        {value: '(BSHM) - Bachelor of Science in Hospitality Management', text: '(BSHM) - Bachelor of Science in Hospitality Management'},
        {value: '(BS TM) - Bachelor of Science in Tourism Management', text: '(BS TM) - Bachelor of Science in Tourism Management'},
        {value: '(BS PSYCH) - Bachelor of Science in Psychology', text: '(BS PSYCH) - Bachelor of Science in Psychology'},
        {value: '(BSIT) - Bachelor of Science in Information Technology', text: '(BSIT) - Bachelor of Science in Information Technology'},
        {value: 'Technology', text: '(BLIS) - Bachelor of Library and Information Science'},
       ],
     }
   },
   created(){
    // testData()
   },
   methods: {
    async apply(){
     this.isValid = this.$refs.form.validate()
     if(this.isValid){
       this.isLoading = true
       const isQualified = testData(this.data)
       this.data.isQualified = isQualified
       const {data, status} = await this.$store.dispatch('applicant/saveApplicant', this.data)
       this.checkStatus(data, status, '', 'updates/getApplicants')
       if(status == 200){
        this.$router.back()
        this.$toast.success('Login to your account to view updates and application status')
        this.clearData()


       }
       this.isLoading = false

     }
     else {
      this.$toast.error('Please fill in all the fields')
      this.isLoading = true
     }
       this.isLoading = false

    },
    clearData(){
     this.data = {
      first_name: '',
        middle_name: '',
        birthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        last_name: '',
        gender: '',
        contact_number: '',
        year_level: '',
        email: '',
        password: '',
        confirm_password: '',
        street: '',
        barangay: '',
        town: '',
        province: '',
        zipcode: '',
        hasDisability: false,
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_monthly_salary: '',
        mother_first_name: '',
        mother_maiden_name: '',
        mother_last_name: '',
        mother_monthly_salary: '',
        siblings_monthly_salary: '',
        house_member: '',
        household_number: '',
     }
    }
   }
}
</script>
<style>

</style>