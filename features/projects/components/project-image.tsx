"use client";
import ImageViewer from "@/components/common/image-viewer";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

//TODO: Add project carousel
const ProjectImages = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const atStart = container.scrollLeft === 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;

      const scrollingLeft = event.deltaY < 0;
      const scrollingRight = event.deltaY > 0;

      const shouldScroll =
        (scrollingLeft && !atStart) || (scrollingRight && !atEnd);

      if (shouldScroll) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    };

    const enableScroll = () =>
      container.addEventListener("wheel", handleWheel, { passive: false });
    const disableScroll = () =>
      container.removeEventListener("wheel", handleWheel);

    container.addEventListener("mouseenter", enableScroll);
    container.addEventListener("mouseleave", disableScroll);

    return () => {
      container.removeEventListener("mouseenter", enableScroll);
      container.removeEventListener("mouseleave", disableScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className="flex h-[300px] w-full gap-2 overflow-hidden md:h-[400px]">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-full flex-shrink-0 cursor-zoom-in"
            onClick={() => setOpen(true)}
          >
            <Image
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              width={1000}
              height={500}
              loading="lazy"
              className="h-auto w-full object-cover"
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
            />
          </button>
        ))}
      </div>
      <div className="flex w-full items-center gap-1">
        {Array.from({ length: images.length }).map((_, i) => (
          <button
            key={i}
            className={cn(`bg-secondary-fg h-1 flex-1`)}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <ImageViewer
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        images={images}
      />
    </>
  );
};

export default ProjectImages;
