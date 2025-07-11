import { Tabs } from "@/components/ui/tabs";
import { projectTabs } from "@/config/content/projectTabs";

const ProjectTabs = () => {
  return (
    <div className="relative mx-auto flex h-[80vh] w-full max-w-[1000px] flex-col items-start justify-start [perspective:1000px]">
      <Tabs
        tabs={projectTabs}
        contentClassName="mt-14"
        activeTabClassName="bg-secondary"
      />
    </div>
  );
};

export default ProjectTabs;
