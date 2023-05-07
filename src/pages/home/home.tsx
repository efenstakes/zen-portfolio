import { Environment, OrbitControls, Plane, Stage, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { HemisphereLight, PointLight, Vector3 } from 'three'
import DevAltExperience from '../../components/dev_experience/dev_alt_experience'
import ScifyExperienceComponent from '../../components/scify_experience/scify_experience'
import X2Drone from '../../components/scify_experience/X2Drone'
import Experience from './experience'




import './home.scss'

const HomePage = () => {
    return (
        <div>
            

            <Experience />

            
            {/* <div className="dev_experience">
                <ScifyExperienceComponent />
            </div> */}

            <div style={{ height: '100vh', width: '100%', backgroundColor: 'pink' }}></div>
            <div style={{ height: '100vh', width: '100%', backgroundColor: 'azure' }}></div>

        </div>
    )
}

export default HomePage
