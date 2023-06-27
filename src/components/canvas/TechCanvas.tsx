import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Floor, IconTile, Wall } from "./canvas-items";
import { TechnologyTile } from "../../models/technology";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { CanvasLoader } from "./CanvasLoader";


export interface TechCanvasProps {
    technologies: TechnologyTile[]
}

export function TechCanvas({ technologies }: TechCanvasProps) {
    return (
        <Canvas
            camera={{ far: 100, fov: 1, near: 1, position: [-25, 20, 25], zoom: Math.min(window.innerWidth/40, 25) }}
            orthographic
            shadows
            className="w-full"
        >
            <Suspense fallback={<CanvasLoader/>}>
                <pointLight position={[0, 25, 0]} intensity={1} castShadow />
                <Physics iterations={15} size={50} gravity={[0, -200, 0]} allowSleep={false}>
                    <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                    {technologies.map((v, i) => {
                        return <IconTile key={i} position={v.position} icon={v.icon} scale={window.innerWidth < 700 ? 1.5 : 1}/>
                    })}
                    <Wall position={[-15, 10, 0]} />
                    <Wall position={[15, 10, 0]} />
                    <Wall position={[0, 10, 15]} rotation={[0, Math.PI / 2, 0]} />
                    <Wall position={[0, 10, -15]} rotation={[0, Math.PI / 2, 0]} />
                    <Wall position={[0,25,0]} rotation={[0,0,Math.PI/2]} />
                </Physics>
                <OrbitControls minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI / 2 - .1} enablePan={false} enableZoom={false}/>
            </Suspense>
            
        </Canvas>
    )
}