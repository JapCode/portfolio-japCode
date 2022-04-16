function ContactItem(prop) {
  const { url, icon, name, user } = prop;
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={`social media logo of ${name}`} />
        <span>{user}</span>
      </a>
    </li>
  );
}
export default ContactItem;
