"use client";
import ImageViewer from "@/components/ui/image-viewer";
import { cn } from "@/utils/cn";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
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
    const handleResize = () => {
      if (ref.current) {
        ref.current.scrollLeft = 0;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (i: number) => {
    if (ref.current) {
      ref.current.scrollLeft = i * ref.current.clientWidth;
      setIndex(i);
    }
  };

  const handleLeft = () => {
    if (ref.current) {
      const newIndex = (index - 1 + images.length) % images.length;
      ref.current.scrollLeft = newIndex * ref.current.clientWidth;
      setIndex(newIndex);
    }
  };

  const handleRight = () => {
    if (ref.current) {
      const newIndex = (index + 1) % images.length;
      ref.current.scrollLeft = newIndex * ref.current.clientWidth;
      setIndex(newIndex);
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-1">
        <div
          ref={ref}
          className="flex h-[300px] w-full overflow-hidden md:h-[400px]"
        >
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
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

          <button
            type="button"
            onClick={handleLeft}
            className="bg-secondary-fg/20 hover:bg-secondary-fg/40 absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleRight}
            className="bg-secondary-fg/20 hover:bg-secondary-fg/40 absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex w-full items-center gap-1">
          {Array.from({ length: images.length }).map((_, i) => (
            <button
              key={i}
              className={cn(
                `bg-secondary-fg/40 h-1 flex-1`,
                i === index ? "bg-secondary-fg" : "hover:bg-secondary-fg/70",
              )}
              onClick={() => handleScroll(i)}
            />
          ))}
        </div>
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
