import Link from 'next/link'
import nav from '../styles/navigation.module.css'
import PortfolioLink from './PortfolioLink'

export default function Navigation({ currentPage }) {
  return (
    <nav className={nav.navigation}>
    {
      currentPage === "skills" ? 
      <PortfolioLink/>
      :
      <Link href={`/skills`}>
        <div className={nav.link}>
          <i className="fa-solid fa-gears"/> 
          Tech skills
        </div>
      </Link>
    }
    {
      currentPage === "education" ? 
      <PortfolioLink/>
      :
      <Link href={`/education`}>
        <div className={nav.link}>
          <i className="fa-solid fa-user-graduate"/> 
          Education
        </div>
      </Link>
    }
    {
      currentPage === "work_experience" ? 
      <PortfolioLink/>
      :      
      <Link href={`/work_experience`}>
        <div className={nav.link}>
          <i className="fa-solid fa-briefcase"/> 
          Experience
        </div>
      </Link>
    }
    </nav>
  )
};