import React, { useState } from 'react';
import css from 'components/contactsForm/contactsForm.module.css';
import { Arrow } from 'components/svg/arrow';

export const ContactsForm = () => {
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
    console.log('Form data submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  return (
    <form action="" className={css.container} onSubmit={handleSubmit}>
      <div className={css.form}>
        <ul className={css.list}>
          <li className={css.set}>
            <h2>* Full name:</h2>
            <input
              name="fullName"
              type="text"
              placeholder="John Rosie"
              pattern="^[a-zA-Z]+ [a-zA-Z]+$"
              title="Please enter a valid full name in the format John Rosie"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </li>
          <li className={css.set}>
            <h2>* E-mail:</h2>
            <input
              name="email"
              type="email"
              placeholder="johnrosie@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </li>
          <li className={css.set}>
            <h2>* Phone:</h2>
            <input
              name="phone"
              type="phone"
              placeholder="380961234567"
              value={formData.phone}
              onChange={handleChange}
              pattern="^\+?[0-9]{12}$"
              title="Please enter a valid phone number in the format 380961234567"
              required
            />
          </li>
          <li className={css.set}>
            <h2>Message:</h2>
            <textarea
              name="message"
              type="text"
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
              />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
