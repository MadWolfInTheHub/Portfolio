import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Block({userData})  {
  const { link, description, title, image } = userData;
  return (  
    <a href={link} className={styles.card}>
      <h2>{title} &rarr;</h2>
      {description !== '' ?
        <>
          <h3>Description: </h3>
          <p>
            {description}
          </p>
        </>
        : 
        <Image 
          priority
          src={`${image.src}`}
          height={167}
          width={260}
          alt={`${image.width}`}
        />
      }

    </a>
  )
}
