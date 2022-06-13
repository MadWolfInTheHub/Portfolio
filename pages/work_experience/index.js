import Head from 'next/head'
import Image from 'next/image'
import user from '../../usersData/user'
import styles from '../../styles/Home.module.css'
import AdditionalInfo from "../../components/AdditionalInfo"
import Footer from '../../components/Fotter'
import Navigation from '../../components/Navigation'
import SecondaryHeader from '../../components/SecondaryHeader'

export default function Skils () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serhii's experience</title>
        <meta name="description" content="My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation currentPage='work_experience'/>
      <div className={styles.main}>
        <SecondaryHeader userInfo={user.experience_page}/>
        <div className={styles.grid}>
          <Image src='/images/experience_secondary.gif' width={800} height={200}/>
          <AdditionalInfo info={'experience'}></AdditionalInfo>
        </div>
      </div>
        <Footer contactInfo={user.contactInfo}/> 
    </div>
  )
}