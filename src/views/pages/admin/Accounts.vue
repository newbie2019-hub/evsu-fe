<template>
 <div>
  <user-avatar/>
  <v-container class="mb-14 p-4">
    <v-row align="center" justify="center">
      <v-col cols="11" sm="10" lg="7">
        <h2 class="primary--text">Accounts</h2>
        <p class="grey--text lighten-1 caption">Welcome, Here are the registered accounts</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col sm="10" md="10" lg="7">
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
        <v-card-title>
          <v-select
            v-model="selectedStatus"
            @change="getAccounts"
            :items="filterStatus"
            label="Status"
            dense
          ></v-select>
        </v-card-title>
        <v-data-iterator
          sort-by=""
          :items="accounts" 
          :loading="initialLoading">
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
                <v-chip class="white--text mt-1" :color="item.status == 'Pending' ? 'red darken-2' : 'green darken-2'" x-small>{{item.status}}</v-chip>
               </v-layout>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
        </v-data-iterator>
        <v-layout class="mt-3 ml-4">
          <v-btn @click="exportData" ref="download" :loading="isLoading" color="secondary" elevation="2">Export</v-btn>
        </v-layout>
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
    data: [],
    filterStatus: [
      'Officially Enrolled', 'Unofficial', 'All Records'
    ],
    selectedStatus: 'All Records',
   }
  },
  computed: {
   ...mapState('auth', ['accounts'])
  },
  async mounted(){
   this.initialLoading = true
   document.title = "Accounts Management"
   await this.$store.dispatch('auth/getAccounts', {search: this.search, status: this.selectedStatus});
   this.initialLoading = false
  },
  components: {UserAvatar},
  methods: {
    async exportData(){
      this.isLoading = true
      const res = await this.$store.dispatch('auth/exportData', this.selectedStatus)
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url
      link.target = '_'
      link.setAttribute('download', 'accounts.xlsx');
      document.body.appendChild(link);
      link.click()

      //Enable for mobile application
      //  await Browser.open({ url: `https://be.tesgrant.info/api/admin/accounts/export?status=${this.selectedStatus}` });

      this.isLoading = false
   },
   async getAccounts(){
     await this.$store.dispatch('auth/getAccounts', {search: this.search, status: this.selectedStatus});
   },
   setViewRecord(data) {
    console.log(data)
      this.$store.commit('auth/SET_VIEW_ACCOUNT', { data: data });
      this.$router.push({ name: 'viewaccount', params: { slug: data.id } });
   },
  },
  watch: {
    search(){
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.getAccounts()
      }, 900);
    }
  }
}
</script>
<style scoped>
.v-list-item__avatar {
 justify-content: center !important;
}

</style>