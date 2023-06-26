import React, { useRef, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { useCylinder } from '@react-three/cannon';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';

function Tile({ icon, position }) {
  const args = window.innerWidth < 1000 ? [3,3,1.5,6] : [2,2,1,6];
  const [ref,api] = useCylinder(() => ({mass: 1, args: args, position: position }), useRef(null));

  const colorMap = useLoader(TextureLoader, icon);
  const material = useMemo(() => {
    const material = new MeshStandardMaterial({ map: colorMap, color: 'grey'});
    return material;
  }, [colorMap]);
  const materials = [
    new MeshStandardMaterial({color: 'black'}),
    material,
    material
  ];

  const handleClick= () => {
    const randomDirection = [
        Math.random() * 5 *(Math.random() > 0.5 ? 1 : -1),
        Math.random() * 5 + 3,
        Math.random() * 5 *(Math.random() > 0.5 ? 1 : -1),
    ];
    api.applyImpulse(randomDirection.map(x => x*10), [0,0,0]);
  }
  return (
    <mesh ref={ref} castShadow material={materials} onClick={handleClick}>
        <cylinderGeometry attach="geometry" args={args}/>
    </mesh>
  );
}

export default Tile;
