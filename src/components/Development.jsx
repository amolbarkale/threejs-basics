import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Chair from "./Chair"
import Atom from './Atom'



const Development = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6}>
    <Chair/>
    {/* <Atom/> */}
    </Stage>
 <OrbitControls enableZoom={false}/> 
</Canvas>

  )
}

export default Development
