<template>
  <v-container class="">
    <v-row align="center" justify="center">
     <v-col cols="12" sm="10" md="10" lg="10" class="mr-6 ml-6">
       <v-app-bar-nav-icon class="mt-6" @click.stop="setDrawerState"></v-app-bar-nav-icon>
        <v-layout column v-if="!hasSelected">
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
         <h4 class="text-center mt-3 mb-3 font-weight-regular">Select a user to start a chat</h4>
         <v-data-iterator
           sort-by=""
           :items="accounts" 
           :loading="initialLoading">
           <template v-slot:default="{ items }">
           <v-card flat v-for="item in items" :key="item.id" class="mt-4" @click="retrieveMessages(item)">
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
        </v-layout>

        <section v-else>
         <v-layout>
          <v-btn text v-on:click.prevent="hasSelected = false; chatID = ''" class="mt-4 mb-2">
            <v-icon>
             mdi-arrow-left
            </v-icon>
             Return
          </v-btn>
         </v-layout>
          <main>
            <div v-for="(msg, index) in messages" v-bind:key="'index-'+index"
                 :class="['message', sentOrReceived(msg.userUID)]">
              <p>{{ msg.text }}</p>
            </div>
            <div ref="scrollable"></div>
          </main>

          <form v-on:submit.prevent="sendMessage">
            <input v-model="message" type="text" placeholder="Enter your message!">
            <button class="btn-send" :disabled="!message" type="submit">📩</button>
          </form>
        </section>
     </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from 'vuex'
import firebase from 'firebase'
export default {
 async mounted(){
  document.title = "Chat Application - Evsu-TES"
  await this.$store.dispatch('auth/checkUser')
  this.getAccounts()
 },
 data(){
  return {
    db: firebase.firestore(),
    message: '',
    messages: [],
    chatID: '',
    search: '',
    hasSelected: false,
  }
 },
 computed: {
  ...mapState('auth', ['user']),
  ...mapState('auth', ['accounts'])
 },
 methods: {
  async getAccounts(){
   await this.$store.dispatch('auth/getAccounts', this.search);
  },
  retrieveMessages(item){
    this.hasSelected = true
    this.chatID = item.student_number
    let query = firebase.firestore().collection("messages")
    query = query.where('chatID', '==', item.student_number)
    query = query.orderBy('createdAt')
    query.onSnapshot(querySnap => {
      this.messages = querySnap.docs.map(doc => doc.data())
    })
  },
  setDrawerState(){
     this.$store.commit('updates/SET_DRAWER_STATE')
  },
  sentOrReceived(userUID) {
      return userUID === this.user.id ? 'sent' : 'received'
  },
  async sendMessage() {
    const messageInfo = {
      'userUID': this.user.id,
      'displayName': this.user.info.first_name + ' ' + this.user.info.last_name,
      'text': this.message,
      'createdAt': Date.now(),
      'chatID': this.chatID
    }
    await this.db.collection('messages').add(messageInfo)
    this.message = ''
    this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
  }
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

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

section main {
  padding: 10px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  min-height: 70vh;
}

form {
  height: 6vh;
  bottom: 0;
  width: 100%;
  display: flex;
  margin-top: 5px;
  font-size: 1.2rem;
}
        
input {
  line-height: 1.3;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border: none;
  padding: 0 15px;
}
    
 input {
  color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid grey;
}

p {
  max-width: 500px;
  margin-bottom: 12px;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 20px;
  position: relative;
  color: white;
  text-align: center;
}

.message {
  display: flex;
  align-items: center;
}
.message.received p{
  background: #e5e5ea;
  color: #000;
  margin-top: 3px;
}
.message.sent {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.message.sent p{
  color: #fff;
  background: #0b93f6;
  margin-top: 3px;
}

.btn-send {
 background: #0b93f6;
 padding: 0rem 1rem;
 border-top-right-radius: 5px;
 border-bottom-right-radius: 5px;
}

</style>