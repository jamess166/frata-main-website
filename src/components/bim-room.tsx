"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export function BimRoom() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xecf0f1)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(5, 5, 5)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    mountRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.screenSpacePanning = false
    controls.minDistance = 3
    controls.maxDistance = 20
    controls.maxPolarAngle = Math.PI / 2

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)
    
    // Materials
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.2, roughness: 0.8 })
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.9 })
    const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.6 })
    const monitorScreenMaterial = new THREE.MeshStandardMaterial({ color: 0x00308F, emissive: 0x00308F, emissiveIntensity: 0.5 })
    const monitorFrameMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 })

    // Room
    const floor = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 10), floorMaterial)
    floor.receiveShadow = true
    scene.add(floor)

    const wall1 = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 0.2), wallMaterial)
    wall1.position.set(0, 2.5, -5)
    wall1.receiveShadow = true
    scene.add(wall1)
    
    const wall2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 5, 10), wallMaterial)
    wall2.position.set(-5, 2.5, 0)
    wall2.receiveShadow = true
    scene.add(wall2)

    // Desk
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(4, 0.2, 2), deskMaterial)
    deskTop.position.set(0, 1.5, -3)
    deskTop.castShadow = true
    scene.add(deskTop)
    
    const deskLeg1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.4, 2), deskMaterial)
    deskLeg1.position.set(-1.9, 0.75, -3)
    deskLeg1.castShadow = true
    scene.add(deskLeg1)

    const deskLeg2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.4, 2), deskMaterial)
    deskLeg2.position.set(1.9, 0.75, -3)
    deskLeg2.castShadow = true
    scene.add(deskLeg2)

    // Monitor
    const monitorGroup = new THREE.Group()
    scene.add(monitorGroup)
    monitorGroup.position.set(0, 1.6, -3.5)

    const monitorScreen = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 0.1), monitorScreenMaterial)
    monitorScreen.position.y = 0.7
    monitorGroup.add(monitorScreen)

    const monitorFrame = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.1, 0.15), monitorFrameMaterial)
    monitorFrame.position.y = 0.7
    monitorFrame.position.z = -0.05
    monitorFrame.castShadow = true
    monitorGroup.add(monitorFrame)
    
    const monitorStand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), monitorFrameMaterial)
    monitorStand.position.y = 0.15
    monitorGroup.add(monitorStand)

    const monitorBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.5), monitorFrameMaterial)
    monitorGroup.add(monitorBase)

    // Chair
    const chairGroup = new THREE.Group()
    scene.add(chairGroup)
    chairGroup.position.set(0, 0, -1)

    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 1), chairMaterial)
    chairSeat.position.y = 1
    chairSeat.castShadow = true
    chairGroup.add(chairSeat)

    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.2), chairMaterial)
    chairBack.position.set(0, 1.9, 0.4)
    chairBack.castShadow = true
    chairGroup.add(chairBack)
    
    const chairBase = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.1), chairMaterial)
    chairBase.position.y = 0.4
    chairGroup.add(chairBase)

    // Handle Resize
    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        )
      }
    }
    window.addEventListener("resize", handleResize)

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
