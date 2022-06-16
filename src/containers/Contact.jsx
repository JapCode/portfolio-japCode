import { useState } from 'react';
// require('dotenv').config();
import axios from 'axios';
import ContactModal from '../Modals/ContactModal';
import EmailForm from './EmailForm';
import PrincipalButton from '../components/PrincipalButton';
import TitleDecorator from '../components/TitleDecoration';
import socialMedia from '../utils/socialMedia';
import ContactItem from '../components/ContactItem';
import ResponseContainer from './ResponseContainer';

const { BASEURL } = process.env;

function Contact(prop) {
  const { actionClick } = prop;
  const [response, setResponse] = useState(false);
  // const [containRef, isVisible] = useIntersectionObserver({
  //   rootMargin: '0px',
  //   threshold: 0.5,
  // });
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
    actionClick();
    setResponse(false);
  };
  const onOpen = () => {
    actionClick();
    setIsOpen(true);
  };
  // const [blockScroll, allowScroll] = UseScrollBlock();
  const sendEmail = (name, email, message) => {
    axios
      .post(`${BASEURL}sendEmail/`, {
        name,
        email,
        message,
      })
      .then((res) => {
        setResponse(res.status);
      })
      .catch((err) => {
        setResponse(err.status);
      });
  };
  return (
    <div
      className="contact"
      // ref={containRef}
    >
      <div className={`about__container `}>
        {/* ${isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'} */}
        <span className="title--container">
          <TitleDecorator />
          <h1 className="contact__title">Contact</h1>
        </span>
        <p className="contact__description">
          Hey if i get you attention don’t hesitate to put in contact with me to
          talk and share ideas, ill be happy to help you in any way i can.
        </p>
        <ul className="contact__socialMedia">
          {socialMedia.map((social, index) => (
            <ContactItem
              key={social.name.toString()}
              url={social.url}
              icon={social.icon}
              name={social.name}
              user={social.user}
            />
          ))}
        </ul>
        <p className="contact__description">
          If you want send a direct message you can contact me on my email.
        </p>
        <PrincipalButton btnAction={onOpen}>Message</PrincipalButton>
      </div>
      <ContactModal onClose={onClose} isOpen={isOpen}>
        {response ? (
          <ResponseContainer response={response} onClose={onClose} />
        ) : (
          <EmailForm sendEmail={sendEmail} onClose={onClose} />
        )}
      </ContactModal>
    </div>
  );
}
export default Contact;
