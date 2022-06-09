import styles from '../styles/Home.module.css'

export default function ContactInfo({ contactInfo }) {
  const { link, contactType, icon } = contactInfo;
  return (
    <>
        <a className={styles.logo_text}
          href={`${link}`}
        >
          <span className={styles.logo}>
          <i className={`${icon}`}></i>

          </span>
          {`${contactType}`}
        </a>
    </>
  )
};