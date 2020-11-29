//https://threejs.org/docs/#api/en/geometries/SphereGeometry

import React, { useRef } from 'react'

import { Canvas, useThree, useResource } from 'react-three-fiber'
import { OrbitControls } from "drei";
import * as cx from 'classnames'

import './style.css'

// import dynamic from 'next/dynamic'
// const { Canvas, useThree, useResource }  = dynamic(import('react-three-fiber'), { ssr: false })

const Scene = ({position = [0, 0, 0], size = 1, opacity = 1}) => {
  return (
    <>
      <mesh visible position={position} rotation={[0.5, 0, 0]} >
        <sphereGeometry attach="geometry" args={[size, 5, 4]} />
        <meshStandardMaterial wireframe attach="material" color={0xffffff} transparent opacity={opacity} />
      </mesh>
    </>
  )
}

const Controls = () => {
  const ref = useRef();
  const { gl, camera } = useThree();
  const {object} = useResource()

  const args = [camera, gl.domElement];

  return (
    <OrbitControls ref={object} 
       autoRotate
       {...{ ref, args }} 
    />
  );
};

const Light = () => {
  return (
    <> 
      <spotLight position={[0, 0, 10]} angle={0.15} penumbra={1} color="#2E9AE5"/>
      <pointLight position={[0, 0, 20]} color="#2E9AE5" intensity={0.9} />
      <ambientLight color="#2C76FF" intensity={0.8} />
    </>
  )
}


const CanvasSphere = ({className, position, size, opacity}) => {
  return (
    <Canvas className={cx("canvas-sphere", className)}>
      <Scene position={position} size={size} opacity={opacity} />
      <Light />
      <Controls target={position}/>
    </Canvas>
  )
}

export default CanvasSphere

