import GitHubCard from "@/components/common/github-card";
import { ProductsQueryResult } from "@/sanity.types";

const ProjectRepos = ({ products }: { products: ProductsQueryResult }) => {
  return (
    <section className="inner-container">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        {products.map((product) => (
          <GitHubCard key={product.id} project={product} />
        ))}
      </div>
    </section>
  );
};

export default ProjectRepos;
