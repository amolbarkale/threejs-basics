import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Chair from "./Chair"
import Mac from './Mac'

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
const WebDesign = () => {
  return (
    <>
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        {/* <Chair/> */}
        <Mac/>
        </Stage>
     <OrbitControls enableZoom={false}/> 
    </Canvas>
    {/* <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt, excepturi?
    </Desc> */}
    </>
  )
}

export default WebDesign
