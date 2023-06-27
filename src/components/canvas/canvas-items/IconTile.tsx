import { CylinderArgs, Triplet, useCylinder } from "@react-three/cannon";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, MeshStandardMaterial, TextureLoader } from "three";

export interface IconTileProps {
    icon: string,
    position: Triplet,
    scale?: number,
    onClick?: () => void
}


export function IconTile({icon, position, scale = 1, onClick}: IconTileProps) {
    const args: CylinderArgs = [2*scale, 2*scale, 1*scale, 6];
    const [ref,api] = useCylinder(() => ({mass: 1, args: args, position: position}), useRef<Mesh>(null));

    const colorMap = useLoader(TextureLoader, icon);
    const material = useMemo(() => {
        const material = new MeshStandardMaterial({ map: colorMap});
        return material;
      }, [colorMap]);
    const materials = [
        new MeshStandardMaterial({color: 'black'}),
        material,
        material
    ];

    const handleClick= () => {
        const randomDirection: Triplet = [
            Math.random() * 70 *(Math.random() > 0.5 ? 1 : -1),
            (Math.random() * 5 + 3)*12,
            Math.random() * 70 *(Math.random() > 0.5 ? 1 : -1),
        ];
        api.applyImpulse(randomDirection, [0,0,0]);
        if (onClick) onClick();
    }

    return (
        <mesh ref={ref} castShadow material={materials} onClick={handleClick}>
            <cylinderGeometry attach="geometry" args={args}/>
        </mesh>
    )
}