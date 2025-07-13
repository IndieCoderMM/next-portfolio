"use client";
import { ProjectsQueryResult } from "@/sanity.types";
import { getLanguageColor } from "@/utils/get-language-color";

const LanguageBar = ({ project }: { project: ProjectsQueryResult[number] }) => {
  if (!project) return null;

  return (
    <div className="absolute inset-x-0 bottom-0 mt-4 flex h-2 overflow-hidden rounded-b-lg">
      {project.languages?.filter(Boolean)?.map((lang) => (
        <div
          key={lang.language}
          className={`group bg-secondary relative h-2`}
          style={{
            width: `${lang.percent}%`,
            backgroundColor: getLanguageColor(lang.language ?? ""),
          }}
        ></div>
      ))}
    </div>
  );
};

export default LanguageBar;
