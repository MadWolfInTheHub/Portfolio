import Head from 'next/head'
import Image from 'next/image'
import user from '../../usersData/user'
import styles from '../../styles/Home.module.css'
import AdditionalInfo from "../../components/AdditionalInfo"
import Footer from '../../components/Fotter'
import Navigation from '../../components/Navigation'
import SecondaryHeader from '../../components/SecondaryHeader'

export default function Skils () {
  return(
    <div className={styles.container}>
      <Head>
        <title>Serhii's education</title>
        <meta name="description" content="My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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