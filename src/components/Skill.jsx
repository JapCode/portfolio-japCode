function Skill(prop) {
  const { img, name, link } = prop;
  return (
    <a className="skill" href={link} target="_blank" rel="noopener noreferrer">
      <img className="skill__img" src={img} alt={name} />
      <h3 className="skill__name">{name}</h3>
    </a>
  );
}
export default Skill;
