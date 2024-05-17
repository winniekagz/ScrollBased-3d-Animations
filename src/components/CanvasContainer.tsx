import { Canvas } from '@react-three/fiber'
import Shoe from './shoe'
import { Environment, OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const CanvasContainer = () => {
 
  return (
   <Canvas camera={{position:[4,3,2]}}>
    <OrbitControls enableZoom={false}/>
    <Shoe/>

    <Environment preset='city'  blur={0.5}/>
   </Canvas>
  )
}

export default CanvasContainer
