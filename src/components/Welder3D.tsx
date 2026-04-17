"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Ultra-smooth I-Beam using highly subdivided Beveled Extrusion concepts or smooth rounded edges
function IBeam({ length }: { length: number }) {
  return (
    <group castShadow receiveShadow>
       {/* Top Flange */}
       <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
         {/* Using high segment Box for slight ambient subdivision interpolation */}
         <boxGeometry args={[0.8, 0.1, length, 8, 2, 32]} />
         <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
       </mesh>
       {/* Mid Web */}
       <mesh position={[0, 0, 0]} castShadow receiveShadow>
         <boxGeometry args={[0.1, 0.8, length, 2, 8, 32]} />
         <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
       </mesh>
       <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
         <boxGeometry args={[0.8, 0.1, length, 8, 2, 32]} />
         <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
       </mesh>
    </group>
  );
}

function HighPolyWelderCharacter() {
  const rightArmRef = useRef<THREE.Group>(null);
  const sparkLightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Complex, multi-axis rhythmic welding translation with smooth organic timing
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(t * 12) * 0.1 + 0.15;
      rightArmRef.current.rotation.x = Math.cos(t * 9) * 0.05 + 0.2;
      rightArmRef.current.rotation.y = Math.sin(t * 4) * 0.05;
    }
    // High frequency plasma light variation
    if (sparkLightRef.current) {
       sparkLightRef.current.intensity = 8 + Math.random() * 6;
       sparkLightRef.current.distance = 12 + Math.random() * 5;
    }
  });

  return (
    <group position={[0, 0.2, 0]}>
      {/* 
        High Poly Torso
        Capsule creates a perfectly smooth organic chest/stomach shape
      */}
      <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 0.6, 32, 64]} />
        <meshStandardMaterial color="#ea580c" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* High-vis Torso Straps perfectly hugging the capsule body */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.51, 0.51, 0.15, 64]} />
        <meshStandardMaterial color="#facc15" roughness={0.3} emissive="#facc15" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.51, 0.51, 0.15, 64]} />
        <meshStandardMaterial color="#facc15" roughness={0.3} emissive="#facc15" emissiveIntensity={0.3} />
      </mesh>

      {/* Glossy Smooth Utility Belt */}
      <group position={[0, 0.8, 0]}>
         <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.49, 0.49, 0.2, 64]} />
            <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
         </mesh>
         <mesh position={[0.45, 0, 0]} castShadow>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.9} />
         </mesh>
         <mesh position={[-0.45, 0, 0.15]} castShadow>
            <capsuleGeometry args={[0.1, 0.15, 16, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.9} />
         </mesh>
      </group>

      {/* Highly Detailed Spherical Welding Hood */}
      <group position={[0, 2.4, 0]}>
         {/* Organic Spherical Cranium */}
         <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.42, 64, 64]} />
            <meshStandardMaterial color="#ea580c" roughness={0.4} />
         </mesh>
         
         {/* Robotic Curving Shield Guard seamlessly wrapping the face */}
         <mesh position={[0.0, 0, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
            {/* Parameters: radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength */}
            <cylinderGeometry args={[0.46, 0.46, 0.8, 64, 1, false, -Math.PI/2.5, Math.PI/1.25]} />
            <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.2} />
         </mesh>
         
         {/* Aerodynamic Chin Guard extending forward */}
         <mesh position={[0.4, -0.3, 0]} rotation={[0, 0, -Math.PI/4]} castShadow receiveShadow>
            <capsuleGeometry args={[0.15, 0.4, 32, 32]} />
            <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.2} />
         </mesh>
         
         {/* Glossy pitch-black curved glass viewport */}
         <mesh position={[0.0, 0.05, 0]} castShadow>
            <cylinderGeometry args={[0.48, 0.48, 0.25, 64, 1, false, -Math.PI/6, Math.PI/3]} />
            <meshStandardMaterial color="#000000" roughness={0.0} metalness={1.0} />
         </mesh>
      </group>

      {/* Smooth Organic Legs with heavily modeled steel toe boots */}
      <group position={[-0.25, 0.3, 0]}>
         <mesh castShadow receiveShadow>
           <capsuleGeometry args={[0.15, 0.6, 32, 32]} />
           <meshStandardMaterial color="#334155" roughness={0.7} />
         </mesh>
         {/* Smooth bulbous Kneepad */}
         <mesh position={[0.15, 0.05, 0]} castShadow>
           <sphereGeometry args={[0.12, 32, 32]} />
           <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
         </mesh>
         {/* Rounded organic boot */}
         <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
           <capsuleGeometry args={[0.18, 0.2, 32, 32]} rotation={[0, 0, Math.PI/2]} />
           <meshStandardMaterial color="#1e293b" roughness={0.5} />
         </mesh>
         <mesh position={[0.15, -0.42, 0]} castShadow receiveShadow>
           <sphereGeometry args={[0.18, 32, 32]} />
           <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
         </mesh>
      </group>

      <group position={[0.25, 0.3, 0]}>
         <mesh castShadow receiveShadow>
           <capsuleGeometry args={[0.15, 0.6, 32, 32]} />
           <meshStandardMaterial color="#334155" roughness={0.7} />
         </mesh>
         <mesh position={[0.15, 0.05, 0]} castShadow>
           <sphereGeometry args={[0.12, 32, 32]} />
           <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
         </mesh>
         <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
           <capsuleGeometry args={[0.18, 0.2, 32, 32]} rotation={[0, 0, Math.PI/2]} />
           <meshStandardMaterial color="#1e293b" roughness={0.5} />
         </mesh>
         <mesh position={[0.15, -0.42, 0]} castShadow receiveShadow>
           <sphereGeometry args={[0.18, 32, 32]} />
           <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.8} />
         </mesh>
      </group>

      {/* Left Arm Resting (Smooth curved capsule mapping) */}
      <group position={[-0.6, 1.8, 0]} rotation={[0, 0, -0.2]}>
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <capsuleGeometry args={[0.14, 0.7, 32, 32]} />
          <meshStandardMaterial color="#ea580c" />
        </mesh>
        {/* Spherical Leather Glove */}
        <mesh position={[0, -1.0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.22, 64, 64]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Arm WELDING (Kinematic Smooth Arm & Torch) */}
      <group position={[0.65, 1.9, 0]} ref={rightArmRef}>
        {/* Upper Arm Capsule */}
        <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0.1]} castShadow receiveShadow>
          <capsuleGeometry args={[0.14, 0.6, 32, 32]} />
          <meshStandardMaterial color="#ea580c" />
        </mesh>
        
        {/* Forearm extended organically via capsule */}
        <mesh position={[0.4, -0.7, 0]} rotation={[0, 0, -Math.PI/2.5]} castShadow receiveShadow>
          <capsuleGeometry args={[0.13, 0.7, 32, 32]} />
          <meshStandardMaterial color="#ea580c" />
        </mesh>

        {/* Thick Highly Subdivided Glove */}
        <mesh position={[0.9, -0.9, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
        
        {/* Sleek Cylindrical Torch Handle */}
        <mesh position={[1.1, -1.1, 0]} rotation={[0, 0, -Math.PI/6]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 32]} />
          <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.8} />
        </mesh>
        {/* Fine metal nozzle tip tapering organically */}
        <mesh position={[1.35, -1.25, 0]} rotation={[0, 0, -Math.PI/4]} castShadow>
          <cylinderGeometry args={[0.01, 0.04, 0.4, 32]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Ultra-hot plasma ignition point physically modeled */}
        <mesh position={[1.5, -1.4, 0]} rotation={[0, 0, 0]}>
           <sphereGeometry args={[0.06, 32, 32]} />
           <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={10} />
        </mesh>

        {/* Global physical light casting from the plasma core */}
        <pointLight ref={sparkLightRef} position={[1.6, -1.5, 0]} color="#fbbf24" distance={15} intensity={12} />
      </group>

      {/* Industrial Gas Cylinders - Rendered with ultra-high subdivisions to create photoreal curves */}
      <group position={[-1.6, 1.2, 1.2]}>
         <mesh position={[0, 0, 0]} castShadow receiveShadow>
           <cylinderGeometry args={[0.3, 0.3, 2.4, 64]} />
           <meshStandardMaterial color="#16a34a" metalness={0.5} roughness={0.3} />
         </mesh>
         <mesh position={[0, 1.2, 0]} castShadow>
           <sphereGeometry args={[0.3, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
           <meshStandardMaterial color="#16a34a" metalness={0.5} roughness={0.3} />
         </mesh>
         <mesh position={[0, 1.35, 0]} castShadow>
           <cylinderGeometry args={[0.05, 0.08, 0.15, 32]} />
           <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.1} />
         </mesh>
         {/* Circular gauge face rather than boxy gauge */}
         <mesh position={[0.08, 1.35, 0]} castShadow>
           <cylinderGeometry args={[0.08, 0.08, 0.06, 32]} rotation={[0, 0, Math.PI/2]} />
           <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.7} />
         </mesh>
      </group>

      <group position={[-1.1, 1.0, 1.8]}>
         <mesh position={[0, 0, 0]} castShadow receiveShadow>
           <cylinderGeometry args={[0.25, 0.25, 2.0, 64]} />
           <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.2} />
         </mesh>
         <mesh position={[0, 1.0, 0]} castShadow>
           <sphereGeometry args={[0.25, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
           <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.2} />
         </mesh>
         <mesh position={[0, 1.15, 0]} castShadow>
           <cylinderGeometry args={[0.05, 0.07, 0.15, 32]} />
           <meshStandardMaterial color="#eab308" metalness={0.9} roughness={0.1} />
         </mesh>
      </group>

      {/* Master Steel Workplace Frame */}
      <group position={[3.0, 0.5, 0]}>
         <group position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]}>
           <IBeam length={8} />
         </group>
         <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
           <IBeam length={4} />
         </group>
         
         {/* Smooth rounded vertical pillar being attached */}
         <group position={[-1.2, 1.0, 0]}>
            <mesh castShadow receiveShadow>
               <cylinderGeometry args={[0.5, 0.5, 2.0, 64]} />
               <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* The intensely glowing, high-poly molten pool intersection point */}
            <mesh position={[0, 0.8, 0]}>
               <sphereGeometry args={[0.52, 64, 64]} scale={[1, 0.2, 1]} />
               <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={3} transparent opacity={0.9} />
            </mesh>
         </group>
      </group>
    </group>
  );
}

// Upgraded High-Poly Spherical Spark System mimicking realistic hot plasma droplets
function Sparks() {
   const group = useRef<THREE.Group>(null);
   const sparkRefs = useRef<THREE.Mesh[]>([]);

   useFrame(() => {
      sparkRefs.current.forEach((mesh, index) => {
         // Reset spark globally inside scene tracking bounds
         if (!mesh.userData.spawned || mesh.position.y <= -0.1 || mesh.userData.life <= 0) {
            // Spawn strictly at new exact plasma core
            mesh.position.set(2.2, 1.2, 0); 
            mesh.userData.spawned = true;
            mesh.userData.vx = (Math.random() - 0.5) * 10;
            mesh.userData.vy = Math.random() * 8 + 4;
            mesh.userData.vz = (Math.random() - 0.5) * 10;
            mesh.userData.life = 1.0; 
            
            // Randomly assigning intense star-like colors to perfectly round spheres
            mesh.material = new THREE.MeshStandardMaterial({
               color: Math.random() > 0.4 ? "#fef08a" : "#f97316",
               emissive: Math.random() > 0.4 ? "#facc15" : "#ef4444",
               emissiveIntensity: 6 + Math.random() * 4,
               roughness: 0.0,
               metalness: 0.2
            });
         }

         const dt = 0.012; 
         // Advanced projectile motion
         mesh.position.x += mesh.userData.vx * dt;
         mesh.position.y += mesh.userData.vy * dt;
         mesh.position.z += mesh.userData.vz * dt;
         mesh.userData.vy -= 22 * dt; // High gravitational coefficient 
         mesh.userData.life -= dt;

         // Volumetric cooling logic mapping directly to spherical geometry
         const scaleFactor = Math.max(0, mesh.userData.life * 1.8);
         mesh.scale.setScalar(scaleFactor);
      });
   });

   return (
     <group ref={group}>
       {/* Generating 150 independent high-poly spheres computing live shading/lighting! */}
       {Array.from({ length: 150 }).map((_, i) => (
         <mesh key={i} ref={(el) => { if (el) sparkRefs.current[i] = el; }} castShadow>
           <sphereGeometry args={[0.04, 16, 16]} />
           <meshStandardMaterial color="#fef08a" />
         </mesh>
       ))}
     </group>
   );
}

export function Welder3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none transition-opacity duration-1000">
      <Canvas shadows>
        {/* Preserving strictly the Isometric orientation over the organic geometries */}
        <OrthographicCamera 
          makeDefault 
          position={[12, 12, 12]} 
          zoom={90}
          near={-50}
          far={100}
          onUpdate={c => c.lookAt(1, 0, 0)}
        />
        
        <ambientLight intensity={0.15} />
        
        {/* Softened but high-intensity studio rig acting on high poly specular bounces */}
        <directionalLight 
          castShadow 
          position={[12, 25, -8]} 
          intensity={3.0} 
          shadow-mapSize={[4096, 4096]}  // Massive resolution scale for premium organic edge catching
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-bias={-0.0001}
        />
        
        <directionalLight position={[-10, 10, 10]} intensity={0.8} color="#0ea5e9" />
        <directionalLight position={[10, 0, 10]} intensity={0.2} color="#f8fafc" />

        <Environment preset="studio" />
        
        <HighPolyWelderCharacter />
        <Sparks />
        
        <ContactShadows position={[0, -0.05, 0]} opacity={0.6} scale={40} blur={2.0} far={15} />
      </Canvas>
    </div>
  );
}
