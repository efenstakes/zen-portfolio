import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { HemisphereLight, PointLight, Vector3 } from 'three'

export default function DevAltExperience(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Astronaut.glb");
  const { actions } = useAnimations(animations, group);


  useFrame(()=> {
    actions["CharacterArmature|Walk"].play()
    // group.current.position = new Vector3(0, -1, -8)
    // group.current.position.x = 0
    group.current.position.y = -1
    group.current.position.z = 0
  })

  return (
    <group ref={group} {...props} dispose={null} castShadow scale={[1.5, 1.5, 1.5]} position-y={-1}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group
            name="SpaceSuit_Feet"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="SpaceSuit_Feet_1"
              geometry={nodes.SpaceSuit_Feet_1.geometry}
              material={materials.SciFi_Light_Accent}
              skeleton={nodes.SpaceSuit_Feet_1.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Feet_2"
              geometry={nodes.SpaceSuit_Feet_2.geometry}
              material={materials.SciFi_Light}
              skeleton={nodes.SpaceSuit_Feet_2.skeleton}
            />
          </group>
          <group
            name="SpaceSuit_Legs"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="SpaceSuit_Legs_1"
              geometry={nodes.SpaceSuit_Legs_1.geometry}
              material={materials.SciFi_Light_Accent}
              skeleton={nodes.SpaceSuit_Legs_1.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Legs_2"
              geometry={nodes.SpaceSuit_Legs_2.geometry}
              material={materials.SciFi_Light}
              skeleton={nodes.SpaceSuit_Legs_2.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Legs_3"
              geometry={nodes.SpaceSuit_Legs_3.geometry}
              material={materials.SciFi_MainDark}
              skeleton={nodes.SpaceSuit_Legs_3.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Legs_4"
              geometry={nodes.SpaceSuit_Legs_4.geometry}
              material={materials.SciFi_Main}
              skeleton={nodes.SpaceSuit_Legs_4.skeleton}
            />
          </group>
          <group
            name="SpaceSuit_Body"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="SpaceSuit_Body_1"
              geometry={nodes.SpaceSuit_Body_1.geometry}
              material={materials.SciFi_Light_Accent}
              skeleton={nodes.SpaceSuit_Body_1.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Body_2"
              geometry={nodes.SpaceSuit_Body_2.geometry}
              material={materials.SciFi_Light}
              skeleton={nodes.SpaceSuit_Body_2.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Body_3"
              geometry={nodes.SpaceSuit_Body_3.geometry}
              material={materials.SciFi_MainDark}
              skeleton={nodes.SpaceSuit_Body_3.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Body_4"
              geometry={nodes.SpaceSuit_Body_4.geometry}
              material={materials.SciFi_Main}
              skeleton={nodes.SpaceSuit_Body_4.skeleton}
            />
          </group>
          <group
            name="SpaceSuit_Head"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="SpaceSuit_Head_1"
              geometry={nodes.SpaceSuit_Head_1.geometry}
              material={materials.SciFi_Light_Accent}
              skeleton={nodes.SpaceSuit_Head_1.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Head_2"
              geometry={nodes.SpaceSuit_Head_2.geometry}
              material={materials.SciFi_Light}
              skeleton={nodes.SpaceSuit_Head_2.skeleton}
            />
            <skinnedMesh
              name="SpaceSuit_Head_3"
              geometry={nodes.SpaceSuit_Head_3.geometry}
              material={materials.Grey}
              skeleton={nodes.SpaceSuit_Head_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Astronaut.glb");