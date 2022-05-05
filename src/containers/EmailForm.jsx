import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SecondaryButton from '../components/SecondaryButton';
import Spinner from '../components/Spiner';

function EmailForm(prop) {
  const { onClose, sendEmail } = prop;
  const [messageLength, setMessageLength] = useState(0);
  const [loading, setLoading] = useState(false);
  let value;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = (data) => {
    sendEmail(data.name, data.email, data.message);
    setLoading(true);
  };
  const handleChangeCustom = (e) => {
    value = e.target.value;
    setMessageLength(value.length);
    console.log(messageLength);
    // return value;
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form className="emailForm" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="emailForm__title">Contact with me</h3>
          <label htmlFor="name">
            Name
            <input
              autoComplete="off"
              {...register('name', { required: true })}
              placeholder="Shinji Ikari"
              id="name"
              // autoFocus={true}
            />
          </label>
          {errors.name && (
            <span className="emailForm__error">This field is required</span>
          )}
          <label htmlFor="email">
            E-mail
            <input
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="fake-shinji@example.com"
              id="email"
            />
          </label>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span className="emailForm__error" key={type}>
                  {message}
                </span>
              ))
            }
          />
          {/* {errors.email && <span>This field is required </span>} */}
          <label htmlFor="message">
            Message
            <textarea
              {...register('message', { required: true })}
              placeholder="How can help you?"
              id="message"
              onChange={handleChangeCustom}
            />
          </label>
          {errors.message && (
            <span className="emailForm__error">This field is required</span>
          )}
          {/* <span>{messageLength}/280</span> */}
          <div className="emailForm__buttons">
            <SecondaryButton btnType="submit">Enviar</SecondaryButton>
            <SecondaryButton btnAction={onClose} secondaryStyle="true">
              Cancelar
            </SecondaryButton>
          </div>
        </form>
      )}
    </>
  );
}
export default EmailForm;
