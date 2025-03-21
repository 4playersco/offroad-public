import { useState, useCallback } from "react";
import { Link } from "react-router";
import cn from "classnames";

import styles from "./Menu.module.scss";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }, []);
  const menuStyles = cn(styles.mobileList, {
    [styles.active]: isMenuOpen,
  });
  const mobileTitleStyles = cn(styles.mobileTitle, styles.listHeading);

  return (
    <nav className={styles.Menu}>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/run-info">Run Info</Link>
        </li>
        <li className="list-item--title">
          <h1 className={styles.listHeading}>
            <Link to="/">
              <span className={styles.listBigNumber}>4</span>-Players
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <a href="https://members.4-playersofcolorado.org">Login</a>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className={styles.mobileMenu}>
        <h1 className={mobileTitleStyles}>
          <Link to="/">
            <span className={styles.listBigNumber}>4</span>-Players
          </Link>
        </h1>
        <button className={styles.mobileMenuButton} onClick={handleMenuClick}>
          Menu
        </button>
      </div>
      <ul className={menuStyles}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/run-info">Run Info</Link>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <a href="https://members.4-playersofcolorado.org">Login</a>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
