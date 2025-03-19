import classnames from "classnames";

import styles from "./Container.module.scss";
import type { FC } from "react";

type ContainerProps = {
  small?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({
  small = false,
  className = "",
  children,
}) => {
  const classes = classnames({
    [styles.containerSmall]: small,
    [styles.container]: !small,
    [className]: true,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
