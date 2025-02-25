'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Earth3d({ scale = 1 }) {
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
      <mesh ref={earthRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={scale}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={scale * 1.05}>
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

// Camera adjustment based on window size
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    // Adjust camera position based on window width
    const updateCamera = () => {
      if (size.width < 768) {
        // Mobile view - move camera closer
        camera.position.z = 4.5;
      } else if (size.width < 1024) {
        // Tablet view
        camera.position.z = 3.5;
      } else {
        // Desktop view
        camera.position.z = 3;
      }
      camera.updateProjectionMatrix();
    };

    updateCamera();
  }, [camera, size]);

  return null;
}

export default function EarthScene() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Function to update scale based on window size
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(0.8); // Smaller scale for mobile
      } else if (width < 1024) {
        setScale(0.9); // Medium scale for tablets
      } else {
        setScale(1); // Full scale for desktop
      }
    };

    // Set initial scale
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ResponsiveCamera />
      <Earth3d scale={scale} />
      <OrbitControls enableDamping dampingFactor={0.05} enableZoom={false} />
    </Canvas>
  );
}
