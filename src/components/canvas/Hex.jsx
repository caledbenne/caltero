import { useRef, createRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { Tile } from './canvas-items';
import { rotate } from '../../utils/three-utils';
import { technologies } from '../../constants';
import { OrbitControls } from '@react-three/drei';
// const cursor = createRef()






const Wall = (props) => {
  const [ref] = useBox(() => ({type: 'Static', args: [0.1,30,30], ...props}), useRef(null));
  return (
    <mesh ref={ref} visible={false}>
      <boxGeometry args={[0.1,20,30]}/>
    </mesh>
  )
}

const Plane = (props) => {
  const [ref] = usePlane(() => ({ ...props }), useRef(null))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#171720" />
    </mesh>
  )
}
const HexCanvas = () => {

  const [isDragging, setIsDragging] = useState(false);
  //const randomDropPoints = generatePoints(technologies.length);
  let zoomFactor = 25;
  if (window.innerWidth < 500) {zoomFactor=10}
  else if (window.innerWidth < 850) {zoomFactor=20}
  else if (window.innerWidth > 1500) {zoomFactor=30}
  return (
    <Canvas
      camera={{ far: 100, near: 1, position: [-25, 20, 25], zoom: zoomFactor }}
      orthographic
      shadows
    >
      {/* <color attach="background" args={['#171720']} /> */}
      {/* <fog attach="fog" args={['#171720', 20, 70]} /> */}
      <pointLight position={[0, 25, 0]} intensity={3.2} castShadow />
      <Physics iterations={15} size={50} gravity={[0, -200, 0]}  allowSleep={false}>
        <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        {technologies.map((v, i) => {
          return <Tile key={i} position={v.start} icon={v.icon} />
        })}
        <Wall position={[-15,5,0]}/>
        <Wall position={[15,5,0]}/>
        <Wall position={[0,5,15]} rotation={[0,Math.PI/2,0]}/>
        <Wall position={[0,5,-15]} rotation={[0,Math.PI/2,0]}/>
      </Physics>
      <OrbitControls enabled={!isDragging} minPolarAngle={Math.PI/4} maxPolarAngle={Math.PI/2-.1} enablePan={false} enableZoom={false} />
    </Canvas>
  )
}

export default HexCanvas