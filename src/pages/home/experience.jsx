import React from 'react'
import { Environment, OrbitControls, Plane, Stage, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { HemisphereLight, PointLight, Vector3 } from 'three'
import DevAltExperience from '../../components/dev_experience/dev_alt_experience'
import ScifyExperienceComponent from '../../components/scify_experience/scify_experience'
import X2Drone from '../../components/scify_experience/X2Drone'



const Experience = () => {
    return (
        <div style={{ height: '100vh', width: '100%', backgroundColor: 'pink' }}>
            <Canvas
                shadows
                style={{ height: '100%', maxHeight: '960px', borderRadius: '8px' }}
            >
                <OrbitControls enableZoom={false} enablePan={false} enableDamping={false} enabled={false} />
                <hemisphereLight  />
                {/* <Stage /> */}
                <Environment
                    preset='dawn'
                    blur={.2}
                    near={1}
                    far={1000}
                    resolution={256}
                    background
                >
                    <Stars radius={150} depth={50} fade speed={1} count={5000} factor={4} saturation={0} />
                </Environment>
                <pointLight color={'black'} position={[ 0, 4, 4 ]} intensity={10} castShadow />
                
                <DevAltExperience />
                {/* <X2Drone /> */}

                <Plane
                    receiveShadow
                    castShadow
                    args={[ 200, 200 ]}
                    rotation-x={-Math.PI / 2}
                    position-y={-3}
                >
                    <meshStandardMaterial color={'pink'} attach='material' />
                </Plane>
            </Canvas>
        </div>
    )
}

export default Experience
