import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {

  // const shadow = useRef();

  return (
    <AccumulativeShadows 
    // ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scae={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0,0, -0.20]}
    >
    <RandomizedLight 
    amount={5}
    radius={10}
    intensity={0.6}
    ambient={0.1}
    position={[5, 5, -10]}
    />
    <RandomizedLight 
    amount={2}
    radius={5}
    intensity={0.05}
    ambient={0.55}
    position={[-5, 8, -1]}
    />
    
      
    </AccumulativeShadows>
  )
}

export default Backdrop
