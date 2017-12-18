import CubeAnimation from '../pages/CubeAnimation.vue'
import Particles from '../pages/Particles.vue'
import AirplaneFlight from '../pages/AirplaneFlight.vue'
import CameraRotation from '../pages/CameraRotation.vue'
import Paint from '../pages/Paint.vue'

export default [
  { path: '/', redirect: 'CubeAnimation' },
  { path: '/CubeAnimation', name: 'Cube Animation', component: CubeAnimation },
  { path: '/CameraRotation', name: 'Camera Rotation', component: CameraRotation },
  { path: '/Paint', name: 'Paint', component: Paint },
  { path: '/Particles', name: 'Particles', component: Particles },
  { path: '/AirplaneFlight', name: 'Airplane Flight', component: AirplaneFlight }
]
