import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SecondaryButton from '../components//SecondaryButton';

function EmailForm(prop) {
  const { onClose } = prop;
  const [messageLength, setMessageLength] = useState(0);
  let value;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleChangeCustom = (e) => {
    value = e.target.value;
    setMessageLength(value.length);
    // return value;
  };
  return (
    <>
      {/* <h1>Contact with me</h1> */}
      <form className="emailForm" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="emailForm__title">Contact with me</h3>
        <label htmlFor="name">
          Name
          <input
            {...register('name', { required: true })}
            placeholder="Shinji Ikari"
            id="name"
            autoFocus={true}
          />
        </label>
        {errors.name && <span>This field is required</span>}
        <label htmlFor="email">
          E-mail
          <input
            {...register('email', { required: true })}
            placeholder="fake-shinji@example.com"
            id="email"
          />
        </label>
        {errors.email && <span>This field is required</span>}
        <label htmlFor="message">
          Message
          <textarea
            {...register('message', { required: true })}
            placeholder="How can help you?"
            id="message"
            onChange={handleChangeCustom}
          />
        </label>
        {errors.message && <span>This field is required</span>}
        {/* <span>{messageLength}/280</span> */}
        <div className="emailForm__buttons">
          <SecondaryButton btnType="submit">Enviar</SecondaryButton>
          <SecondaryButton btnAction={onClose} secondaryStyle="true">
            Cancelar
          </SecondaryButton>
        </div>
      </form>
    </>
  );
}
export default EmailForm;
