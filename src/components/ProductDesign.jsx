import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Atom from './Atom'
import Shoe from "./Shoe"
import Chair from "./Chair"
import styled from 'styled-components'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    right: 100px;
    
`

const ProductDesign = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6}>
    {/* <Chair/> */}
    {/* <Atom/> */}
    <Shoe/>
    </Stage>
 <OrbitControls enableZoom={false}/> 
</Canvas>
  )
}

export default ProductDesign
