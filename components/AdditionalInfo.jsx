import user from "../usersData/user";
import additional from '../styles/additinalInfo.module.scss';

export default function AdditionalInfo(info) {
  let additionalInfo;
  switch (info.info) {
    case 'skills':
      additionalInfo = user.skills;
      return (
        <ul className={additional.list}>
          <h2>My tech skills</h2>
        
          {
            additionalInfo.map(el => (
              <li>{el}</li>
            ))
          }
        </ul>
      );
    case 'education':
      additionalInfo = user.education;
      return (
        <table className={additional.table}>
          <thead >
            <tr>
              <th>School</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {
              additionalInfo.map(el => (
                <tr>
                  <td>{el.school}</td>
                  <td>{el.year}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      );
    case 'experience':
      additionalInfo = user.experience;
      return (
        <table className={additional.table}>
          <thead>
            <tr>
             <th>Work experience</th>
            </tr>
          </thead>
           <tbody>
            {
              additionalInfo.map(el => (
                <>
                  <tr>
                    <td>Position</td>
                    <td>{el.position}</td>
                  </tr>
                  <tr>
                      <td>Company</td>
                      <td>{el.company}</td>
                  </tr>
                  <tr>
                      <td>Work Period</td>
                      <td>{el.workPeriod}</td>
                  </tr>
                  <tr>
                      <td>Responsibilities</td>
                      <td>{el.responsibilities}</td>
                  </tr>
                  <tr>
                      <td>UsedTechologies</td>
                      <td>{el.usedTechologies}</td>
                  </tr>
                </>
              ))
            }
           </tbody>
        </table>
      );
    default:
      alert('Log in Please!');
  };
};