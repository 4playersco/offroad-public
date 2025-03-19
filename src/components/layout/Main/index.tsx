import React, { type FC } from "react";

import styles from "./Main.module.scss";
import Container from "~/components/utility/Container";

type MainProps = {
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({ children }) => (
  <main className={styles.Main}>
    <Container small={true}>{children}</Container>
  </main>
);

export default Main;
