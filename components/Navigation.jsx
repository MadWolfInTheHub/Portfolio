import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PortfolioLink from './PortfolioLink'

export default function Navigation({ currentPage }) {
  return (
    <nav className={styles.navigation}>
    {
      currentPage === "skills" ? 
      <PortfolioLink/>
      :
      <Link href={`/skills`}>
        <div>
          <i className="fa-solid fa-gears"/> 
          My tech skills
        </div>
      </Link>
    }
    {
      currentPage === "education" ? 
      <PortfolioLink/>
      :
      <Link href={`/education`}>
        <div>
          <i className="fa-solid fa-user-graduate"/> 
          My Education
        </div>
      </Link>
    }
    {
      currentPage === "work_experience" ? 
      <PortfolioLink/>
      :      
      <Link href={`/work_experience`}>
        <div>
          <i className="fa-solid fa-briefcase"/> 
          My experience
        </div>
      </Link>
    }
    </nav>
  )
};