import styles from '../styles/Home.module.css'


export default function ContactInfo({ contactInfo }) {
  const { link, contactType, icon } = contactInfo;
  return (
    <>
      <a href={`${link}`}>
        <i className={`${icon}`}/>
        <div>
          {`${contactType}`}
        </div>
      </a>
    </>
  )
};