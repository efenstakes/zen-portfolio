import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { Center, Cloud, Environment, Float, PerspectiveCamera, Sky, Stars, Text3D } from '@react-three/drei/core';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import X2Drone from './X2Drone';

// import { useFrame } from '@react-three/fiber/dist/declarations/src';
// import { MeshDistortMaterial } from '@react-three/drei';




const DroneOne = ()=> {
  const model = useLoader(GLTFLoader, '/one.glb')



  return (
    <primitive
      object={model.scene}
      rotation-y={ -Math.PI / 2 }
      scale={[ .8, .8, .8 ]}
      position-z={1.2}
    />
  )
}

const BALL_SCALE = 1.4
const Ball = ()=> {
  const [pos, setPos] = useState(50)
  const [scale, setScale] = useState(1)
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState("black") // "darkgrey"
  

  useFrame(()=> {
    // setScale((state)=> {
    //   console.log("scale ", state)
    //   return (state > 2) ? state -= .1 : state += .1
    // })
    setPos((state)=> {
      return (state > 8) ? state -= .5 : state
    })
  })
  

  useEffect(()=> {
    setInterval(()=> {
      // if ( pos <= 8 ) {
        setColor( (state)=> state == "black" ? '#28143D' : 'black' )
        // setColor( (state)=> state == "black" ? 'darkbrown' : 'black' )
        // setColor( (state)=> state == "black" ? 'darkslategrey' : 'black' )
      // }
    }, 5000)
  }, [])

  // return <h1>M</h1>
  return (
    <mesh
      position={[ -0, 0, -(pos) ]}
      scale={[ BALL_SCALE, BALL_SCALE, BALL_SCALE ]}
      // onPointerOver={()=> setIsActive(true)}
      // onPointerOut={()=> setIsActive(false)}
    >
      <sphereGeometry args={[ 3.2, 80, 80 ]} />
      <meshLambertMaterial color="blue" opacity={0.5} />
      
      <MeshDistortMaterial
        attach="material"
        color={ color }
        distort={.4}
        speed={1.8}
        roughness={0}
      />
    </mesh>
  )
}

const Ball2 = ()=> {

  return (
    <mesh position={[ -0, 0, -8 ]}>
      <sphereGeometry args={[ 1.8, 80, 80 ]} />
      <meshLambertMaterial color="blue" opacity={0.5} />
      
      <MeshDistortMaterial
        attach="material"
        color="blue"
        distort={.4}
        speed={1.8}
        roughness={0}
      />
    </mesh>
  )
}



const Ring = ({ startingZPosition, index, showBlob }: { startingZPosition: number, index: number, showBlob: ()=> void })=> {
  const [pos, setPos] = useState(-20 + startingZPosition)
  // const [pos, setPos] = useState(-50 + startingZPosition)
  // const [pos, setPos] = useState(-100 + startingZPosition)

  useFrame(()=> {
    setPos((state)=> {
      // console.log("state ", state)
      // return ( state < -(8 * index) ) ? state += .5 : state
      return ( state < -4 ) ? state += .5 : state
    })
  })


  return (
    <mesh position={[ 0, 0, pos ]}>
      <torusGeometry args={[ 5, .1, 20, 40, ]} />
      <meshLambertMaterial color="green" />
    </mesh>
  )
}


function ScifyExperienceComponent() {
  const [showBlob, setShowBlob] = useState(false)
  const [showDrone, setShowBDrone] = useState(false)
  const [showText, setShowText] = useState(false)


  useEffect(()=> {
    setTimeout(()=> setShowBlob(true), 1500)
    setTimeout(()=> setShowBDrone(true), 3900)
    setTimeout(()=> setShowText(true), 4900)
  }, [])
  
  return (
    <div className="page" style={{ height: '100vh', padding: '0' }}>

      {/* <h1> Three </h1> */}
      {/* camera={{ position: [ 0, 0, pos ] }} */}
      <Canvas shadows style={{ height: '100%', maxHeight: '960px', borderRadius: '8px' }}>

        <Environment
            near={1}
            far={1000}
            resolution={256}
            background
          >
            <Stars radius={150} depth={50} fade speed={1} count={5000} factor={4} saturation={0} />
            {/* <Sky /> */}
            <color attach="background" args={[ "lightblue" ]} />
          </Environment>

          {/* background */}
          {/* <Environment background preset='dawn' blur={.5} /> */}

          <OrbitControls enableZoom={false} />
          <ambientLight intensity={.9} />
          <directionalLight position={[ 0, 5, 2 ]} intensity={1} />

          <Cloud
            opacity={0.2}
            speed={0.4} // Rotation speed
            width={50} // Width of the full cloud
            depth={15} // Z-dir depth
            segments={50} 
          />
          {/* <Sky />
          <Stars
            radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}


          {/* <color color="red" attach="background" /> */}

            {/* <mesh rotation={[ Math.PI / 4, Math.PI / 3, 0 ]}>
              <boxGeometry />
              <meshLambertMaterial color="red" />
              <meshPhongMaterial emissive="yellow" />
              <meshPhysicalMaterial transmission={0.1} attach="material" color="pink" />
            </mesh> */}
            
            {/* <mesh position={[ -0, 0, -(pos) ]}>
              <sphereGeometry args={[ 1.8, 80, 80 ]} />
              <meshLambertMaterial color="green" opacity={0.5} />
              
              <MeshDistortMaterial
                attach="material"
                color="green"
                distort={.5}
                speed={1.8}
                roughness={0}
              />
            </mesh> */}

            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
              floatIntensity={.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[1, 1.5]}
            >
              {
                showText &&
                  <>
                    <group position={[ -50, -2, -50 ]}>
                      <Text3D
                        font="/fonts/Rubik Light_Regular.json"
                        args={[  ]}
                        bevelEnabled
                        size={4}
                        bevelThickness={.2}
                      >
                        007.
                        <meshBasicMaterial color="#28143D" />
                      </Text3D>
                  </group>
                  <group position={[ 45, -2, -50 ]}>
                      <Text3D
                        font="/fonts/Rubik Light_Regular.json"
                        args={[  ]}
                        bevelEnabled
                        size={4}
                        bevelThickness={.2}
                      >
                        Is Here.
                        <meshBasicMaterial color="#28143D" />
                      </Text3D>
                  </group>
                  </>
              }

              <Suspense fallback={null}>
                {/* <Drone /> */}
                {/* { showDrone && <Drone /> } */}
                {/* { showDrone && <DroneTwo /> } */}
                <Float
                  speed={2}
                  rotationIntensity={1}
                  floatIntensity={.5}
                  floatingRange={[-.5, .5]}
                >
                  { showDrone && <X2Drone /> }
                </Float>
              </Suspense>

            </Float>

            {/* { showBlob && <Ball2 /> } */}
            
            { showBlob && <Ball /> }

            {/* <Suspense fallback={null}> */}
              {/* <Drone /> */}
              {/* { showDrone && <Drone /> } */}
              {/* { showDrone && <DroneTwo /> } */}
              {/* { showDrone && <X2Drone /> } */}
            {/* </Suspense> */}
            

            {
              Array.from({ length: 100 }).map((_, i)=> {

                return (
                  <Ring
                    key={i}
                    startingZPosition={-5 * (i + 1)}
                    index={i+1}
                    showBlob={()=> setShowBlob(true)} 
                  />
                )
                // return (
                //   <mesh key={i} position={[ 0, 0, -5 * (i + 1) ]}>
                //     <torusGeometry args={[ 5, .1, 20, 40, ]} />
                //     <meshLambertMaterial color="green" />
                //   </mesh>
                // )
              })
            }
            {/* <Ring startingZPosition={-1} index={1} /> */}


      </Canvas>
      <h1 style={{ textAlign: 'center', }}> I am Here </h1>
      <p style={{ textAlign: 'center', marginTop: '-1rem' }}><strong> EFEN </strong></p>
    </div>
  );
}

export default ScifyExperienceComponent;
