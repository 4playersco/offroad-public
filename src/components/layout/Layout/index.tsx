import React, { type FC } from "react";

import Header from "../Header";
import Footer from "../Footer";

// import styles from './Layout.module.scss';

type LayoutProps = {
  pageTitle?: string;
  showSmallHeader?: boolean;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({
  showSmallHeader = false,
  pageTitle = "",
  children,
}) => {
  return (
    <div>
      <Header pageTitle={pageTitle} small={showSmallHeader} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
