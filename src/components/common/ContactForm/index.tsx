import { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";

import styles from "./ContactForm.module.scss";
import Button from "../../utility/Button";
import Captcha from "../Captcha";

const ContactForm = () => {
  const navigate = useNavigate();
  const [validRecaptcha, setValidRecaptcha] = useState(false);

  const handleCaptchaChange = useCallback(
    (isValid: boolean) => {
      setValidRecaptcha(isValid);
    },
    [setValidRecaptcha]
  );

  const encode = useCallback((data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }, []);

  return (
    <div className={styles.ContactForm}>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": "contact",
              ...values,
            }),
          })
            .then(() => {
              setSubmitting(false);
              navigate("/thanks");
            })
            .catch(() => {
              setSubmitting(false);
              setStatus({
                msg: "There was a problem submitting your message. Please try again later.",
              });
            });
        }}
      >
        {({ isSubmitting, handleSubmit }, ...props) => {
          const isDisabled = !validRecaptcha || isSubmitting;

          return (
            <Form
              name="contact"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              {...props}
            >
              <div className={styles.formFields}>
                <Field
                  className={styles.field}
                  placeholder="Name"
                  type="name"
                  name="name"
                />
                <ErrorMessage
                  className={styles.error}
                  name="name"
                  component="div"
                />
                <Field
                  className={styles.field}
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="div"
                />
                <Field
                  className={styles.field}
                  placeholder="Message"
                  type="message"
                  component="textarea"
                  name="message"
                />
                <ErrorMessage
                  className={styles.error}
                  name="message"
                  component="div"
                />
                <div className={styles.recaptcha}>
                  <Captcha onChange={handleCaptchaChange} />
                </div>
              </div>
              <Button type="submit" disabled={isDisabled}>
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
