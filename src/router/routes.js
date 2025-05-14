const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyAccount.vue') },
      { path: '/myAccount', component: () => import('pages/MyAccount.vue'), name:'myAccount' },
      { path: '/policies', component: () => import('pages/Policies/MainPage.vue'), name:'policies' },
      { path: '/closedOne', component: () => import('pages/ClosedOne/MainPage.vue'), name:'closedOne' },
      { path: '/nominees', component: () => import('pages/Nominees/MainPage.vue'), name:'nominees' },
      { path: '/policies/add', component: () => import('pages/Policies/AddPolicy.vue'), name:'addPolicy' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
