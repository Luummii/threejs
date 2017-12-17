import CubeAnimation from '../pages/CubeAnimation.vue'
import Particles from '../pages/Particles.vue'

export default [
  { path: '/', redirect: 'CubeAnimation' },
  { path: '/CubeAnimation', name: 'Cube Animation', component: CubeAnimation },
  { path: '/Particles', name: 'Particles', component: Particles }
]
