import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from 'components/contactsForm/contactsForm.module.css';
import { Arrow } from 'components/svg/arrow';

export const ContactsForm = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(true);
    const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const isFullNameValid = fullNamePattern.test(formData.fullName);

    const phonePattern = /^380\d{9}$/;
    const phoneValid = phonePattern.test(formData.phone);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValid = emailPattern.test(formData.email);

    if (!isFullNameValid) {
      setFormData(prevFormData => {
        console.log('Invalid Fullname');
        return { ...prevFormData, fullName: '' };
      });
    }
    if (!phoneValid) {
      setFormData(prevFormData => {
        console.log('Invalid Phone');
        return { ...prevFormData, phone: '' };
      });
    }
    if (!emailValid) {
      setFormData(prevFormData => {
        console.log('Invalid Email');
        return { ...prevFormData, email: '' };
      });
    }

    if (emailValid && phoneValid && isFullNameValid) {
      console.log('Form data submitted:', formData);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmit(false);
      showToast();
    }
  };

  const showToast = () => {
    toast.success('Сontacts sent successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <form action="" className={css.container} onSubmit={handleSubmit}>
      <ToastContainer />
      <div className={css.form}>
        <ul className={css.list}>
          <li
            className={
              submit && !formData.fullName
                ? `${css.set} ${css.setWrong}`
                : css.set
            }
          >
            <h2>* Full name:</h2>
            <input
              name="fullName"
              placeholder="John Rosie"
              value={formData.fullName}
              onChange={handleChange}
            />
            {submit && !formData.fullName && (
              <p className={css.wrongMessage}>Wrong Fullname</p>
            )}
          </li>
          <li
            className={
              submit && !formData.fullName
                ? `${css.set} ${css.setWrong}`
                : css.set
            }
          >
            <h2>* E-mail:</h2>

            <input
              name="email"
              placeholder="johnrosie@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {submit && !formData.email && (
              <p className={css.wrongMessage}>Wrong Email</p>
            )}
          </li>
          <li
            className={
              submit && !formData.fullName
                ? `${css.set} ${css.setWrong}`
                : css.set
            }
          >
            <h2>* Phone:</h2>
            <input
              name="phone"
              placeholder="380961234567"
              value={formData.phone}
              onChange={handleChange}
            />
            {submit && !formData.phone && (
              <p className={css.wrongMessage}>Wrong Phone</p>
            )}
          </li>
          <li className={css.set}>
            <h2>Message:</h2>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            />
          </li>
        </ul>
        <div className={css.buttonWrapper}>
          <button type="submit" className={css.button}>
            Send
            <div className={css.arrow}>
              <Arrow
                width="32px"
                height="32px"
                transform="rotate(45deg)"
                backgroundColor="rgba(151, 210, 139, 1)"
                color="rgba(23, 61, 51, 1)"
              />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
