import { Suspense, useEffect, useState, useRef, useCallback, createRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Physics, usePlane, useSphere, useCylinder, usePointToPointConstraint, useHingeConstraint } from '@react-three/cannon';
import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { css } from '../../assets';
import { useDragConstraint, rotate, generatePoints } from '../../utils/three-utils';
import { technologies } from '../../constants';
const cursor = createRef()

 const Hex = (props) => {

  const [ref] = useCylinder(() => ({mass: 1, args: [2,2,1,6], position: props.position }), useRef(null));

  const bind = useDragConstraint(cursor, ref);
  const colorMap = useLoader(TextureLoader, props.icon);
  const material = useMemo(() => {
    const material = new MeshStandardMaterial({ map: colorMap, color: 'grey'});
    return material;
  }, [colorMap]);
  const materials = [
    new MeshStandardMaterial({color: 'black'}),
    material,
    material
  ];
  return (
    <mesh ref={ref} {...bind} castShadow receiveShadow material={materials}>
      <cylinderGeometry attach="geometry" args={[2,2,1,6]}/>
    </mesh>
  )
}

const Hex2 = (props) => {
  const [ref] = use
}

const Cursor = () => {
  const [, api] = useSphere(() => ({ args: [0], position: [0, 0, 10000], type: 'Dynamic' }), cursor)

  useFrame(({ mouse }) => {
    const curScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const [x,z] = rotate(0, 0, (mouse.x * window.innerWidth)*30/window.innerWidth, -((mouse.y+.1) * window.innerHeight - (curScroll))*30/window.innerHeight, -45);
    api.position.set(Math.min(Math.max(x,-15),15) , -3, Math.min(Math.max(z,-15),15));
  })
  return (
    <></>
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

  const randomDropPoints = generatePoints(technologies.length);
  return (
    <Canvas
    camera={{ far: 100, near: 1, position: [-25, 20, 25], zoom: 25 }}
    orthographic
    shadows
  >
    {/* <color attach="background" args={['#171720']} /> */}
    {/* <fog attach="fog" args={['#171720', 20, 70]} /> */}
    <pointLight position={[0, 25, 0]} intensity={3.2} castShadow />
    <Physics iterations={15} size={50} gravity={[0, -200, 0]} allowSleep={false}>
      <Cursor/>
      <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      {technologies.map((v,i) => {
        return <Hex key={i} position={randomDropPoints[i]} icon={v.icon}/>
      })}
    </Physics>
  </Canvas>
  )
}

export default HexCanvas