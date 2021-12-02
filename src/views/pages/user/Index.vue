<template>
  <div class="home">
    <bottom-nav />
    <router-view name="userdashboard"/>
    <router-view name="userstatus"/>
    <router-view name="userchat"/>
    <router-view name="userviewupdate"/>
    <router-view name="usersettings"/>
  </div>
</template>
<script>
import BottomNav from './components/BottomNavigation.vue'
export default {
  name: 'Index',
  async mounted(){
    await this.$store.dispatch('auth/checkAuthUser')
  },
  components: {
    BottomNav
  }
}
</script>
