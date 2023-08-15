import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { getProfile } from "@/sanity/sanity.query";
import Image from "next/image";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="yPaddings min-h-full">
      <section className="innerWidth mx-auto flex items-center justify-center">
        {profile && (
          <Image src={profile?.profileImage?.url} width={500} height={500} />
        )}
        <div className="space-y-4">
          <TitleText text={profile?.headline} />
          <TypingText text={profile?.bio} styles={"font-medium text-lg"} />
          <p className="text-xl leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugiat nihil mollitia totam consequuntur molestias ut voluptas quasi
            aliquid sunt!
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
      </section>
    </main>
  );
}
