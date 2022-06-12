import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SecondaryHeader({ userInfo }) {
  const { mainPhoto, objective, } = userInfo;
  return (
    <>
        <Image 
          priority
          src={`${mainPhoto.src}`}
          height={256}
          width={410}
          alt={`${mainPhoto.name}`} 
        />
        <p className={styles.description} >
          {`${objective}`}
        </p>
    </>
  )
}