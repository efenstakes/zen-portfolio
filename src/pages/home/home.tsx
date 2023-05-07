import { Environment, OrbitControls, Plane, Stage, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef, ReactNode, RefObject } from 'react'
import { HemisphereLight, PointLight, Vector3 } from 'three'
import AppbarComponent from '../../components/appbar/appbar.component'
import DevAltExperience from '../../components/dev_experience/dev_alt_experience'
import ScifyExperienceComponent from '../../components/scify_experience/scify_experience'
import X2Drone from '../../components/scify_experience/X2Drone'
import SectionTitleComponent from '../../components/section_title/section_title.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import CompaniesComponent from './companies.component'
import ContactComponent from './contact.component'
import Experience from './experience.component'




import './home.scss'
import ProjectsComponent from './projects.component'
import SkillsComponent from './skills.component'
import WelcomeComponent from './welcome.component'

const HomePage = () => {
    let welcomeScrollToRef = useRef<HTMLDivElement>(null)
    let companiesScrollToRef = useRef<HTMLDivElement>(null)


    const scrollToWelcome = ()=> {
        if( !welcomeScrollToRef.current || welcomeScrollToRef.current == null ) return

        welcomeScrollToRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    
    const scrollToCompanies = ()=> {
        if( !companiesScrollToRef.current || companiesScrollToRef.current == null ) return

        companiesScrollToRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            {/* app bar */}
            <AppbarComponent />
            
            <Experience scrollToWelcome={scrollToWelcome} />

            {/* welcome */}
            <div className='welcome__scroll_to' ref={welcomeScrollToRef} />
            <WelcomeComponent scrollToCompanies={scrollToCompanies} />
            <VSpacerComponent space={8} />
    
            {/* companies */}
            <div className='companies__scroll_to' ref={companiesScrollToRef} />
            <CompaniesComponent />
            <VSpacerComponent space={8} />
      
            {/* projects */}
            <ProjectsComponent />
            <VSpacerComponent space={8} />

            {/* tools */}
            <SectionTitleComponent title="SKILLS" />
            <VSpacerComponent space={2} />
            <SkillsComponent />
            <VSpacerComponent space={8} />
    
    
            {/* contact */}
            <div className="contact_section">
                <SectionTitleComponent title="CONTACT ME" isWhite />
                <VSpacerComponent space={2} />
                <ContactComponent />
            </div>
            
            {/* <div className="dev_experience"> */}
                {/* <ScifyExperienceComponent /> */}
            {/* </div> */}

        </div>
    )
}

export default HomePage
