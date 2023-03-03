import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const textRef = useRef()
    useFrame((state) => textRef.current.position.x = Math.sin(state.clock.elapsedTime *2))
  return (
    <mesh>
    {/* <boxGeometry args={[2, 2, 2]} /> */}
    <boxGeometry />
    <meshStandardMaterial color="rebeccapurple">
    <RenderTexture attach="map">
      <PerspectiveCamera
      makeDefault
      position={[0,0,2]}
      />
      <color attach="background" args={["#bd71c2"]} />
      <Text ref={textRef} fontSize={1} color="#555">
        Hey!
      </Text>
    </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube
