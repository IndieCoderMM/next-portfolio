import { ProjectsQueryResult } from "@/sanity.types";
import { useEffect, useMemo, useState } from "react";

export function useProjectSearch(projects: ProjectsQueryResult) {
  const [filtered, setFiltered] = useState<ProjectsQueryResult>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    setFiltered(projects);
  }, [projects]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (debouncedSearch.trim() === "") {
        setFiltered(projects);
      } else {
        const filteredProjects = projects.filter(
          (p) =>
            p.name?.toLowerCase().includes(debouncedSearch) ||
            p.tagline?.toLowerCase().includes(debouncedSearch) ||
            p.slug?.toLowerCase().includes(debouncedSearch) ||
            p.tags?.some((tag) =>
              tag.toLowerCase().includes(debouncedSearch),
            ) ||
            p.languages?.some((l) =>
              l.language?.toLowerCase().includes(debouncedSearch),
            ),
        );
        setFiltered(filteredProjects);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [debouncedSearch]);

  // Tags change based on filtered projects
  const tags = useMemo(() => {
    const allTags = filtered.flatMap((project) => project.tags || []);
    return Array.from(new Set(allTags.map((tag) => tag.toLowerCase())));
  }, [filtered]);

  // Double filtering: first by search, then by tags
  const activeProjects = useMemo(() => {
    if (activeTags.length === 0) {
      return filtered;
    }
    return filtered.filter((project) =>
      project.tags?.some((tag) => activeTags.includes(tag.toLowerCase())),
    );
  }, [filtered, activeTags]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.trim() === "") {
      setFiltered(projects);
      return;
    }

    setDebouncedSearch(searchTerm);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;
    let sortedProjects = [...filtered];

    if (sortValue === "recent") {
      sortedProjects.sort(
        (a, b) =>
          new Date(b.developedAt ?? "").getTime() -
          new Date(a.developedAt ?? "").getTime(),
      );
    } else if (sortValue === "alphabetical") {
      sortedProjects.sort((a, b) => a.name?.localeCompare(b.name || "") || 0);
    }

    setFiltered(sortedProjects);
  };

  const handleTagChange = (tag: string) => {
    let newTags = [...activeTags];
    if (activeTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
      setActiveTags(newTags);
    } else {
      newTags.push(tag);
      setActiveTags(newTags);
    }
  };

  const clearTags = () => {
    setActiveTags([]);
  };

  const resetSearch = () => {
    setDebouncedSearch("");
    setFiltered(projects);
    setActiveTags([]);
  };

  return {
    activeProjects,
    tags,
    activeTags,
    handleSearch,
    handleSortChange,
    handleTagChange,
    clearTags,
    resetSearch,
  };
}
