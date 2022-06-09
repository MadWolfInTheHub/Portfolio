import ContactInfo from "./ContactInfo"
import styles from '../styles/Home.module.css'


export default function Fotter({contactInfo}) {
  return(
    <footer className={styles.footer}>
      {
        contactInfo.map(el => (
          <ContactInfo contactInfo={el}/>
        ))
      }
    </footer>
  )
}