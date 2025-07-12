"use client";
import { ProjectsQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import { motion, useMotionValue } from "motion/react";

const languageColors = {
  javascript: "#f1e05a",
  typescript: "#2b7489",
  python: "#3572A5",
  css: "#563d7c",
  html: "#e34c26",
  ruby: "#701516",
};

const getLanguageColor = (language: string) => {
  const lang = language.toLowerCase();
  if (Object.keys(languageColors).includes(lang)) {
    return languageColors[lang as keyof typeof languageColors];
  }
  return "#333";
};

const LanguageBar = ({ project }: { project: ProjectsQueryResult[number] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const tooltipWidth = 0;
    const tooltipHeight = 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    //+12 is added to give a spice between cursor and tooltip
    let tooltipX = clientX + 12;
    let tooltipY = clientY + 12;

    // Check if tooltip exceeds the right side of the viewport
    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = clientX - tooltipWidth - 10;
    }

    // Check if tooltip exceeds the bottom of the viewport
    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = viewportHeight - tooltipHeight - 10;
    }

    x.set(tooltipX);
    y.set(tooltipY);
  };

  if (!project) return null;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-x-0 bottom-0 mt-4 flex h-2 overflow-hidden rounded-b-lg"
    >
      {project.languages?.filter(Boolean)?.map((lang) => (
        <div
          key={lang.language}
          className={`group bg-secondary relative h-2`}
          style={{
            width: `${lang.percent}%`,
            backgroundColor: getLanguageColor(lang.language ?? ""),
          }}
        >
          <motion.div
            style={{
              pointerEvents: "none",
              left: x,
              top: y,
            }}
            className={cn(`fixed z-50 opacity-0 group-hover:opacity-100`)}
          >
            <div className="bg-secondary rounded-lg p-1 text-xs">
              <span>{lang.language}</span>
              <span> {lang.percent}%</span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default LanguageBar;
