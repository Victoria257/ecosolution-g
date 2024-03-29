import React from 'react';

import { ContactsForm } from 'components/contactsForm/contactsForm';

import { Sms } from 'components/svg/sms';
import { Map } from 'components/svg/map';
import { Call } from 'components/svg/call';
import { FacebookForContacts } from 'components/svg/facebookForContacts';
import { InstagramForContacts } from 'components/svg/instagramForContacts';

import css from 'sections/contacts/contacts.module.css';

export const Contacts = () => {
  return (
    <div name="contactUs" id="contactUs">
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
                  <a
                    href="tel:+380981234567"
                    className={css.line}
                    aria-label="Call by number +380981234567"
                  >
                    <Call />
                    <p> 38 (098) 12 34 567</p>
                  </a>
                </li>
                <li className={css.wrapperCallIcons2}>
                  <a
                    href="tel:+380931234567"
                    className={css.line}
                    aria-label="Call by number +380931234567"
                  >
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
                  aria-label="send a message to email office@ecosolution.com"
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
                  aria-label="open map with our address"
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
                      className={css.socialFB}
                      aria-label="open our Facebook page"
                    >
                      <FacebookForContacts />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css.socialInsta}
                      aria-label="open our Instagram page"
                    >
                      <InstagramForContacts />
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
    </div>
  );
};
