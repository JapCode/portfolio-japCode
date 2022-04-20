import { useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import ContactModal from '../Modals/ContactModal';
import EmailForm from './EmailForm';
import PrincipalButton from '../components/PrincipalButton';
import TitleDecorator from '../components/TitleDecoration';
import socialMedia from '../utils/socialMedia';
import ContactItem from '../components/ContactItem';
import UseScrollBlock from '../hooks/UseScrollBlock';
import { scroller } from 'react-scroll';

function Contact() {
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.5,
  });
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
    scroller.scrollTo('contact', {
      duration: 0,
      smooth: true,
    });
  };
  const onOpen = () => setIsOpen(true);
  const [blockScroll, allowScroll] = UseScrollBlock();
  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen]);
  return (
    <div className="contact" ref={containRef}>
      <div
        className={`about__container ${
          isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'
        }`}
      >
        <span className="title--container">
          <TitleDecorator />
          <h1 className="contact__title">Contacto</h1>
        </span>
        <p className="contact__description">
          hey si te gusto algo que viste aca no dudes en contactarte conmigo y
          si estas aprendiendo algo en lo que yo tenga experiencia o necesitas
          ayuda en un projecto escribe con gusto te ayudare en lo que pueda
        </p>
        <ul className="contact__socialMedia">
          {socialMedia.map((social, index) => (
            <ContactItem
              key={index}
              url={social.url}
              icon={social.icon}
              name={social.name}
              user={social.user}
            />
          ))}
        </ul>
        <p className="contact__description">
          y si quieres mandar un mensaje mas directo y formal puedes enviarme un
          mensaje a mi correo
        </p>
        <PrincipalButton btnAction={onOpen}>Mensaje</PrincipalButton>
      </div>
      <ContactModal onClose={onClose} isOpen={isOpen}>
        <EmailForm onClose={onClose} />
      </ContactModal>
    </div>
  );
}
export default Contact;
