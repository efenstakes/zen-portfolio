import React from 'react'
import { AccumulativeShadows, Cloud, ContactShadows, Environment, Float, MeshWobbleMaterial, OrbitControls, PerspectiveCamera, Plane, RandomizedLight, SoftShadows, Sphere, SpotLight, SpotLightShadow, Stage, Stars, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { HemisphereLight, PointLight, Vector3 } from 'three'
import DevAltExperience from '../../components/dev_experience/dev_alt_experience'
import ScifyExperienceComponent from '../../components/scify_experience/scify_experience'
import X2Drone from '../../components/scify_experience/X2Drone'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import './experience.component.scss'



type ExperienceProps = {
    scrollToWelcome: () => void,
}
const Experience = ({ scrollToWelcome }: ExperienceProps) => {
    return (
        <div className='main_experience' style={{ height: '100vh', width: '100%', backgroundColor: 'pink' }}>

            <div className='main_experience__side fd_12'>
                <p className='main_experience__side_text su_16'>
                    Welcome, click the button below to start previewing my resume
                </p>

                <div className='main_experience__side_go_down__container su_23'>
                    <div className="main_experience__side_go_down row ma_center ca_center" onClick={()=> scrollToWelcome()}>
                        <KeyboardArrowDownIcon className='main_experience__side_icon' sx={{ fontSize: '2rem', }} />
                    </div>
                </div>
            </div>

            <Canvas
                shadows
                className='main_experience__canvas'
                style={{ height: '100%', maxHeight: '960px', borderRadius: '8px' }}
            >
                <OrbitControls enabled={false} />
                <hemisphereLight  />
                {/* <Stage /> */}
                <Environment
                    preset='sunset'
                    blur={.2}
                    near={1}
                    far={1000}
                    resolution={256}
                    background
                >
                    <Stars radius={150} depth={50} fade speed={1} count={5000} factor={4} saturation={0} />
                </Environment>
                {/* <color attach="background" args={[ "lightgray" ]} /> */}
                <pointLight color={'black'} position={[ 0, 4, 4 ]} intensity={10} castShadow />
                <pointLight color={'blue'} position={[ 4, 4, 4 ]} intensity={10} castShadow />
                <spotLight castShadow color='red' position={[ -2, 8, 3 ]} />
                
                <DevAltExperience />

                <group position={[ -25, -2, -30 ]}>
                    <Text3D
                        font="/fonts/Rubik Light_Regular.json"
                        args={[  ]}
                        bevelEnabled
                        size={2}
                        bevelThickness={.2}
                    >
                        007.
                    <meshBasicMaterial color="#0E7F00" />
                    </Text3D>
                </group>
                <group position={[ 20, -2, -30 ]}>
                    <Text3D
                        font="/fonts/Rubik Light_Regular.json"
                        args={[  ]}
                        bevelEnabled
                        size={2}
                        bevelThickness={.2}
                    >
                    Is Here.
                    <meshBasicMaterial color="#0E7F00" />
                    </Text3D>
                </group>

                {/* <fog args={[ 'black', 0, 200 ]} /> */}
                {/* <fog attach="fog" args={['gray', 10, 40]} /> */}

                {/* <PerspectiveCamera position={[0, -.5, 10]} makeDefault fov={50}></PerspectiveCamera> */}

                <SoftShadows />
                <ContactShadows
                    opacity={1}
                    scale={10}
                    blur={1}
                    far={100}
                    resolution={256}
                    color="#000000"
                    position-y={-2.8}
                    position-z={.5}
                />
                <AccumulativeShadows temporal frames={10} scale={10}>
                    <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} />
                </AccumulativeShadows>

                <Sphere args={[ 20, 40, 40 ]} position={[ 0, -1, -40 ]}>
                    <meshPhongMaterial color="gray" emissive='tomato' wireframe />
                </Sphere>
                <Float speed={.5} floatIntensity={.5} rotationIntensity={.5} floatingRange={[ 1, 2 ]}>
                    <X2Drone />
                </Float>

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
