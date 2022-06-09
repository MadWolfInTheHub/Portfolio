import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import user from '../usersData/user'
import Block from '../components/Block'
import ProfileHeader from '../components/ProfileHeader'
import ContactInfo from '../components/ContactInfo'

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

      <main className={styles.main}>
        <ProfileHeader userInfo={userInfo}/> 

        <nav className={styles.navigation}>
          <Link href={`/skils`}>
            <div>
              <i className="fa-solid fa-gears"/> 
              My tech skills
            </div>
          </Link>

          <Link href={`/education`}>
            <div>
              <i className="fa-solid fa-user-graduate"/> 
              My Education
            </div>
          </Link>

          <Link href={`/work_experience`}>
            <div>
              <i className="fa-solid fa-briefcase"/> 
              My work experience
            </div>
          </Link>
        </nav>

        <div className={styles.grid}>
        {
          portfolio.map(el => (
            <Block userData={el}/>
          ))
        }
        </div>
      </main>

      <footer className={styles.footer}>
        {
          contactInfo.map(el => (
            <ContactInfo contactInfo={el}/>
          ))
        }
      </footer>
    </div>
  )
}
