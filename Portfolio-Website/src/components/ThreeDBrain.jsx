import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function BrainParticles() {
  const groupRef = useRef();
  const leftPointsRef = useRef();
  const rightPointsRef = useRef();
  const linesRef = useRef();
  
  const { mouse, viewport } = useThree();

  // Target rotation based on mouse
  const targetRotation = useRef({ x: 0, y: 0 });

  // Generate points for two hemispheres
  const { leftPositions, rightPositions, linePositions } = useMemo(() => {
    const left = [];
    const right = [];
    
    // Left Hemisphere (Structured, fewer points for lines)
    const leftPointCount = 400;
    const leftVectors = [];
    for (let i = 0; i < leftPointCount; i++) {
      const r = 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const px = x * 0.8;
      const py = y * 0.6;
      const pz = z * 1;

      if (px < -0.1) {
        leftVectors.push(new THREE.Vector3(px, py, pz));
        left.push(px, py, pz);
      }
    }

    // Connect close points in left hemisphere
    const lines = [];
    for (let i = 0; i < leftVectors.length; i++) {
      for (let j = i + 1; j < leftVectors.length; j++) {
        const dist = leftVectors[i].distanceTo(leftVectors[j]);
        if (dist < 0.35) { // Threshold for connection
          lines.push(
            leftVectors[i].x, leftVectors[i].y, leftVectors[i].z,
            leftVectors[j].x, leftVectors[j].y, leftVectors[j].z
          );
        }
      }
    }

    // Right Hemisphere (Scattered, more points)
    const rightPointCount = 1500;
    for (let i = 0; i < rightPointCount; i++) {
      const r = 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const px = x * 0.8;
      const py = y * 0.6;
      const pz = z * 1;

      if (px > 0.1) {
        // Add random scatter to right side
        right.push(px + (Math.random() - 0.5) * 0.5, py + (Math.random() - 0.5) * 0.5, pz + (Math.random() - 0.5) * 0.5);
      }
    }

    return { 
      leftPositions: new Float32Array(left),
      rightPositions: new Float32Array(right),
      linePositions: new Float32Array(lines)
    };
  }, []);

  useFrame((state) => {
    const time = performance.now() / 1000;
    
    // Mouse reaction
    targetRotation.current.x = (mouse.y * viewport.height) / 100;
    targetRotation.current.y = (mouse.x * viewport.width) / 100;

    if (groupRef.current) {
      // Smooth interpolation for mouse movement
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.02;

      // Base slow rotation
      groupRef.current.rotation.y += 0.002;

      // Breathing animation (scaling)
      const scale = 1 + Math.sin(time * 1.5) * 0.02;
      groupRef.current.scale.set(scale, scale, scale);
    }
    
    // Right hemisphere particle dispersion
    if (rightPointsRef.current) {
      const positions = rightPointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Subtle wiggling motion
        positions[i] += Math.sin(time * 0.5 + i) * 0.0002;
        positions[i+1] += Math.cos(time * 0.5 + i) * 0.0002;
      }
      rightPointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* Central Glowing Energy Point */}
      <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#4F6F52" transparent opacity={0.15} />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#4F6F52" transparent opacity={0.3} />
      </Sphere>

      {/* Left Hemisphere - Structured Nodes */}
      <Points ref={leftPointsRef} positions={leftPositions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#4F6F52" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.9} />
      </Points>

      {/* Left Hemisphere - Neural Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4F6F52" transparent opacity={0.25} />
      </lineSegments>

      {/* Right Hemisphere - Scattered / Raw Data */}
      <Points ref={rightPointsRef} positions={rightPositions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#a1a1aa" size={0.04} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
      </Points>
    </group>
  );
}

export default function ThreeDBrain() {
  return (
    <div className="w-full h-full cursor-pointer relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <BrainParticles />
        <EffectComposer>
          {/* subtle bloom for the neural lines and glowing core */}
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.2} />
        </EffectComposer>
        {/* Disable orbit controls so mouse interaction is entirely custom based on viewport mouse */}
      </Canvas>
    </div>
  );
}
