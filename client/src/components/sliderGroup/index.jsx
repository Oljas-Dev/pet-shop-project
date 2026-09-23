import { useState } from "react";
import SliderImageCard from "../sliderImageCard";
import HeaderWithButton from "../HeaderWithButton";
import {
  CarouselContainer,
  StyledCarousel,
  StyledLeftArrow,
  StyledRightArrow,
  StyledSliderContainer,
} from "./styles";

function SliderGroup({ sliderArray, headerObj }) {
  const [page, setPage] = useState(1);

  if (!sliderArray) return <p>is loading...</p>;

  const imgPerSlide = 4;

  const getSliderPage = (arr) => {
    const start = (page - 1) * imgPerSlide;

    return arr.slice(start, start + imgPerSlide);
  };

  const currentSlides = getSliderPage(sliderArray);

  const maxPage = Math.ceil(sliderArray.length / imgPerSlide);

  function nextSlide() {
    setPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function previousSlide() {
    setPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return (
    <StyledSliderContainer>
      <HeaderWithButton headerObj={headerObj} />

      <CarouselContainer>
        <StyledLeftArrow onClick={previousSlide} $disabled={page === 1} />
        <StyledCarousel>
          {currentSlides.map((slide) => {
            return <SliderImageCard card={slide} key={slide.id} />;
          })}
        </StyledCarousel>
        <StyledRightArrow onClick={nextSlide} $disabled={page === maxPage} />
      </CarouselContainer>
    </StyledSliderContainer>
  );
}

export default SliderGroup;
