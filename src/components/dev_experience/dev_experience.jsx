import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dev.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig7Hips} />
          <skinnedMesh
            name="Ch08_Beard"
            geometry={nodes.Ch08_Beard.geometry}
            material={materials.Ch08_hair}
            skeleton={nodes.Ch08_Beard.skeleton}
          />
          <skinnedMesh
            name="Ch08_Eyelashes"
            geometry={nodes.Ch08_Eyelashes.geometry}
            material={materials.Ch08_hair}
            skeleton={nodes.Ch08_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch08_Hair"
            geometry={nodes.Ch08_Hair.geometry}
            material={materials.Ch08_hair}
            skeleton={nodes.Ch08_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch08_Body"
            geometry={nodes.Ch08_Body.geometry}
            material={materials.Ch08_body}
            skeleton={nodes.Ch08_Body.skeleton}
          />
          <skinnedMesh
            name="Ch08_Hoodie"
            geometry={nodes.Ch08_Hoodie.geometry}
            material={materials.Ch08_body1}
            skeleton={nodes.Ch08_Hoodie.skeleton}
          />
          <skinnedMesh
            name="Ch08_Pants"
            geometry={nodes.Ch08_Pants.geometry}
            material={materials.Ch08_body1}
            skeleton={nodes.Ch08_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch08_Sneakers"
            geometry={nodes.Ch08_Sneakers.geometry}
            material={materials.Ch08_body1}
            skeleton={nodes.Ch08_Sneakers.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dev.gltf");
