import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center border px-32 py-10">
      <Image src="/profile_pic.png" width={500} height={500} />
      <div className="space-y-4">
        <TitleText text="Turning Ideas Into Beautiful Websites" />
        <TypingText
          text="I'm a web developer from Myanmar"
          styles={"font-medium text-lg"}
        />
        <p className="text-xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat
          nihil mollitia totam consequuntur molestias ut voluptas quasi aliquid
          sunt!
        </p>
        <div className="flex">
          {/* Create link to download resume */}
          <a
            href="/"
            className="rounded-full bg-dark px-8 py-4 text-xl font-medium text-light"
          >
            Resume
          </a>
          {/* Create link to contact page */}
          <a
            href="/"
            className="rounded-full bg-light px-8 py-4 text-xl font-medium text-dark"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
