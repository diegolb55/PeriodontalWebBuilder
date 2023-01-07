import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { act, useFrame, extend, useThree } from "@react-three/fiber";


import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useSpring, animated, config } from '@react-spring/three'
import {motion} from "framer-motion"

export function Model(props) {

    const { nodes, materials } = useGLTF("/assets/scene.gltf");

    const group = useRef()
    const tooth = useRef()

    const [active, setActive] = useState(false);

    const bounds = useRef({
        rotation:{
            x: 0,
            y: 0,
            z: 0,
        },
        position:{
            x: 0,
            y: 0,
            z: 0,
        }
    })
    
    const springs = useSpring({
        scale: active ? [1.3, 1.3, 1.3] : [.9, .9, .9],
        rotation: active ? [0, 0, 0] : [.5, 0, .3],
        position: active ? [0, 0, -10] : [5, 0, 0],


        config: config.wobbly,
    })

    useFrame(({clock}) => {

        const x = Math.sin(clock.getElapsedTime() / 1) * 4
        const y = Math.sin(clock.getElapsedTime() / 2) * 4

        const c = Math.sin(clock.getElapsedTime() / .3) * 4



        if(active){
            group.current.rotation.y = c

        }
        else {

            group.current.rotation.y = y
            group.current.position.x = x
            group.current.position.y = y



        }

    })

    const handleClick = () => {
        if(!active){
            setActive(true);
            bounds.current.position.x = group.current.position.x;
            bounds.current.position.y = group.current.position.y;
            bounds.current.position.z = group.current.position.z

        }

        setTimeout(()=>{
            setActive(false);
        }, 1000)

    }

      // variants
      const variants = {
        twinkle: {
            display: active ? "none":"block",
            opacity: [0, 1],
            transition: {
                yoyo: Infinity,
                duration: 2.5,
            } 
        }
    }

 

    return (
        <>
        <animated.pointLight  position={[0, 30, 0]} color={springs.color} intensity={1}/>
        
        <animated.group 
            ref={group} 
            {...props} dispose={null} 
            position={springs.position}

            onClick={() => handleClick()}
            scale={springs.scale}

            rotation={springs.rotation}

            
        >   
            <Html position={ [0, 4, 0]}
>
                <motion.button
                    onClick={() => handleClick()} 
                    animate={"twinkle"}
                    variants={variants}
                    style={{
                        border: "1px solid red",
                        borderRadius:10,
                        color: "red",
                        padding:5,
                        fontSize:".6rem",
                        background: "#ffffff9c",
                        whiteSpace:"nowrap",
                        backdropFilter: "blur(2px)",

                    }}>click me</motion.button>
            </Html>
            
            <animated.mesh
                ref={tooth}

                scale={[.05, .05, .05]}
                position={ [0, 6, 0] }

                
                geometry={ nodes.tooth_tooth_0.geometry }
                material={ materials["tooth"] }
                matrixWorld={ nodes.tooth_tooth_0.matrixWorld}

                castShadow
                receiveShadow
                
            />
            <mesh
                scale={[.05, .05, .05]}
                position={[0, -2, 0]}

                castShadow
                receiveShadow
            
                geometry={ nodes.piece_middle_part_steel_0.geometry }
                material={ materials["steel"] }

                matrixWorld={ nodes.piece_middle_part_steel_0.matrixWorld}


                
            />
            <mesh

                scale={[.05, .05, .05]}
                position={[0, -12, 0]}

                
            
                geometry={ nodes.screw_steel_0.geometry }
                material={ materials["steel"] }
                matrixWorld={ nodes.screw_steel_0.matrixWorld}

                castShadow
                receiveShadow
                
            />
            <mesh
                
                scale={[.05, .05, .05]}
                position={[0, -12, 0]}

                geometry={ nodes.screw_steel_0_1.geometry }
                material={ materials["steel"] }
                matrixWorld={ nodes.screw_steel_0.matrixWorld}
                castShadow
                receiveShadow

                
            />
            <mesh

             
                scale={[.05, .05, .05]}
                position={[0, -12, 0]}
                
                geometry={ nodes.screw_steel_0_2.geometry }
                material={ materials["steel"] }
                matrixWorld={ nodes.screw_steel_0.matrixWorld}

                castShadow
                receiveShadow

            />
        
        </animated.group>
        </>
        
    );
}



useGLTF.preload("/assets/scene.gltf");