import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function SecondaryHeader({ userInfo }) {
  const { mainPhoto, objective, } = userInfo;
  return (
    <>
        <Image 
          priority
          src={`${mainPhoto.src}`}
          height={256}
          width={410}
          alt={`${mainPhoto.name}`} />
{/*         <h1 className={styles.title}>
          <a href={`${CV}`}>{`${name}`}'s CV</a>
        </h1> */}

        <p className={styles.description} >
          {`${objective}`}
        </p>
    </>
  )
}