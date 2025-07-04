"use client";

import Heading from "@/components/common/heading";
import AppWindow from "@/components/common/wireframes/app-window";
import GitHubWireframe from "@/components/common/wireframes/github-wireframe";
import {
  SectionButton,
  SectionContainer,
  SectionContent,
} from "@/components/layout/section";
import { playgroundContent } from "@/config/content/playgroundpage";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconDeviceGamepad,
  IconDeviceGamepad2,
  IconRoute,
  IconWall,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";

enum SandboxId {
  AStar,
  GameOfLife,
  SortingVisualizer,
  PathFinder,
}

type Sandbox = {
  id: SandboxId;
  title: string;
  description: string;
  repository: string;
  icon: JSX.Element;
  content: JSX.Element;
  liveUrl: string;
};

const sandBoxes: Sandbox[] = [
  {
    id: SandboxId.AStar,
    title: "A* Path Finder",
    description:
      "Ultra-fast pathfinding algorithm for 2D grid-based data structures.",
    repository: "algo-lab",
    icon: <IconRoute className={cn("my-2 h-16 w-16")} />,
    liveUrl: "https://indiecodermm.github.io/algo-lab/Path-finder/index.html",
    content: (
      <iframe
        src={"https://indiecodermm.github.io/algo-lab/Path-finder/index.html"}
        width={600}
        height={400}
      />
    ),
  },
  {
    id: SandboxId.GameOfLife,
    title: "Game of Life",
    description:
      "A cellular automaton devised by the British mathematician John Horton Conway in 1970.",
    icon: <IconDeviceGamepad className={cn("my-2 h-16 w-16")} />,
    repository: "algo-lab",
    liveUrl: "https://indiecodermm.github.io/algo-lab/Game-of-life/index.html",
    content: (
      <iframe
        src={"https://indiecodermm.github.io/algo-lab/Game-of-life/index.html"}
        width={600}
        height={400}
      />
    ),
  },
  {
    id: SandboxId.SortingVisualizer,
    title: "WFC Map Generator",
    description: "Generate random maps using Wave Function Collapse algorithm.",
    icon: <IconWall className={cn("my-2 h-16 w-16")} />,
    repository: "algo-lab",
    liveUrl: "https://indiecodermm.github.io/algo-lab/Map-generator/index.html",
    content: (
      <iframe
        src={"https://indiecodermm.github.io/algo-lab/Map-generator/index.html"}
        width={600}
        height={400}
      />
    ),
  },
];

const PlaygroundSection = () => {
  const [currentState, setCurrentState] = useState<SandboxId>(SandboxId.AStar);
  const [currentTab, setCurrentTab] = useState<"content" | "github">("content");

  const currentSandbox = useMemo(() => {
    return sandBoxes.find((s) => s.id === currentState) ?? sandBoxes[0];
  }, [currentState]);

  return (
    <SectionContainer>
      <div className="w-full pb-12">
        <div className="mb-8 gap-10">
          <Heading className="text-left">{playgroundContent.heading}</Heading>
        </div>
        <p className="text-lg font-light sm:w-[80%] md:text-xl lg:text-3xl">
          {playgroundContent.desc}
        </p>
      </div>
      <SectionContent>
        <div className={cn("flex", "lg:gap-12")}>
          <div className={cn("hidden flex-1 flex-col gap-3 pt-8", "lg:flex")}>
            <div className={cn("flex flex-col gap-3")}>
              {sandBoxes.map((sandbox, index) => (
                <SectionButton
                  key={index}
                  title={sandbox.title}
                  icon={sandbox.icon}
                  description={sandbox.description}
                  active={currentState === sandbox.id}
                  onClick={() => setCurrentState(sandbox.id)}
                />
              ))}
            </div>
          </div>
          <div className={cn("w-full", "lg:w-auto")}>
            <div className={cn("-mt-[41px]")}>
              <div className={cn("w-full", "lg:h-[400px] lg:w-[600px]")}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <IconDeviceGamepad2 className="h-4 w-4" />,
                      title: currentSandbox.title,
                      isActive: currentTab === "content",
                      onClick: () => setCurrentTab("content"),
                    },
                    {
                      icon: <IconBrandGithub className="h-4 w-4" />,
                      title: `${currentSandbox.repository} - GitHub`,
                      isActive: currentTab === "github",
                      onClick: () => setCurrentTab("github"),
                    },
                  ]}
                  liveUrl={currentSandbox.liveUrl}
                >
                  {currentTab === "github" && (
                    <GitHubWireframe
                      author="IndieCoderMM"
                      license="MIT"
                      repository={currentSandbox.repository}
                      description={currentSandbox.description}
                    />
                  )}
                  {currentTab === "content" && (
                    <div className={cn("h-full w-full")}>
                      {currentSandbox.content}
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default PlaygroundSection;
