import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const colors = [
  "#3949AB", // Neon grön
  "#600AFF", // Turkos neon
  "#6171FE", // Rosa neon
  "#FFAB00", // Mjuk orange neon
  "#8A2BE2", // Blålila neon
  "#FF007F", // Rödrosa neon
  "#00FFC6", // Mintgrön neon
];

function Bar({ position, height, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.5, height, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Chart() {
  const chartRef = useRef();

  useFrame(() => {
    chartRef.current.rotation.y += 0.00; // Snurrande animation
  });

  const data = [1, 2, 1.5, 3, 2.5];

  return (
    <group ref={chartRef}>
      {data.map((value, index) => (
        <Bar
          key={index}
          position={[index - 3, value / 2, 0]}
          height={value}
          color={colors[index % colors.length]}
        />
      ))}
    </group>
  );
}

export default function BarChart3D() {
  const [isMobile, setIsMobile] = useState(false);

  // Kollar om skärmstorleken är mindre än 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="features-section hide-on-mobile"style={{ width: "100%", height: isMobile ? "300px" : "500px", overflow: "hidden" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} />
        <Chart />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
