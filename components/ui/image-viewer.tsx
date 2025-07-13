import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";

const ImageViewer = ({
  open,
  index,
  onClose,
  images,
}: {
  open: boolean;
  index: number;
  onClose: () => void;
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 right-0 bottom-0 left-0 z-[999] hidden items-center justify-center bg-black/95 backdrop-blur-xl md:flex"
        >
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-4 right-5 z-[99]`}
          >
            <IconX className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-4 p-2 text-white/75 hover:text-white disabled:text-white/40"
            disabled={images.length === 0 || currentIndex === 0}
          >
            <IconChevronLeft size={24} />
          </button>

          <Image
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            width={1000}
            height={700}
            className="max-h-[85vh] max-w-[80vw] rounded-xl border border-white/10 object-contain"
          />

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 p-2 text-white/75 hover:text-white disabled:text-white/40"
            disabled={images.length === 0 || currentIndex === images.length - 1}
          >
            <IconChevronRight size={24} />
          </button>

          <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(ImageViewer);
