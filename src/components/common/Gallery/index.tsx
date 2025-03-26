import { Carousel } from "nuka-carousel";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  const galleryImgs = [...new Array(15)].map((_, index) => {
    return `/assets/images/gallery/slideshow-${index + 1}.jpg`;
  });

  return (
    <div className={styles.Gallery}>
      <div className={styles.galleryWrapper}>
        <Carousel
          autoplay={true}
          showDots={true}
          showArrows="hover"
          wrapMode="wrap"
          swiping={true}
        >
          {galleryImgs.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={`Fourwheeling #${index + 1}`}
                width="800"
                height="600"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
