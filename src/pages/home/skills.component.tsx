
// models
import { Skill } from '../../models/skill'


// components
import SkillCardComponent from '../../components/skill_card/skill_card.component'


import backend_img from '../../assets/be.jpg'
import frontend_img from '../../assets/fr3.png'
import block_img from '../../assets/block.jpg'
import mobile_img from '../../assets/mobile.jpeg'
import devops_img from '../../assets/devops.jpg'



import './skills.component.scss'
import { LinearProgress } from '@mui/material'


const SkillsComponent = () => {
    const skills: Array<Skill> = [
        {
            title: "Blockchain",
            image: block_img,
            tools: [
                { tool: "Solidity", proeffiency: 98 },
                { tool: "Rust", proeffiency: 90 },
                { tool: "The Graph", proeffiency: 90 },
                { tool: "HardHat", proeffiency: 100 },
                { tool: "Anchor", proeffiency: 95 },
            ]
        },
        {
            title: "Backend",
            image: backend_img,
            tools: [
                { tool: "NodeJs", proeffiency: 95 },
                { tool: "Elixir", proeffiency: 95 },
                { tool: "Python", proeffiency: 95 },
                { tool: "PhP", proeffiency: 95 },
            ]
        },
        {
            title: "Frontend",
            image: frontend_img,
            tools: [
                { tool: "TypeScript", proeffiency: 98 },
                { tool: "Javascript", proeffiency: 99 },
                { tool: "React", proeffiency: 98 },
                { tool: "HTML5", proeffiency: 100 },
                { tool: "CSS3", proeffiency: 100 },
                { tool: "Flutter", proeffiency: 95 },
            ]
        },
        {
            title: "Mobile",
            image: mobile_img,
            tools: [
                { tool: "Flutter", proeffiency: 100 },
                { tool: "React Native", proeffiency: 95 },
                { tool: "SwiftUI", proeffiency: 70 },
            ]
        },
        {
            title: "DevOps & Cloud",
            image: devops_img,
            tools: [
                { tool: "Docker", proeffiency: 98 },
                { tool: "AWS", proeffiency: 90 },
                { tool: "Git", proeffiency: 100 },
                { tool: "Firebase", proeffiency: 98 },
                { tool: "Heroku", proeffiency: 95 },
            ]
        }
    ]



    return (
        <div className='section padded_container'>
            
            {
                skills.map((skill: Skill, index: number)=> {

                    return (
                        <SkillCardComponent
                            key={index}
                            skill={skill}
                            animationIndex={ (index+2)+16 }
                            reverse={ index % 2 === 1 }
                        />
                    )
                })
            }

        </div>
    )
}

export default SkillsComponent