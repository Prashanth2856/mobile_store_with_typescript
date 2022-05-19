import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";

export const Carousell:React.FC = () => {
  return (
    <div>
      <Carousel className={styles.carouselContainer}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220329_12784ae37b0927aa42f7c0975967961d.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220329_605c174db4555415862af683f1388327.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220310_baa76cc3c7bc2923e72745de613a10c2.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220318_33ed314f3978f2fc136c67ade0787b56.webp"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220318_e173c41e87b9cbcbff79818dfea56c50.webp"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220118_26297ace34c02c3659153ac0f6dba9f5.webp"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220117_7ee3f3260641ef6fbdc685904d4b2ad9.webp"
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/banners/image_20220111_ccef293c5fc4ddf8750a332baebd333e.webp"
            alt="Eighth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
