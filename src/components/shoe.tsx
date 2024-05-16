import { useGLTF } from "@react-three/drei";
import { ShoeGLTF } from "../typings";
import { useThree } from "@react-three/fiber";
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap'
import { useLayoutEffect } from "react";

export default function Shoe() {
  const { nodes, materials } = useGLTF('/shoes_-_photogrammetry.glb') as ShoeGLTF;
  const {camera,scene}=useThree()
const { nodes:jordanNodes, materials:jordanMaterials } = useGLTF("/air_jordan_1.glb") as ShoeGLTF;
  const tl=gsap.timeline()

  useLayoutEffect(() => {
    // new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: 5,
      y: 4.0,
      z: 2.8,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: 3.01,
        y: 0.76,
        z: 3.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: -0.53,
        y: -3.48,
        z: -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // component - BuyNow.tsx
      .to(camera.position, {
        x: 5,
        y: 3.8,
        z: 2.8,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 2.31,
        y: 0.01,
        z: -0.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.67,
        y: -12.9,
        z: 0.79,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);
return (
    <Fragment>
      <directionalLight castShadow position={[-2.38,1.32,0.74]}/>
    <group scale={10} rotation-x={[-Math.PI*0.5]}  position={[2,1,-1]}>
  
             <mesh
          castShadow
          receiveShadow
          geometry={jordanNodes.shoe_shoe_0.geometry}
          material={jordanMaterials.shoe}
        />
               <mesh
          castShadow
          receiveShadow
          geometry={jordanNodes.shoelace_shoelace_0.geometry}
          material={jordanMaterials.shoelace}
        />
     
    </group>
    </Fragment>
  )
}
