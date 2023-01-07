import {Suspense, useRef} from "react";
import { Canvas, useFrame,
    useThree, extend,
    useLoader, } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from '@react-three/drei'
import { Model } from "../public/assets/Model";






const ImplantModel = () => {

   

   
    
    return (
        <Suspense fallback={null}>
            <Model/>
        </Suspense>
    )
}

const Lighting = () => {
    return (
        <>
            <pointLight  position={[15, 40, 30]} color="white" intensity={1}/>
            <pointLight  position={[15, -40, 30]} color="gold" intensity={1}/>
            <ambientLight intensity={.8} />
        </>
    )
}

extend({ OrbitControls });
const CameraControls = () => {
   
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={false} enablePan={false} enableRotate={false} />;
};

export default function Implant(){


    return (
        
            <Canvas >
                {/* <CameraControls/> */}
                <PerspectiveCamera makeDefault fov={75} position={[-6, 0, 30]} />
                <ImplantModel />
                
                <Lighting/>
            </Canvas>
        
    )
}