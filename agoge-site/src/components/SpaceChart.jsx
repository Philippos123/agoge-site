import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);








// Skapa en stjärnhimmel
const StarField = () => {
  const starsRef = useRef();

  

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001; // Långsam rotation för dynamik
    }
  });

  const stars = [];
  for (let i = 0; i < 1000; i++) {
    stars.push(new THREE.Vector3(
      Math.random() * 400 - 200,
      Math.random() * 400 - 200,
      Math.random() * 400 - 200
    ));
  }

  return (
    <points ref={starsRef} renderOrder={0}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={stars.length} array={new Float32Array(stars.flatMap(v => [v.x, v.y, v.z]))} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.2} color={0x00FFFF} />
    </points>
  );
};

// Skapa en sol (punktljus)
const Sun = () => {
  const sunRef = useRef();

  return (
    <pointLight
      ref={sunRef}
      position={[10, 10, 10]}   
      intensity={2}              
      color={0xFFFF00}           
      distance={50}              
      castShadow
    />
  );
};

// Skapa en förbättrad planet
const DataPlanet = () => {
  const sphereRef = useRef();
  

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, -5, 0]} renderOrder={1}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#00FFFF"
        emissive="#00FFFF"  
        emissiveIntensity={0.4} 
      />
    </mesh>
  );
};

// Skapa den andra planeten
const DataPlanet1 = () => {
  const sphereRef = useRef();

  

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={sphereRef} position={[10, 0, 0]} renderOrder={1}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshStandardMaterial
        color="#00FFFF"
        emissive="#00FFFF"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

// Skapa den tredje planeten
const DataPlanet2 = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-15, 2, 0]} renderOrder={1}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        color="#00FFFF"
        emissive="#00FFFF"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

// Skapa datapunkter (nätverk) på planetens yta
const DataNetwork = ({ planetPosition }) => {
  const pointsRef = useRef();

  const numPoints = 1000;
  const radius = 2.5; 
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * 2 * Math.PI;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push(new THREE.Vector3(x + planetPosition[0], y + planetPosition[1], z + planetPosition[2]));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.PointsMaterial({
    size: 0.02, 
    color: 0x00FFFF, 
  });

  return <points ref={pointsRef} geometry={geometry} material={material} renderOrder={2} />;
};

// Skapa datapunkter för den andra planeten
const DataNetwork1 = ({ planetPosition }) => {
  const pointsRef = useRef();

  const numPoints = 1000;
  const radius = 1.25; 
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(2 * Math.random() - 1); 
    const theta = Math.random() * 2 * Math.PI;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push(new THREE.Vector3(x + planetPosition[0], y + planetPosition[1], z + planetPosition[2]));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.PointsMaterial({
    size: 0.05, 
    color: 0x00FFFF,
  });

  return <points ref={pointsRef} geometry={geometry} material={material} renderOrder={2} />;
};

// Skapa datapunkter för den tredje planeten
const DataNetwork2 = ({ planetPosition }) => {
  const pointsRef = useRef();

  const numPoints = 800;
  const radius = 1.75; 
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * 2 * Math.PI;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push(new THREE.Vector3(x + planetPosition[0], y + planetPosition[1], z + planetPosition[2]));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.PointsMaterial({
    size: 0.05, 
    color: 0x00FFFF,
  });

  return <points ref={pointsRef} geometry={geometry} material={material} renderOrder={2} />;
};

// Skapa linjer mellan de tre planeterna som representerar datatransmission
const DataLines = () => {
  const lineRef = useRef();
  const timeRef = useRef(0);  // För att hantera tiden för pulsationen

  const planetPositions = [
    [0, -5, 0],
    [10, 0, 0],
    [-15, 2, 0],     
  ];

  const lines = [];

  for (let i = 0; i < planetPositions.length; i++) {
    for (let j = i + 1; j < planetPositions.length; j++) {
      const start = new THREE.Vector3(...planetPositions[i]);
      const end = new THREE.Vector3(...planetPositions[j]);

      lines.push(start, end);
    }
  }

  // Animera linjernas "pulsering"
  useFrame(() => {
    if (lineRef.current) {
      timeRef.current += 0.05;
      const pulseFactor = Math.sin(timeRef.current) * 0.5 + 0.5; // Pulsar mellan 0 och 1

      // Uppdatera linjernas material baserat på puls
      lineRef.current.material.opacity = pulseFactor;
      lineRef.current.material.linewidth = pulseFactor * 3; // Justera bredden för pulsering
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(lines);
  const material = new THREE.LineBasicMaterial({
    color: 0x00FFFF,
    opacity: 1, // Initial opacity, kommer att justeras dynamiskt
    transparent: true, // Gör linjerna genomskinliga för att kunna pulsera
    linewidth: 1.5,
  });

  return <lineSegments ref={lineRef} geometry={geometry} material={material} />;
};
const DataLines1 = () => {
  const lineRef = useRef();
  const timeRef = useRef(0);  // För att hantera tiden för pulsationen

  const planetPositions = [
    [0, -5, 0],       
    [10, 0, 0],      
        
  ];

  const lines = [];

  for (let i = 0; i < planetPositions.length; i++) {
    for (let j = i + 1; j < planetPositions.length; j++) {
      const start = new THREE.Vector3(...planetPositions[i]);
      const end = new THREE.Vector3(...planetPositions[j]);

      lines.push(start, end);
    }
  }

  // Animera linjernas "pulsering"
  useFrame(() => {
    if (lineRef.current) {
      timeRef.current += 0.05;
      const pulseFactor = Math.sin(timeRef.current) * 0.5 + 0.5; // Pulsar mellan 0 och 1

      // Uppdatera linjernas material baserat på puls
      lineRef.current.material.opacity = pulseFactor;
      lineRef.current.material.linewidth = pulseFactor * 3; // Justera bredden för pulsering
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(lines);
  const material = new THREE.LineBasicMaterial({
    color: 0x00FFFF,
    opacity: 1, // Initial opacity, kommer att justeras dynamiskt
    transparent: true, // Gör linjerna genomskinliga för att kunna pulsera
    linewidth: 1.5,
  });

  return <lineSegments ref={lineRef} geometry={geometry} material={material} />;
};

const DataLines2 = () => {
  const lineRef = useRef();
  const timeRef = useRef(0);  // För att hantera tiden för pulsationen

  const planetPositions = [
    [0, -5, 0],       
    [-15, 2, 0],     
        
  ];

  const lines = [];

  for (let i = 0; i < planetPositions.length; i++) {
    for (let j = i + 1; j < planetPositions.length; j++) {
      const start = new THREE.Vector3(...planetPositions[i]);
      const end = new THREE.Vector3(...planetPositions[j]);

      lines.push(start, end);
    }
  }

  // Animera linjernas "pulsering"
  useFrame(() => {
    if (lineRef.current) {
      timeRef.current += 0.05;
      const pulseFactor = Math.sin(timeRef.current) * 0.5 + 0.5; // Pulsar mellan 0 och 1

      // Uppdatera linjernas material baserat på puls
      lineRef.current.material.opacity = pulseFactor;
      lineRef.current.material.linewidth = pulseFactor * 3; // Justera bredden för pulsering
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(lines);
  const material = new THREE.LineBasicMaterial({
    color: 0x00FFFF,
    opacity: 1, // Initial opacity, kommer att justeras dynamiskt
    transparent: true, // Gör linjerna genomskinliga för att kunna pulsera
    linewidth: 1.5,
  });

  return <lineSegments ref={lineRef} geometry={geometry} material={material} />;
};

export default function PlanetOfData() {
  return (
    <Canvas style={{ width: '100%', height: '40vh' }} camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      
      <StarField />
      <Sun />
      <DataPlanet />
      <DataPlanet1 />
      <DataPlanet2 />
      <DataNetwork planetPosition={[0, -5, 0]} />
      <DataNetwork1 planetPosition={[10, 0, 0]} />
      <DataNetwork2 planetPosition={[-15, 2, 0]} />
      <DataLines />
      <DataLines1 />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
