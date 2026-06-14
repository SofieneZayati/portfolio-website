import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const count = 350
  const meshRef = useRef<THREE.Points>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    const colorOptions = [
      new THREE.Color('#00f5ff'), // Cyan
      new THREE.Color('#ff0080'), // Pink
      new THREE.Color('#8b5cf6')  // Purple
    ]

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      vel[i * 3] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005
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
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useFrame((_, delta) => {
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array
    const speed = delta * 0.3

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3] + mouse.current.x * 0.005
      pos[i * 3 + 1] += velocities[i * 3 + 1] + mouse.current.y * 0.005

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
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingOrbs() {
  return (
    <>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={1.8}>
        <mesh position={[-5, 3, -3]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.1} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={2.2}>
        <mesh position={[4.5, -2, -2]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
        </mesh>
      </Float>
      <Float speed={1.0} rotationIntensity={0.15} floatIntensity={1.5}>
        <mesh position={[2, 4, -4]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.07} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={2.0}>
        <mesh position={[-3, -3, -3]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#ff0080" transparent opacity={0.06} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={1.2}>
        <mesh position={[0, 0, -5]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.05} />
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

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f5ff]/[0.02] via-transparent to-[#8b5cf6]/[0.02]" />
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
