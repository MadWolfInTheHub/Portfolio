import Head from 'next/head'
import styles from '../styles/Home.module.css'
import user from '../usersData/user'
import Block from '../components/Block'
import ProfileHeader from '../components/ProfileHeader'
import Footer from '../components/Fotter'
import Navigation from '../components/Navigation'

export async function getStaticProps() {
  const userInfo = user;
  return {
    props: {
      userInfo,
    },
  };
}

export default function Home({ userInfo }) {
  const { contactInfo, portfolio } = userInfo;
  return (
    <div className={styles.container}>
      <Head>
        <title>Serhii's CV</title>
        <meta name="description" content="My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation currentPage='portfolio'/>
      <main className={styles.main}>
        <ProfileHeader userInfo={userInfo}/> 
        <div className={styles.grid}>
        {
          portfolio.map(el => (
            <Block userData={el}/>
          ))
        }
        </div>
      </main>
      <Footer contactInfo={contactInfo}/> 
    </div>
  )
}
