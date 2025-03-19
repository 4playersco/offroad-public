import { Carousel } from "nuka-carousel";

import Container from "~/components/utility/Container";
import { getGalleryImages } from "~/actions";

import styles from "./Gallery.module.scss";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryImgs, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiles = async () => {
      setLoading(true);
      const files = await getGalleryImages();
      setGalleryImages(files);
      setLoading(false);
    };
    loadFiles();
  }, []);

  return (
    <Container>
      {" "}
      <div className={styles.Gallery} />
      <div className={styles.galleryWrapper}>
        {!loading && (
          <Carousel autoplay={true} showDots={true}>
            {galleryImgs.map((img, index) => {
              // const { fluid } = img.node.childImageSharp;
              return (
                <img key={index} src={img} alt={`Fourwheeling #${index + 1}`} />
              );
            })}
          </Carousel>
        )}
      </div>
    </Container>
  );
};

export default Gallery;
