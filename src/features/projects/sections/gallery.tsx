import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <section className="borderHr w-full">
      <div className="interWidth borderVr mx-auto w-full">
        <div className="w-full pb-12 pt-10">
          <h1 className="mb-8 text-xl lg:text-6xl">My Projects</h1>
          <p className="text-lg lg:text-2xl">
            Here are some of the projects I have worked on.
          </p>
        </div>
        <ProjectTabs />
      </div>
    </section>
  );
};

export default GallerySection;
