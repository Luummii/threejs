<template>
  <div class="container"></div>
</template>

<script>
import * as THREE from 'three' // another connect don`t work see doc https://threejs.org/docs/#manual/introduction/Import-via-modules
import * as random from '../../lib/random'

export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 0,
      rotateZ: .01,
      rotateX: .005,
      rotateY: .01,
      move: false
    }
  },
  mounted () {  
    // Создание сцены     
    const scene = new THREE.Scene()
    // Фон сцены
    scene.background = new THREE.Color('#191A2D')
    
    // Ставим камеру
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000) 
    // Точка куда постоянно смотрит камера   
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    // Позиция камеры
    camera.position.set(0, 0, 20)

    // Создаем рендер
    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true })   // эти параметры для лучшего сглаживания объектов  
    // Устанавливаем див
    const htmlElement = document.getElementsByClassName('container')[0].appendChild(renderer.domElement) // [0] - потому что возвращает массов вех объектов с такими классами
    //  
    renderer.setSize(window.innerWidth, window.innerHeight)

    // cube
    const geometry = new THREE.BoxGeometry(3, 2, 1)
    const blue = new THREE.MeshBasicMaterial({ color: 'blue' })
    const red = new THREE.MeshBasicMaterial({ color: 'red' })
    const green = new THREE.MeshBasicMaterial({ color: 'green' })
    const yellow = new THREE.MeshBasicMaterial({ color: 'yellow' })
    const gray = new THREE.MeshBasicMaterial({ color: '#00B5AC' })
    const pink = new THREE.MeshBasicMaterial({ color: 'pink' })
    const cube = new THREE.Mesh(geometry, [blue, red, green, yellow, gray, pink])
    scene.add(cube)

    // resize    
    const onWindowResize = (event) => {
      camera.aspect = window.innerWidth / window.innerHeight              
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }    
    window.addEventListener('resize', onWindowResize, false)    

    const animate = () => {            
      cube.rotation.x += 0.03
      cube.rotation.y += 0.01  
      cube.position.x =  this.x   
      cube.position.y =  this.y   
      cube.position.z =  this.z   
      if (this.move) {       
        this.z += this.rotateZ
        this.x += this.rotateX     
        this.y += this.rotateY
      } else {        
        this.z -= this.rotateZ
        this.x -= this.rotateX         
        this.y -= this.rotateY
      }

      if (this.z >= 10 || this.z <= -10 || this.y >= 5 || this.y < -5 || this.x >= 7 || this.x <= -5) {
        this.move = !this.move
        if (this.move) {
          this.rotateZ = this.rotateZ * -1
          this.rotateX = this.rotateX * -1
          this.rotateY = this.rotateY * -1
        }
      }                                  
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()
  }
}
</script>

<style lang="stylus">
</style>