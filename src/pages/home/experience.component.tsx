import React, { Suspense } from 'react'
import { AccumulativeShadows, ContactShadows, Environment, Float, Loader, MeshWobbleMaterial, OrbitControls, Plane, RandomizedLight, SoftShadows, Sphere, Stars, Text3D } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader, } from 'three'
import { useWindowWidth } from '@react-hook/window-size'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


// components
import DevAltExperience from '../../components/dev_experience/dev_alt_experience'
import X2Drone from '../../components/scify_experience/X2Drone'
import CanvasLoader from '../../components/canvas_loader/component'


// styles
import './experience.component.scss'



type ExperienceProps = {
    scrollToWelcome: () => void,
}
const Experience = ({ scrollToWelcome }: ExperienceProps) => {
    const width = useWindowWidth()

    return (
        <div className='main_experience'>

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

            {/* <Suspense fallback={<Loader />}> */}
            <Canvas
                shadows
                className='main_experience__canvas'
                style={{ height: '100%', maxHeight: '960px', borderRadius: '1rem' }}
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

                {/* peru */}
                {/* <pointLight color={'black'} position={[ 0, 4, 4 ]} intensity={.6} castShadow />
                <pointLight color={'blue'} position={[ 4, 4, 4 ]} intensity={1} castShadow />
                <spotLight castShadow color='black' position={[ -2, 8, 3 ]} />
                
                <pointLight color={'pink'} position={[ 4, 4, 4 ]} intensity={1} castShadow />
                <spotLight castShadow color='brown' position={[ -2, 8, 3 ]} /> */}

                {/* <mesh position={[ 8, 4, -4 ]}>
                    <sphereGeometry args={[ 1.3, 80, 80 ]} />
                    <meshLambertMaterial color="blue" opacity={0.5} />
                    
                    <MeshDistortMaterial
                        attach="material"
                        color={ 'black' }
                        distort={.4}
                        speed={1.8}
                        roughness={0.2}
                    />
                </mesh>
                <mesh position={[ -8, 4, -4 ]}>
                    <sphereGeometry args={[ 1.3, 80, 80 ]} />
                    <meshLambertMaterial color="blue" opacity={0.5} />
                    
                    <MeshDistortMaterial
                        attach="material"
                        color={ 'black' }
                        distort={.4}
                        speed={1.8}
                        roughness={0.2}
                    />
                </mesh> */}

                {/* <Suspense fallback={null}> */}
                    <pointLight color={'black'} position={[ 0, 4, 4 ]} intensity={.6} castShadow />
                    <pointLight color={'brown'} position={[ 4, 4, 4 ]} intensity={.6} castShadow />
                    <pointLight color={'darkgreen'} position={[ -4, 4, 4 ]} intensity={.6} castShadow />
                    <spotLight castShadow color='black' position={[ -2, 8, 3 ]} />
                    <spotLight castShadow color='black' position={[ 2, 8, 3 ]} />
                    
                    <pointLight color={'black'} position={[ 4, 4, 4 ]} intensity={1} castShadow />
                    {/* <spotLight castShadow color='brown' position={[ -2, 8, 3 ]} /> */}

                    <Suspense fallback={null}>
                        <DevAltExperience />
                    </Suspense>

                    <Float floatIntensity={.1} floatingRange={[ .5, 1 ]} rotationIntensity={.1}>
                        <group>
                            {/* [ -25, -2, -30 ] */}
                            <group
                                position={width > 768 ? [ -20, 2, -15 ] : [ 3, 6, -15 ]}
                                rotation-y={ width > 768 ? Math.PI / 5 : 0 }
                            >
                                <Text3D
                                    font="/fonts/Rubik Light_Regular.json"
                                    args={[  ]}
                                    bevelEnabled
                                    size={ width > 768 ? 1.5 : 1}
                                    bevelThickness={.1}
                                >
                                    007.
                                <meshBasicMaterial color="darkorange" />
                                </Text3D>
                            </group>
                            {/* [ 20, -2, -30 ] */}
                            <group
                                position={width > 768 ? [ 15, 2, -20 ] : [ 3, 6, -15 ] }
                                rotation-y={ width > 768 ? -Math.PI / 5 : 0 }
                            >
                                <Text3D
                                    font="/fonts/Rubik Light_Regular.json"
                                    args={[  ]}
                                    bevelEnabled
                                    size={width > 768 ? 1.5 : 1}
                                    bevelThickness={.1}
                                >
                                    { width > 768 ? "Is Here." : "007." }
                                    {/* "#0E7F00" #3D9DD9 */}
                                <meshBasicMaterial color="darkorange"  />
                                </Text3D>
                            </group>
                        </group>
                    </Float>

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
                        <MeshWobbleMaterial
                            opacity={.1}
                            wireframe
                            factor={.05}
                            color="black"
                            emissive='pink'
                        />
                    </Sphere>
                    <Float speed={.5} floatIntensity={.5} rotationIntensity={.5} floatingRange={[ 1, 2 ]}>
                        <X2Drone />
                    </Float>

                    <Floor />
                    {/* <Plane
                        receiveShadow
                        castShadow
                        args={[ 200, 200 ]}
                        rotation-x={-Math.PI / 2}
                        position-y={-3}
                    >
                        <meshStandardMaterial color={'pink'} attach='material' />
                    </Plane> */}
                {/* </Suspense> */}

                <CanvasLoader />
            </Canvas>
            <Loader />
            {/* </Suspense> */}
        </div>
    )
}


function Floor() {
    const [normals, height] = useLoader(TextureLoader, [
      '/assets/normap-map.png',
      '/assets/displacement-3.jpg',
    ])
    
    // good colors
    // #333233
    // peru
    // orange
    return (
        <group>
            <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -4, 0]}
                args={[200, 200, 1024, 1024]}
            >
                <meshStandardMaterial
                    attach="material"
                    color="#333233"
                    metalness={0.1}
                    normalMap={normals}
                    displacementMap={height}
                    displacementScale={1.2}
                />
            </Plane>
        </group>
    )
  }



export default Experience
