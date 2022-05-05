/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import PrincipalButton from '../components/PrincipalButton';

function CardsProjectsDesk(prop) {
  const {
    name,
    description,
    html_url,
    homepage,
    language,
    imgUrlDesk,
    imgUrlMobile,
  } = prop;
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    if (language) {
      setProjects(name);
    }
  }, [language, name]);
  return (
    <>
      {projects ? (
        <div className="projectDesk">
          <div className="projectDesk__details">
            <h3 className="projectDesk__title">{name}</h3>
            <ul className="projectDesk__technologies">
              {language.map((item) => {
                return <li key={name + item.name.toString()}>{item.name}</li>;
              })}
            </ul>
            <p className="projectDesk__description">{description}</p>
            <span className="projectDesk__buttons">
              <a href={homepage} target="_blank" rel="noopener noreferrer">
                <PrincipalButton>Web</PrincipalButton>
              </a>
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                <PrincipalButton>Github</PrincipalButton>
              </a>
            </span>
          </div>
          <figure className="projectDesk__imgContainer">
            <img
              className="projectDesk__imgContainer--imgDesk"
              src={imgUrlDesk}
              alt="for project desktop size"
            />
            <img
              className="projectDesk__imgContainer--imgMobile"
              src={imgUrlMobile}
              alt="for project mobile size"
            />
          </figure>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
export default CardsProjectsDesk;
