// import classnames from 'classnames';

import styles from "./LatestNews.module.scss";
import Container from "~/components/utility/Container";
import Button from "~/components/utility/Button";

const LatestNews = () => {
  return (
    <div className={styles.LatestNews}>
      <Container>
        <ul className={styles.list}>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
        </ul>

        <Button handleClick={() => {}}>See all news</Button>
      </Container>
    </div>
  );
};

export default LatestNews;
