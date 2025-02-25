'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Earth3d() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Load textures
  const [earthTexture, cloudTexture] = useLoader(THREE.TextureLoader, [
    '/static/earth_daymap.png',
    '/static/earth_clouds.png',
  ]);

  // Rotation animation
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={1.05}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.2, 0.7, 1.0, 1.0) * intensity;
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent={true}
        />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
    </>
  );
}

export default function EarthScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <Earth3d />
      <OrbitControls enableDamping dampingFactor={0.05} enableZoom={false} />
    </Canvas>
  );
}
