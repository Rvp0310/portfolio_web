import React from 'react'
import CertificateCard from '../CertificateCard'

const certifications = [
  {
    src: "/Academic_Excellence.jpeg",
    name: "Academic Excellence (2nd Year - Rank 2)",
    year: "2026",
    org: "BVCOE"
  },
  {
    src: "/infosys(1).jpeg",
    name: "AI Primer",
    year: "2025",
    org: "Infosys Springboard"
  },
  {
    src: "/infosys(2).jpeg",
    name: "Principles Of Generative AI",
    year: "2025",
    org: "Infosys Springboard"
  },
  {
    src: "/hackerrank_sql_1.png",
    name: "SQL (Basic)",
    year: "2025",
    org: "HackerRank"
  },
  {
    src: "/Data_Science_for_Engineers.jpeg",
    name: "Data Science For Engineers",
    year: "2025",
    org: "NPTEL"
  }
]
const Certifications = () => {
  return (
    <div className='card-stack'>
     {certifications.map((certification) => <CertificateCard certificate={certification} />)} 
    </div>
  )
}

export default Certifications
