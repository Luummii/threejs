import CubeAnimation from '../pages/CubeAnimation.vue'
import Particles from '../pages/Particles.vue'
import AirplaneFlight from '../pages/AirplaneFlight.vue'

export default [
  { path: '/', redirect: 'CubeAnimation' },
  { path: '/CubeAnimation', name: 'Cube Animation', component: CubeAnimation },
  { path: '/Particles', name: 'Particles', component: Particles },
  { path: '/AirplaneFlight', name: 'Airplane Flight', component: AirplaneFlight }
]
