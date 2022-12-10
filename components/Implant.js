import {Suspense, useRef} from "react";
import { Canvas, useFrame,
    useThree, extend,
    useLoader, } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from '@react-three/drei'



const ImplantScene = () => {
    const gltf = useLoader(GLTFLoader, '/assets/scene.gltf')


    gltf.scene.children[0].rotation.set(-1, -.2, .5)


    useFrame(({clock}) => {
        const x = ( Math.sin( clock .getElapsedTime() / 1 ) ) * 1;
        const y = -2 + ( Math.cos( clock .getElapsedTime() / 1 ) ) * .5;
        
        const z = ( Math.sin( clock.getElapsedTime() / 5  ) ) * 4 ;


        // translation
        gltf.scene.children[0].position.x = x;
        gltf.scene.children[0].position.y = y;

        // rotation
        gltf.scene.children[0].rotation.z = z;

        


    })


    return (
        <Suspense>
            <primitive object={gltf.scene} />
        </Suspense>
    )
}

const Lighting = () => {
    return (
        <>
            <pointLight  position={[-2, 2, 4]} color="white" intensity={.5}/>
            <pointLight  position={[-4, -2, 2]} color="gold" intensity={1}/>

            <ambientLight intensity={.3} />
        </>
    )
}

extend({ OrbitControls });
const CameraControls = () => {
   
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={false} />;
};

export default function Implant(){
    return (
        <div style={{
            // border: "2px solid red",
            height: 300,
            width: "50vw",
            maxWidth: 400,
            position:"absolute",
            top:"-400px",
            zIndex: 10,
            right: 0,
            overflow:'hidden'
        }}>
            <Canvas>
                {/* <CameraControls/> */}
                <PerspectiveCamera makeDefault fov={75} position={[-2, .5, 6.5]}/>

                <ImplantScene />
                <Lighting/>
            </Canvas>
        </div>
        
    )
}