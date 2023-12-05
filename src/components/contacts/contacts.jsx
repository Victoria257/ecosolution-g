import React from 'react';
import { Element } from 'react-scroll';

import css from 'components/contacts/contacts.module.css';
import { ContactsForm } from 'components/contactsForm/contactsForm';
import { Sms } from 'components/svg/sms';
import { Facebook } from 'components/svg/facebook';
import { Instagram } from 'components/svg/instagram';
import { Map } from 'components/svg/map';
import { Call } from 'components/svg/call';

export const Contacts = () => {
  return (
    <Element name="contactUs">
      <section className={css.container}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>Contact us</h2>
        </div>
        <div className={css.contactsWrapperWithoutTitle}>
          <ul className={css.list}>
            <li className={css.set}>
              <h3 className={css.setTitle}>Phone:</h3>
              <ul className={css.listPhones}>
                <li className={css.wrapperCallIcons}>
                  <a href="tel:+380981234567" className={css.line}>
                    <Call />
                    <p> 38 (098) 12 34 567</p>
                  </a>
                </li>
                <li className={css.wrapperCallIcons2}>
                  <a href="tel:+380931234567" className={css.line}>
                    <Call />
                    <p> 38 (093) 12 34 567</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className={css.set}>
              <h3 className={css.setTitle}>E-mail:</h3>
              <div>
                <a
                  href="mailto:office@ecosolution.com"
                  className={`${css.line} ${css.wrapperSmsIcon}`}
                >
                  <Sms />
                  <p> office@ecosolution.com</p>
                </a>
              </div>
            </li>
            <li className={css.set}>
              <h3 className={css.setTitle}>Address:</h3>
              <div className={css.addressWrapper}>
                <a
                  href="https://www.google.com/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323789,17z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${css.line} ${css.wrapperMapIcon}`}
                >
                  <Map width={24} />
                  <p> 79005, Ukraine, Lvivstreet Shota Rustaveli, 7</p>
                </a>
              </div>
            </li>
            <li className={css.set}>
              <div className={css.socialWrapper}>
                <h3 className={css.setTitle}>Social Networks:</h3>
                <ul className={css.social}>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook color="rgba(23, 61, 51, 1)" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram color="rgba(23, 61, 51, 1)" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className={css.contactsFormWrapper}>
            <ContactsForm />
          </div>
        </div>
      </section>
    </Element>
  );
};
