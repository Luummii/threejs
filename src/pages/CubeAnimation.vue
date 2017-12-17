<template>
  <div id="test"></div>
</template>

<script>
import * as THREE from 'three' // another connect don`t work see doc https://threejs.org/docs/#manual/introduction/Import-via-modules

export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 20
    }
  },
  mounted() {       
    const scene = new THREE.Scene()
    scene.getObjectByName( "objectName" )
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)    
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById("test").appendChild(renderer.domElement)

    // cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const blue = new THREE.MeshBasicMaterial({ color: 'blue' })
    const red = new THREE.MeshBasicMaterial({ color: 'red' })
    const green = new THREE.MeshBasicMaterial({ color: 'green' })
    const yellow = new THREE.MeshBasicMaterial({ color: 'yellow' })
    const gray = new THREE.MeshBasicMaterial({ color: 'gray' })
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
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      camera.position.set(this.x, this.y, this.z)
      if (this.muve) {
        this.z += .1
        this.x += .05            
        this.y += .05
      } else {
        this.z -= .1
        this.x -= .05            
        this.y -= .05 
      }
      if (this.z >= 40 || this.z <= 15) this.muve = !this.muve                 
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()
  }
}
</script>

<style lang="stylus">
#test
 overflow hidden 
</style>