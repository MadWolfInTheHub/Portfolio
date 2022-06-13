import Image from 'next/image'
import user from '../../usersData/user'
import styles from '../../styles/Home.module.css'
import AdditionalInfo from "../../components/AdditionalInfo"
import Footer from '../../components/Fotter'
import Navigation from '../../components/Navigation'
import SecondaryHeader from '../../components/SecondaryHeader'
import Layuot from '../../components/Layout'

export default function Skils () {
  return(
    <div className={styles.container}>
      <Layuot info="education"/>
      <Navigation currentPage='education'/>
      <div className={styles.main}>
        <SecondaryHeader userInfo={user.education_page}/>
        <div className={styles.grid}>
          <Image src='/images/education_main.png' width={300} height={200}/>
          <AdditionalInfo info={'education'}></AdditionalInfo>
        </div>
      </div>
        <Footer contactInfo={user.contactInfo}/> 
    </div>
  )
}