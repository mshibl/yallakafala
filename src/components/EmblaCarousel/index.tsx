import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { IconButton } from "@mui/material";
import Image from "next/image";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
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

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
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

export const NextButton = (props: {
  onClick: () => void;
  disabled: boolean;
  children?: React.ReactNode;
}) => {
  const { children, ...restProps } = props;

  return (
    <IconButton type="button" {...restProps}>
      <Image
        src="/images/right-arrow.svg"
        alt="Next Slide"
        width={60}
        height={60}
      />
    </IconButton>
  );
};

export const PrevButton = (props: {
  onClick: () => void;
  disabled: boolean;
  children?: React.ReactNode;
}) => {
  const { children, ...restProps } = props;

  return (
    <IconButton type="button" {...restProps}>
      <Image
        src="/images/left-arrow.svg"
        alt="Previous Slide"
        width={60}
        height={60}
      />
    </IconButton>
  );
};
