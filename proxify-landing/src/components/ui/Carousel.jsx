import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children, noScroll = true, noNavigaters = true, btnClassName = '', scrollClassName = '', scrollParent = '', arrowClassName = '' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  console.log({ scrollProgress })

  useEffect(() => {
    if (!emblaApi) return;

    const updateProgress = () => {
      const progress = emblaApi.scrollProgress();
      setScrollProgress(progress);
    };

    emblaApi.on("select", updateProgress);
    updateProgress();

    return () => {
      emblaApi.off("select", updateProgress);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    emblaApi && emblaApi.scrollPrev();
  };
  const scrollNext = () => {
    emblaApi && emblaApi.scrollNext();
  };

  return (
    <div className={`relative flex flex-col gap-6 w-full text-white`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children}
        </div>
      </div>
      {noNavigaters && <div className="mt-8 flex items-center">
        {noScroll && <div className={`h-1 max-md:w-[100%] w-[80%] bg-gray-700 ${scrollParent}`}>
          <div
            className={`h-1 bg-primary-600 transition-all duration-200 ${scrollClassName}`}
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>}
        <div className="absolute right-0 flex gap-4 max-md:hidden">
          <button
            onClick={scrollPrev}
            className={`w-12 h-12 group rounded-full border-[2px] border-primary-600 flex items-center justify-center hover:bg-primary-600 transition ${btnClassName}`}
          >
            <ChevronLeft size={20} className={`${arrowClassName}`} />
          </button>
          <button
            onClick={scrollNext}
            className={`w-12 h-12 group rounded-full border-[2px] border-primary-600 flex items-center justify-center hover:bg-primary-600 transition ${btnClassName}`}
          >
            <ChevronRight size={20} className={`${arrowClassName}`} />
          </button>
        </div>
      </div>}
    </div>
  );
}
