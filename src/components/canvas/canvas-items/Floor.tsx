import { PlaneProps, usePlane } from "@react-three/cannon"
import { useRef } from "react"
import { Mesh } from "three"

export function Floor(props: PlaneProps) {
    const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null))
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#272730" />
      </mesh>
    )
  }