import React, { type FC } from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";
import { Link } from "react-router";

type ButtonProps = {
  handleClick?: () => void;
  ghost?: boolean;
  className?: string;
  href?: string;
  to?: string;
  children: React.ReactNode;
  [rest: string]: unknown;
};

const Button: FC<ButtonProps> = ({
  handleClick = () => {},
  children,
  ghost = false,
  className = "",
  href = "",
  to = "",
  ...rest
}) => {
  const classes = classnames(className, {
    [styles.Button]: !ghost,
    [styles.ButtonGhost]: ghost,
  });

  let btnComponent;

  if (href && !to) {
    btnComponent = (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  } else if (to && !href) {
    btnComponent = (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  } else {
    btnComponent = (
      <button onClick={handleClick} className={classes} {...rest}>
        {children}
      </button>
    );
  }

  return btnComponent;
};

export default Button;
