import { Link, useLocation, useResolvedPath } from "react-router";

import styles from "./Footer.module.scss";
import Container from "~/components/utility/Container";
import Button from "~/components/utility/Button";
import logoSrc from "../../../assets/images/icon.png";
import { fullSiteTitle } from "~/config";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={styles.Footer}>
      {pathname !== "/membership" && (
        <div className={styles.pageCap}>
          <Button to="/membership">Get Started</Button>
        </div>
      )}
      <Container className={styles.info}>
        <Link to="/">
          <img
            className={styles.logo}
            src={logoSrc}
            alt={`${fullSiteTitle} logo`}
          />
        </Link>
        <br />© {new Date().getFullYear()} {fullSiteTitle}
        <br />
        All Rights Reserved
      </Container>
    </footer>
  );
};

export default Footer;
