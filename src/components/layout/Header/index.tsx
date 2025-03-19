import { type FC } from "react";
import { useNavigate } from "react-router";

import styles from "./Header.module.scss";
import Menu from "../Menu";
import Container from "~/components/utility/Container";
import Button from "~/components/utility/Button";

type HeaderProps = {
  pageTitle?: string;
  small?: boolean;
};

const Header: FC<HeaderProps> = ({ pageTitle = "", small = false }) => {
  const navigate = useNavigate();

  return (
    <header
      className={small ? `${styles.header} ${styles.small}` : styles.header}
    >
      <Container>
        <Menu />
        {small ? (
          <div className={styles.hero}>
            <h1 className={styles.pageTitle}>{pageTitle}</h1>
          </div>
        ) : (
          <div className={styles.hero}>
            <h2 className={styles.tagline}>
              Where Dirty Folx Go To Get Dirtier
            </h2>
            <h3 className={styles.sinceline}>Getting Dirty Since 1986</h3>
            <Button handleClick={() => navigate("/membership")}>
              Get Started
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
