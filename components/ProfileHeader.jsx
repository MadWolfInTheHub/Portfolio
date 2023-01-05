import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function ProfileHeader({ userInfo }) {
  const { name, objective, profilePhoto, CV } = userInfo;
  return (
    <>
        {/* <Image 
          priority
          src={`${profilePhoto.src}`}
          className={utilStyles.borderCircle}
          height={300}
          width={300}
          alt={`${name}`} 
        /> */}
        <h1 className={styles.title}>
          <a href={`${CV}`}>{`${name}`}'s CV</a>
        </h1>
        <p className={styles.description} >
          {`${objective}`}
        </p>
    </>
  )
}