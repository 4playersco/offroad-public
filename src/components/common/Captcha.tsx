import { useCallback, type FC } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const { VITE_RECAPTCHA_SITE_KEY } = import.meta.env;

type CaptchaProps = {
  onChange: (isValid: boolean) => void;
};

const Captcha: FC<CaptchaProps> = ({ onChange }) => {
  const handleCaptchaChange = useCallback(() => {
    onChange(true);
  }, [onChange]);

  const handleCaptchaExpire = useCallback(() => {
    onChange(false);
  }, [onChange]);

  return (
    <>
      {VITE_RECAPTCHA_SITE_KEY && (
        <ReCAPTCHA
          sitekey={VITE_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
          onExpired={handleCaptchaExpire}
          onErrored={handleCaptchaExpire}
        />
      )}
    </>
  );
};

export default Captcha;
