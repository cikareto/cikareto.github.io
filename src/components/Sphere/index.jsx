//https://threejs.org/docs/#api/en/geometries/SphereGeometry

import React, { useRef } from 'react'

import { Canvas, useThree, useResource } from 'react-three-fiber'
import { OrbitControls } from "drei";

import './style.css'

const Scene = () => {
  return (
    <>
      <mesh visible position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <sphereGeometry attach="geometry" args={[2.5, 5, 4]} />
        <meshStandardMaterial wireframe attach="material" color={0xffffff} transparent opacity={0.6} />
      </mesh>
    </>
  )
}

const Controls = () => {
  const ref = useRef();
  const { gl, camera } = useThree();
  const {object} = useResource()

  const args = [camera, gl.domElement];

  return <OrbitControls ref={object} autoRotate {...{ ref, args }} />;
};

const Light = () => {
  return (
    <> 
      <pointLight position={[10, 10, 20]} color="#2E9AE5" intensity={0.9} />
      <ambientLight color="#2C76FF" intensity={0.8} />
    </>
  )
}


const Sphere = () => {
  return (
    <Canvas className="canvas-sphere">
    <Light />
    <Scene />
    <Controls />
  </Canvas>
  )
}

export default Sphere

