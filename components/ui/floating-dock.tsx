"use client";

import { cn } from "@/utils/cn";
import { IconCategory } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: NavLink[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: NavLink[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconCategory className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: NavLink[];
  className?: string;
}) => {
  const activePath = usePathname();
  let mouseX = useMotionValue(Infinity);

  const isActive = (href: string) => activePath === href;

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "relative mx-auto hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex",
        className,
      )}
    >
      <div className="bg-secondary/40 pointer-events-none absolute inset-0 h-[100%] transform rounded-2xl p-[3px] shadow-sm backdrop-blur-md backdrop-brightness-125 dark:bg-neutral-900/30">
        <div className="h-[100%] w-full rounded-2xl backdrop-blur-lg" />
      </div>
      {items
        .filter((i) => i.type !== "external")
        .map((item) => (
          <IconContainer
            mouseX={mouseX}
            key={item.title}
            {...item}
            isActive={isActive(item.href)}
          />
        ))}
      <hr className="relative mt-3 h-[25px] w-[1px] self-center bg-neutral-600 dark:bg-neutral-400" />
      {items
        .filter((i) => i.type === "external")
        .map((item) => (
          <IconContainer
            mouseX={mouseX}
            key={item.title}
            {...item}
            isActive={isActive(item.href)}
          />
        ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const Elem = href.length > 0 ? Link : "div";

  return (
    <Elem
      href={href.length > 0 ? href : "#"}
      target={href?.startsWith("http") ? "_blank" : "_self"}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "bg-card relative flex aspect-square items-center justify-center rounded-full",
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="text-card-fg bg-card border-secondary/80 absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border px-2 py-0.5 text-xs whitespace-pre"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="active-indicator"
              transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
              style={{ translateY: "3px" }}
              className="bg-primary absolute top-full h-[3px] w-[14px] rounded-lg brightness-110"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Elem>
  );
}
