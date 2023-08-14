import AnimatedNumber from "@/components/AnimatedNumber";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-16 px-32 py-8">
      <h1 className="text-5xl font-bold">About Me</h1>
      <div className="grid w-full grid-cols-12 gap-16">
        <div className="col-span-5 flex flex-col items-start justify-start">
          <h2 className="text-2xl font-semibold">Web Developer from Myanmar</h2>
          <p className="text-xl font-medium leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            atque aperiam earum aliquid! Vero assumenda ut eligendi ad
            praesentium nulla neque. Aspernatur reprehenderit vitae dolore
            dicta? Error ab cum facilis animi exercitationem ipsum fugit tenetur
            velit, consectetur odit facere similique numquam perspiciatis sunt
            hic iusto rerum! Soluta tempore iste excepturi!
          </p>
        </div>
        <div className="col-span-4 flex flex-col items-start justify-start rounded-2xl border-2 border-dark bg-light p-8">
          <Image src="/profile_pic.png" width={500} height={500} />
        </div>
        <div className="col-span-3 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumber value={40} />+
            </span>
            <h3 className="text-xl font-medium text-dark/75">
              Projects Completed
            </h3>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">40+</span>
            <h3 className="text-xl font-medium text-dark/75">
              Projects Completed
            </h3>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">40+</span>
            <h3 className="text-xl font-medium text-dark/75">
              Projects Completed
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
