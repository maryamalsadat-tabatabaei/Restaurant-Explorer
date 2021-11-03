//GalleyComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col,
  Row
} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';



const items = [
  {
    src: 'images/c4.jpg',
    altText: 'Slide 1',
    caption: 'Pizza Summer'
  },
  {
    src: 'images/c2.jpg',
    altText: 'Slide 2',
    caption: 'Original Italy'
  },
  {
    src: 'images/c3.jpg',
    altText: 'Slide 3',
    caption: 'SuperMF BBQ'
  }
];

const Galley = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {

    return (

      <CarouselItem className="mb-5"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <Row>
	      <Col md="4">
	      	<img src={baseUrl + item.src} alt={item.altText} width="400" height="300" />
	      </Col>
	      <Col  md="4">
	      	<img src={baseUrl + item.src} alt={item.altText} width="400" height="300" />
	      </Col>
	      <Col  md="4">
	      	<img src={baseUrl + item.src} alt={item.altText} width="400" height="300" />
	      </Col>
      </Row>
       
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl  direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export default Galley;   