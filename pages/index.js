import styles from '../styles/Home.module.css'
import user from '../usersData/user'
import Block from '../components/Block'
import ProfileHeader from '../components/ProfileHeader'
import Footer from '../components/Fotter'
import Navigation from '../components/Navigation'
import Layuot from '../components/Layout'

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
      <Layuot info="portfolio"/>
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