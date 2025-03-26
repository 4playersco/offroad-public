import { useCallback, useState } from "react";

import styles from "./ContactForm.module.scss";
import Button from "../../utility/Button";
import Captcha from "../Captcha";

const ContactForm = () => {
  const [validRecaptcha, setValidRecaptcha] = useState(false);

  const handleCaptchaChange = useCallback(
    (isValid: boolean) => {
      setValidRecaptcha(isValid);
    },
    [setValidRecaptcha]
  );

  const isDisabled = !validRecaptcha;

  return (
    <div className={styles.ContactForm}>
      <form name="contact" method="POST" action="/thanks" data-netlify="true">
        <div className={styles.formFields}>
          <input
            className={styles.field}
            placeholder="Name"
            type="name"
            name="name"
            required
          />
          <input
            className={styles.field}
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <textarea
            className={styles.field}
            placeholder="Message"
            name="message"
            required
          />
          <div className={styles.recaptcha}>
            <Captcha onChange={handleCaptchaChange} />
          </div>
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <Button type="submit" disabled={isDisabled}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
