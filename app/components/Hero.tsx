import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Hero = () => {
  return (
    <div className='hero'>
     <h1 className='name'>Rutuja V Parab</h1>
     <h6 className='roles'>Student | Developer | Exploring Programming & AI</h6>
     <div className='cards'>
        <h5><SchoolIcon />&emsp;Education</h5>
            <b>Bharati Vidyapeeth College Of Engineering, Navi Mumbai</b><br/>
            <ul className="list-disc pl-6">
            <li>BE in Computer Engineering</li>
            <li>2023 - Expected 2027</li>
            <li>CGPA: 9 - 10</li>
            </ul>
     </div>
     <div className='cards'>
        <h5><WorkspacePremiumIcon />&emsp;Experience</h5>
        <b>AI/ML Virtual Intern @ Infosys Springboard</b>
        <ul className="list-disc pl-6">    
            <li>
                Developed a flask-based web app integrated with LSTM prediction model and visualization with Plotly.js for 'smart home energy optimization' project.
            </li>
            <li>
                Coordinated a team of interns for final work presentation.
            </li>
            <li>
                Recognized as a top contributor across multiple Scrum sprints based on performance and timely deliverables.
            </li>
        </ul>
     </div>
    </div>
  )
}

export default Hero
