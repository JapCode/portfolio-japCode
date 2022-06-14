import { useEffect, useState } from 'react';
import Skill from '../components/Skill';
import useWindowSize from '../hooks/UseWindowSize';
import skillsArray from '../utils/skillsArray';

const skillsRender = [];
function calcArrays(numberColumns, originalArray, destinyArray) {
  const columnsLength = Math.floor(originalArray.length / numberColumns);
  let start = 0;
  let end = 0;
  if (destinyArray.length === 0) {
    for (let i = 0; i < numberColumns; i++) {
      start = end;
      end = start + columnsLength;
      const myArray = originalArray.slice(start, end);
      destinyArray.push(myArray);
    }
  } else {
    // throw new Error('Array is not empty');
    // console.log(destinyArray);
    // destinyArray.pop();
    // destinyArray = [];
  }
}
function SkillsContainer() {
  const [reRender, setReRender] = useState(false);
  const windowSize = useWindowSize();
  useEffect(() => {
    setReRender(!reRender);
    if (skillsRender !== null && windowSize.width > 0) {
      const columnsToRender = windowSize.width > 900 ? 3 : 2;
      calcArrays(columnsToRender, skillsArray, skillsRender);
    }
  }, [windowSize]);
  return (
    <>
      <section className="skills__parallax">
        <div className="skills__container">
          {skillsRender.map((skills, index) => (
            <div className="skills__mySkills" key={skills.toString()}>
              {skills.map((skill) => (
                <Skill
                  key={skill.toString()}
                  link={skill.link}
                  img={skill.img}
                  name={skill.name}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default SkillsContainer;
