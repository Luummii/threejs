import CubeAnimation from '../pages/CubeAnimation.vue'
import Auth from '../pages/Auth.vue'

export default [
  { path: '/', redirect: 'CubeAnimation' },
  { path: '/CubeAnimation', name: 'CubeAnimation', component: CubeAnimation },
  { path: '/auth', name: 'Auth', component: Auth }
]
