import Image from 'next/image'
import user from '../../usersData/user'
import styles from '../../styles/Home.module.css'
import AdditionalInfo from "../../components/AdditionalInfo"
import Footer from '../../components/Fotter'
import Navigation from '../../components/Navigation'
import SecondaryHeader from '../../components/SecondaryHeader'
import Layuot from '../../components/Layout'

export default function Skils () {
  return (
    <div className={styles.container}>
      <Layuot info="skills"/>
      <Navigation currentPage='skills'/>
      <div className={styles.main}>
        <SecondaryHeader userInfo={user.skills_page}/>
        <div className={styles.grid}>
          <Image src='/images/skills_secondary.gif' width={300} height={220}/>
          <AdditionalInfo info={'skills'}></AdditionalInfo>
        </div>
      </div>
        <Footer contactInfo={user.contactInfo}/> 
    </div>
  )
}