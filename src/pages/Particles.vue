<template>
  <div class="container"></div>
</template>

<script>
import * as THREE from 'three'


export default {
  data () {
    return {

    }
  },
  mounted () {  
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#191A2D')  

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)    
    camera.lookAt(0, 0, 0)
    camera.position.set(0, 0, 20)

    const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true })    
    const htmlElement = document.getElementsByClassName('container')[0].appendChild(renderer.domElement)
    renderer.setSize(window.innerWidth, window.innerHeight)

    
    const material = new THREE.PointsMaterial({
      color: 0xffffcc
    })

    const geometry = new THREE.Geometry()
/*     let x, y, z
    this._.times(10000, (n) => {
      x = (Math.random() * 400) - 400
      y = (Math.random() * 400) - 400
      z = (Math.random() * 400) - 400

      geometry.vertices.push(new THREE.Vector3(x, y, z))
    })
    const pointCloud = new THREE.Points(geometry, material) */

    let x, y, z
    x = (Math.random() * 800) - 400
    y = (Math.random() * 800) - 400
    z = (Math.random() * 800) - 400

    geometry.vertices.push(new THREE.Vector3(x, y, z))
    const pointCloud = new THREE.Points(geometry, material)
    scene.add(pointCloud)

    renderer.render(scene, camera)
  }
}
</script>
