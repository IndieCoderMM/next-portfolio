import { Tabs } from "@/components/ui/tabs";
import { projectTabs } from "@/config/projectData";

const GallerySection = () => {
  return (
    <section className="borderHr w-full">
      <div className="interWidth borderVr b relative mx-auto flex h-[80vh] w-full flex-col items-start justify-start [perspective:1000px]">
        <Tabs tabs={projectTabs} />
      </div>
    </section>
  );
};

export default GallerySection;
