export default function ContactInfo({ contactInfo }) {
  const { link, contactType, icon } = contactInfo;
  return (
    <>
      <a href={`${link}`}>
        <div>
          <i className={`${icon}`}/>
        </div>
        {`${contactType}`}
      </a>
    </>
  )
};