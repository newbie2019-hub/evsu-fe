<template>
 <div>
  <user-avatar/>
  <v-container class="mb-14">
    <v-row align="center" justify="center">
      <v-col lg="8">
        <h3 class="primary--text">Applicant Records</h3>
        <p class="grey--text lighten-1 caption">Welcome, Here are the applicants</p>
      </v-col>
    </v-row>
   <v-row align="center" justify="center">
    <v-col sm="10" md="10" lg="8">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="pt-0"
        ></v-text-field>
      </v-card-title>
      <v-data-iterator
        sort-by=""
        :items="applicants" 
        :loading="initialLoading"
        :search="search">
        <template v-slot:default="{ items }">
         <v-card flat v-for="item in items" :key="item.id" class="mt-4" @click="setViewRecord(item)">
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
             <span class="white--text subtitle-2">{{item.info.first_name[0]}}{{item.info.last_name[0]}}</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.info.first_name}} {{item.info.last_name}}</v-list-item-title>
              <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
              <v-layout>
               <v-chip class="white--text mt-1" :color="item.status.status == 0 ? 'red darken-2' : 'green darken-2'" x-small>{{item.status.status == 0 ? 'Not Qualified' : 'Qualified'}}</v-chip>
              </v-layout>
            </v-list-item-content>
          </v-list-item>
         </v-card>
       </template>
      </v-data-iterator>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import UserAvatar from '../../components/UserAvatar.vue'
import { mapState } from 'vuex';
export default {
  data(){
   return {
    search: '',
    data: []
   }
  },
  computed: {
   ...mapState('applicant', ['applicants'])
  },
  async mounted(){
   this.initialLoading = true
   await this.$store.dispatch('applicant/getApplicants');
   this.initialLoading = false
  },
  components: {UserAvatar},
  methods: {
   setViewRecord(data) {
      this.$store.commit('applicant/SET_VIEW_APPLICANT', { data: data });
      this.$router.push({ name: 'viewapplicant', params: { slug: data.id } });
    },
   async getApplicants(){
     await this.$store.dispatch('applicant/getApplicants');
   },
   
  }
}
</script>
<style scoped>
.v-list-item__avatar {
 justify-content: center !important;
}

</style>