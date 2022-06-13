import ContactInfo from "./ContactInfo"
import styles from '../styles/Home.module.css'

export default function Fotter({contactInfo}) {
  const randomKey = () => Math.random(); 

  return(
    <footer className={styles.footer}>
      {
        contactInfo.map(el => (
          <ContactInfo key={randomKey()} contactInfo={el}/>
        ))
      }
    </footer>
  )
};