import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function GlobeParticles() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();
  
  const { mouse, viewport } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Generate globe points and connections
  const { positions, linePositions } = useMemo(() => {
    const points = [];
    const vectors = [];
    
    // Generate points in a thick spherical shell
    let count = 0;
    while (count < 800) {
      let x = (Math.random() - 0.5) * 4;
      let y = (Math.random() - 0.5) * 4;
      let z = (Math.random() - 0.5) * 4;

      let dist = Math.sqrt(x*x + y*y + z*z);

      // Shell between radius 1.2 and 1.8
      if (dist > 1.2 && dist < 1.8) {
        vectors.push(new THREE.Vector3(x, y, z));
        points.push(x, y, z);
        count++;
      }
    }

    // Connect close points to form the network
    const lines = [];
    for (let i = 0; i < vectors.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < vectors.length; j++) {
        const d = vectors[i].distanceTo(vectors[j]);
        if (d < 0.45 && connections < 4) { // Connect up to 4 nearby points
          lines.push(
            vectors[i].x, vectors[i].y, vectors[i].z,
            vectors[j].x, vectors[j].y, vectors[j].z
          );
          connections++;
        }
      }
    }

    return { 
      positions: new Float32Array(points),
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

      // Base slow rotation (spin around all axes slowly)
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.z += 0.001;

      // Breathing animation (scaling)
      const scale = 1 + Math.sin(time * 1.5) * 0.02;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* Central Glowing Energy Point */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#4F6F52" transparent opacity={0.15} />
      </Sphere>
      <Sphere args={[0.25, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#4F6F52" transparent opacity={0.3} />
      </Sphere>

      {/* Globe Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#4F6F52" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.9} />
      </Points>

      {/* Globe Neural Lines */}
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

    </group>
  );
}

export default function ThreeDBrain() {
  return (
    <div className="w-full h-full cursor-pointer relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <GlobeParticles />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
