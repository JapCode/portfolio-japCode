function ContactItem(prop) {
  const { index, url, icon, name, user } = prop;
  return (
    <li key={index}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={`social media logo of ${name}`} />
        <span>{user}</span>
      </a>
    </li>
  );
}
export default ContactItem;
