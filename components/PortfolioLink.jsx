import Link from "next/link";
import nav from '../styles/navigation.module.css'

export default function PortfolioLink() {
  return (
    <Link href={`/`}>
      <div className={nav.link}>
        <i className="fa-solid fa-diagram-project"></i>
        My Portoflio
      </div>
    </Link>
  )
}