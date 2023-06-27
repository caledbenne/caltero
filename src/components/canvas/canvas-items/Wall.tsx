import { BoxProps, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

export function Wall(props: BoxProps) {
    const [ref] = useBox(() => ({type: 'Static', args: [0.1,30,30], ...props}), useRef<Mesh>(null));
    return (
      <mesh ref={ref} visible={false}>
        <boxGeometry args={[0.1,20,30]}/>
      </mesh>
    )
  }