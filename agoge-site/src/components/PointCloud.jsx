// ../components/PointCloud.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { PLYLoader } from 'three-stdlib';
import * as THREE from 'three';

function PointCloud({ url }) {
  const [geometry, setGeometry] = useState(null);
  const points = useRef();
  const { scene, camera } = useThree();
  const pointSize = 0.1;
  const useVertexColors = false;
  const pointColor = 0xff00ff;

  useEffect(() => {
    const loader = new PLYLoader();
    loader.load(
      url,
      (geom) => {
        console.log("PLY geometry loaded:", geom);
        geom.computeBoundingSphere();
        setGeometry(geom);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('An error happened during PLY loading', error);
      }
    );
  }, [url]);

  useEffect(() => {
    if (geometry) {
      const material = new THREE.PointsMaterial({
        size: pointSize,
        vertexColors: useVertexColors,
        color: pointColor,
      });
      points.current = new THREE.Points(geometry, material);

      if (geometry.boundingSphere) {
        const center = geometry.boundingSphere.center;
        const radius = geometry.boundingSphere.radius;
        camera.position.set(center.x, center.y, center.z + radius * 2);
        camera.lookAt(center);
      }

      scene.add(points.current);
    }
    return () => {
      if (points.current) {
        scene.remove(points.current);
      };
    };
  }, [geometry, scene, camera, pointSize, useVertexColors, pointColor]);

  return null;
}

export default PointCloud;