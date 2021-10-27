import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'

const Home = () => import ('@/views/pages/admin/Home.vue')
const Records = () => import ('@/views/pages/admin/Records.vue')
const ViewApplicant = () => import ('@/views/pages/admin/ViewApplicant.vue')

const Scholar = () => import ('@/views/pages/admin/Scholars.vue')

const Updates = () => import ('@/views/pages/admin/Updates.vue')
const CreateUpdate = () => import ('@/views/pages/admin/Updates/NewUpdate.vue')
const EditUpdate = () => import ('@/views/pages/admin/Updates/EditUpdate.vue')
const ViewUpdate = () => import ('@/views/pages/admin/Updates/ViewUpdate.vue')
const Settings = () => import ('@/views/pages/admin/Settings.vue')
const Apply = () => import ('@/views/pages/admin/Application/Apply.vue')

const UserHome = () => import ('@/views/pages/user/Home.vue')
const UserStatus = () => import ('@/views/pages/user/Updates.vue')
const UserViewUpdate = () => import ('@/views/pages/user/ViewUpdate.vue')
const UserSettings = () => import ('@/views/pages/user/Settings.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: { hasUser: true}
    },
    {
        path: '/apply',
        name: 'Apply',
        component: Apply
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>import ( /* webpackChunkName: "index" */ '../views/pages/admin/Index.vue'),
        meta: { isAdmin: true, requiresLogin: true },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                components: {
                    dashboard: Home
                },
            },
            {
                path: 'records',
                name: 'Records',
                components: {
                    records: Records
                },
            },
            {
                path: 'applicant/view/:slug',
                name: 'viewapplicant',
                components: {
                    viewapplicant: ViewApplicant
                },
            },
            {
                path: 'scholars',
                name: 'Scholar',
                components: {
                    scholar: Scholar
                },
            },
            {
                path: 'updates',
                name: 'Updates',
                components: {
                    updates: Updates
                },
            },
            {
                path: 'updates/create',
                name: 'CreateUpdate',
                components: {
                    createupdate: CreateUpdate
                },
            },
            {
                path: 'updates/edit/:slug',
                name: 'editupdate',
                components: {
                    editupdate: EditUpdate
                }
            },
            {
                path: 'updates/view/:slug',
                name: 'viewupdate',
                components: {
                    viewupdate: ViewUpdate
                }
            },
            {
                path: 'settings',
                name: 'Settings',
                components: {
                    settings: Settings
                },
            },
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () =>import ( /* webpackChunkName: "index" */ '../views/pages/user/Index.vue'),
        meta: { isUser: true, requiresLogin: true },
        children: [
            {
                path: 'dashboard',
                name: 'userdashboard',
                components: {
                    userdashboard: UserHome
                },
            },
            {
                path: 'updates',
                name: 'userstatus',
                components: {
                    userstatus: UserStatus
                },
            },
            {
                path: 'updates/view/:slug',
                name: 'userviewupdate',
                components: {
                    userviewupdate: UserViewUpdate
                }
            },
            {
                path: 'settings',
                name: 'usersettings',
                components: {
                    usersettings: UserSettings
                },
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresLogin) && !localStorage.getItem('auth')){
    next({name: 'Login'})
  }
  else if (to.matched.some((record) => record.meta.hasUser) && localStorage.getItem('auth') && localStorage.getItem('isAdmin')) {
      next({ name: "Dashboard" });
	} 
  else if (to.matched.some((record) => record.meta.hasUser) && localStorage.getItem('auth') && localStorage.getItem('isUser')) {
      next({ name: "User" });
	} 
  else if (to.matched.some((record) => record.meta.isAdmin) && localStorage.getItem('auth') && localStorage.getItem('isUser')) {
      next({ name: "User" });
	} 
  else if (to.matched.some((record) => record.meta.isUser) && localStorage.getItem('auth') && localStorage.getItem('isAdmin')) {
      next({ name: "Dashboard" });
	} 
  else {
		next();
	}
});

export default router