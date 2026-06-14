import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'

function ParticleField() {
  const count = 220
  const meshRef = useRef<THREE.Points>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const colorOptions = [
      new THREE.Color('#00f5ff'),
      new THREE.Color('#ff0080'),
      new THREE.Color('#8b5cf6'),
    ]

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      vel[i * 3] = (Math.random() - 0.5) * 0.004
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.004
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002

      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }

    return [pos, vel, col]
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useFrame((_, delta) => {
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array
    const speed = delta * 0.3

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3] + mouse.current.x * 0.003
      pos[i * 3 + 1] += velocities[i * 3 + 1] + mouse.current.y * 0.003

      if (Math.abs(pos[i * 3]) > 15) {
        pos[i * 3] = -pos[i * 3] * 0.9
        velocities[i * 3] *= -1
      }

      if (Math.abs(pos[i * 3 + 1]) > 15) {
        pos[i * 3 + 1] = -pos[i * 3 + 1] * 0.9
        velocities[i * 3 + 1] *= -1
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y += speed * 0.01
    meshRef.current.rotation.x += speed * 0.005
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

function FloatingOrbs() {
  return (
    <>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={1.4}>
        <mesh position={[-5, 3, -3]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.09} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={1.6}>
        <mesh position={[4.5, -2, -2]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.07} />
        </mesh>
      </Float>
      <Float speed={1.0} rotationIntensity={0.1} floatIntensity={1.2}>
        <mesh position={[-3, -3, -3]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#ff0080" transparent opacity={0.05} />
        </mesh>
      </Float>
    </>
  )
}

function Scene() {
  return (
    <>
      <ParticleField />
      <FloatingOrbs />
    </>
  )
}

function useIsHeavyAnimationAllowed() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const isWideEnough = window.innerWidth >= 768
    setAllowed(isDesktopPointer && isWideEnough)
  }, [])

  return allowed
}

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion()
  const heavyAnimationAllowed = useIsHeavyAnimationAllowed()

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f5ff]/[0.02] via-transparent to-[#8b5cf6]/[0.02]" />
      {!reduceMotion && heavyAnimationAllowed && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.25]}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  )
}
