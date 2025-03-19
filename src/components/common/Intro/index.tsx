import Container from "~/components/utility/Container";
import type { FC } from "react";

import styles from "./Intro.module.scss";

type IntroProps = {
  children: React.ReactNode;
};

const Intro: FC<IntroProps> = ({ children }) => (
  <div className={styles.Intro}>
    <Container small={true}>{children}</Container>
  </div>
);

export default Intro;
