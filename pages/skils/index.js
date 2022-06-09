import Image from 'next/image'
import user from '../../usersData/user'
import styles from '../../styles/Home.module.css'
import AdditionalInfo from "../../components/AdditionalInfo"
import Footer from '../../components/Fotter'
import ProfileHeader from '../../components/ProfileHeader'
import Link from 'next/link'

export default function Skils () {
  return (
    <>
      <div className={styles.main}>
        <ProfileHeader userInfo={user}/>
        <div className={styles.grid}>
        <nav className={styles.navigation}>
          <Link href={`/`}>
            <div>
              <i className="fa-solid fa-gears"/> 
              Portfolio
            </div>
          </Link>

          <Link href={`/education`}>
            <div>
              <i className="fa-solid fa-user-graduate"/> 
              Education
            </div>
          </Link>

          <Link href={`/work_experience`}>
            <div>
              <i className="fa-solid fa-briefcase"/> 
              My work experiences
            </div>
          </Link>
        </nav>
          <Image src='/images/skills.gif' width={300} height={220}/>
          <AdditionalInfo info={'skills'}></AdditionalInfo>
        </div>
      </div>
        <Footer contactInfo={user.contactInfo}/> 
    </>
  )
}