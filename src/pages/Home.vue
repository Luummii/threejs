<template>
  <div class="info">Description</div>
</template>

<script>
import * as THREE from 'three' // другое подключение не работает см. док-ю https://threejs.org/docs/#manual/introduction/Import-via-modules

export default {
  mounted() {       
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 20)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // cube
    let geometry = new THREE.BoxGeometry(1, 1, 1)
    let material = new THREE.MeshBasicMaterial({ color: 'blue' })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // line
    material = new THREE.LineBasicMaterial({ color: 0x0000ff })
    geometry = new THREE.Geometry()
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
    geometry.vertices.push(new THREE.Vector3(0, 10, 0))
    geometry.vertices.push(new THREE.Vector3(10, 0, 0))
    const line = new THREE.Line(geometry, material)
    scene.add(line)

    // resize    
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize(event) {
      camera.aspect = window.innerWidth / window.innerHeight              
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = () => {      
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()
  }
}
</script>

<style lang="stylus">
.info 
	position absolute
	top 10px
	width 100%
	text-align center
	z-index 100
	display block
</style>