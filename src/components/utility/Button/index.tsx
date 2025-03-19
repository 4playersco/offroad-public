import React, { type FC } from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = {
  handleClick?: () => void;
  ghost?: boolean;
  className?: string;
  href?: string;
  children: React.ReactNode;
  [rest: string]: unknown;
};

const Button: FC<ButtonProps> = ({
  handleClick = () => {},
  children,
  ghost = false,
  className = "",
  href = "",
  ...rest
}) => {
  const classes = classnames(className, {
    [styles.Button]: !ghost,
    [styles.ButtonGhost]: ghost,
  });

  const btnComponent = href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={handleClick} className={classes} {...rest}>
      {children}
    </button>
  );

  return btnComponent;
};

export default Button;
