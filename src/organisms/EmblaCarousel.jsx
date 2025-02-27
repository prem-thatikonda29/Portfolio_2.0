import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projectsList } from "../constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Noise } from "@reactbits/ui";

const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    dragFree: true, // Enable free-form dragging for mobile
  });
  const slides = projectsList;

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full h-auto min-h-[640px] px-4 sm:px-8 md:px-horizontal py-vertical bg-background-light dark:bg-background">
      {/* <Noise opacity={0.15} className="absolute inset-0" /> */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bowlby text-heading-dark dark:text-heading-light mb-bottom">
        Stuff that I&apos;ve Done
      </h1>

      {/* Dots navigation - show on all devices */}
      <div className="flex w-full justify-end space-x-2 mb-4 md:mb-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-background dark:border-background-light ${
              index === selectedIndex ? "bg-background" : "bg-background-light"
            } dark:${
              index === selectedIndex ? "bg-background-light" : "bg-background"
            }`}
          />
        ))}
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-3/4 lg:w-2/3 min-w-0 pl-4"
            >
              <div className="shadow-md text-2xl sm:text-3xl md:text-4xl font-gemunu flex items-center justify-center h-48 sm:h-60 md:h-72 select-none border-2 border-heading-dark dark:border-heading-light text-heading-dark dark:text-heading-light">
                {slide.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons - only show on larger screens */}
      <div className="hidden md:flex w-full gap-4 mt-8">
        <div className="flex w-96 gap-8">
          <button
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border-background dark:border-background-light border-2 disabled:opacity-50"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft
              size={32}
              className="text-heading-dark dark:text-heading-light"
            />
          </button>
          <button
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border-background dark:border-background-light border-2 disabled:opacity-50"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight
              size={32}
              className="text-heading-dark dark:text-heading-light"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
