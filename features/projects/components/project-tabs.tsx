import { Tabs } from "@/components/ui/tabs";
import { projectTabs } from "@/config/content/projectTabs";

const ProjectTabs = () => {
  return (
    <div className="relative flex h-[80vh] w-full flex-col items-start justify-start [perspective:1000px]">
      <Tabs
        tabs={projectTabs}
        contentClassName="mt-14"
        activeTabClassName="bg-violet-100"
      />
    </div>
  );
};

export default ProjectTabs;
