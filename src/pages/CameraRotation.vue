<template>
  <div class="container"></div>
</template>

<script>
import * as THREE from 'three' // another connect don`t work see doc https://threejs.org/docs/#manual/introduction/Import-via-modules
import * as random from '../../lib/random'
import OrbitControls from 'three-orbitcontrols' // устанавливается отдельно от библиотеки

export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 20,
      rotateZ: .01,
      rotateX: .005,
      rotateY: .01,
      move: false
    }
  },
  mounted() {  
    // Создание сцены     
    const scene = new THREE.Scene()
    // Фон сцены
    scene.background = new THREE.Color('#191A2D')
    
    // Ставим камеру
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)        
    camera.position.set(2, -.5, 20)
    camera.lookAt(scene.position)

    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true })   // эти параметры для лучшего сглаживания объектов  
    const htmlElement = document.getElementsByClassName('container')[0].appendChild(renderer.domElement) // [0] - потому что возвращает массов вех объектов с такими классами
    renderer.setSize(window.innerWidth, window.innerHeight)

    // cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const blue = new THREE.MeshBasicMaterial({ color: 'blue' })
    const red = new THREE.MeshBasicMaterial({ color: 'red' })
    const green = new THREE.MeshBasicMaterial({ color: 'green' })
    const yellow = new THREE.MeshBasicMaterial({ color: 'yellow' })
    const gray = new THREE.MeshBasicMaterial({ color: '#00B5AC' })
    const pink = new THREE.MeshBasicMaterial({ color: 'pink' })
    const cube = new THREE.Mesh(geometry, [blue, red, green, yellow, gray, pink])
    scene.add(cube)

    // controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    // resize    
    const onWindowResize = (event) => {
      camera.aspect = window.innerWidth / window.innerHeight              
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      controls.handleResize()
    }    
    window.addEventListener('resize', onWindowResize)    

    const animate = () => {                                     
      renderer.render(scene, camera)
    }  
    animate()
    controls.addEventListener('change', animate)
  }
}
</script>

<style lang="stylus">
</style>