import TitleText from "@/components/TitleText";
import ServiceCard from "./ServiceCard";
import ServiceBar from "./ServiceBar";

const ServiceData = [
  {
    title: "Web Application Development",
    proficiency: 100,
    description:
      "Crafting responsive and dynamic web applications tailored to your unique business needs. I specialize in using cutting-edge technologies like React, Next.js, and Redux to create seamless user experiences.",
    color: "bg-green-400", // White text color
  },
  {
    title: "API Integration",
    proficiency: 95,
    description:
      "Integrating third-party APIs and services to enhance your application's functionality. Whether it's payment gateways, social media, or REST APIs, I make your app connect seamlessly.",
    color: "bg-yellow-300", // Gold text color
  },
  {
    title: "UI/UX Design",
    proficiency: 90,
    description:
      "Creating visually appealing and user-friendly interfaces that leave a lasting impression. I collaborate with designers to translate concepts into pixel-perfect designs, ensuring a delightful user experience.",
    color: "bg-pink-400", // Green text color
  },
  {
    title: "Backend Development",
    proficiency: 80,
    description:
      "Building robust server-side solutions using Node.js or Ruby on Rails. I design efficient APIs, implement authentication systems, and optimize database performance to ensure your application runs smoothly.",
    color: "bg-red-300", // Reddish-Orange text color
  },
  {
    title: "Database Design & Management",
    proficiency: 75,
    description:
      "Designing and optimizing databases to store, retrieve, and manage your data efficiently. I work with SQL and GraphQL databases, including PostgreSQL, GrafBase, and Firebase, ensuring data integrity and security.",
    color: "bg-sky-300", // Sky Blue text color
  },
];

const Services = () => {
  return (
    <section className="paddings bg-primary">
      <div className="innerWidth mx-auto mb-[150px]  flex flex-col gap-10 xl:flex-row">
        <div className="flex flex-1 flex-col gap-4 xl:order-last">
          {ServiceData.map((service, index) => (
            <ServiceBar
              key={index}
              title={service.title}
              percentage={service.proficiency}
              barStyles={service.color}
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col">
          <TitleText
            text="Services I Offer"
            styles="mb-8 text-center text-light xl:text-left"
          />
          <p className="block text-center text-lg leading-loose text-light xl:text-left">
            Whether you're starting from scratch with a brand-new website or
            seeking a fresh look for your existing online presence, I provide
            end-to-end solutions that meet your goals. Let's build something
            amazing!
          </p>
        </div>
      </div>
      <div className="interWidth mx-auto flex flex-wrap items-center justify-center gap-8">
        {ServiceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
