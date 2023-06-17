import React, { useRef, useEffect, } from "react";
import { useGLTF, } from "@react-three/drei"



const SCALE = 15
export default function X2Drone(props) {
    const group = useRef(null);
  
    const { nodes, materials } = useGLTF("/x2.glb");
    // const { actions } = useAnimations(animations, group);
  
    // console.log("actions ", actions)
  
    useEffect(() => {
      // actions.Hover.play()
    }, [])
  
    // useFrame(()=> {
      // setPosZ((state)=> {
      //   return state < 0 ? state += .01 : state
      // })
    // })

    

  return (
    <group ref={group} {...props} dispose={null} rotation-y={ -Math.PI / 2 } scale={[ SCALE, SCALE, SCALE ]} position-z={-44} position-y={5}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, Math.PI / 9, -Math.PI / 2]}
        >
          <group
            name="CYBER-hoverobjcleanermaterialmergergles"
            position={[-0.9, -0.6, -0.14]}
          >
            <group name="Object_2">
              <mesh
                name="Object_3"
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials["Material.067"]}
              />
              <mesh
                name="Object_4"
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Green}
              />
              <group name="Object_5">
                <mesh
                  name="Object_2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2_1.geometry}
                  material={materials.Blackish}
                />
                <mesh
                  name="Object_2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2_2.geometry}
                  material={materials.Blackish}
                />
                <mesh
                  name="Object_2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2_3.geometry}
                  material={materials.Green}
                />
              </group>
              <mesh
                name="Object_6"
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.Green}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/x2.glb");
