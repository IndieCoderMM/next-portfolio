import Heading from "@/components/common/heading";
import { LinkPreview } from "@/components/ui/link-preview";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "2024",
    content: (
      <div>
        <div className="mb-4 text-lg font-semibold lg:text-xl">
          Full-Stack Developer{" "}
          <LinkPreview
            url="https://pandoratech.io"
            isStatic={false}
            className="text-primary underline dark:text-primaryDark"
          >
            @Pandora Technology
          </LinkPreview>
        </div>
        <p className="mb-4">
          <span className="font-medium">Pandora Technology</span> is an
          innovative startup in Myanmar dedicated to developing digital products
          that empower youth to enhance productivity and achieve success.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Led the development of <strong>Easy2Success</strong>, a feature-rich
            productivity app that includes goal-setting tools, blogs, podcasts,
            and classrooms.
          </li>
          <li className="mb-2">
            Integrated OpenAI's API to provide personalized suggestions for user
            goals, helping improve success rates through intelligent
            recommendations.
          </li>
          <li className="mb-2">
            Built multiple internal dashboards to streamline the management of
            Pandora’s digital products and user subscriptions.
          </li>
          <li className="mb-2">
            Launched{" "}
            <a
              href="https://tasmoti.com"
              target="_blank"
              className="font-medium text-primary underline dark:text-primaryDark"
            >
              tasmoti.com
            </a>{" "}
            website, a platform for watching and downloading motivational
            videos. Optimized for mobile devices and low-latency networks to
            ensure seamless access and high server responsiveness.
          </li>
          <li className="mb-2">
            Developed an online exam platform enabling students to take exams
            and earn certificates. Implemented randomized question generation,
            automated answer evaluation, and certificate generation.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/screenshots/e2s-playstore.png"
            alt="Easy2Success on Play Store"
            width={500}
            height={400}
            className="h-20 w-full object-contain md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/tas.png"
            alt="TAS Motivational Videos"
            width={500}
            height={400}
            className="h-20 w-full object-contain md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-8">
          Focused on expanding my skills through diverse projects, open-source
          contributions and sharing knowledge with the community.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Built a personal blog website to share my journey and knowledge with
            the community. Wrote articles on web development, programming, and
            productivity tips.
          </li>
          <li className="mb-2">
            Contributed to open-source projects, worked extensively with Next.js
            and explored large-scale system design.
          </li>
          <li className="mb-2">
            Designed and developed responsive, user-friendly websites using
            modern frameworks and tools.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/screenshots/blog-full.webp"
            alt="IndieCoder's Blog"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/convoz-full.webp"
            alt="Convoz Chat App"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/iptracker-full.webp"
            alt="IP Address Tracker"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/billio-full.webp"
            alt="Modern landing page"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <div className="mb-4 text-lg font-semibold lg:text-xl">
          Full-Stack Developer{" "}
          <LinkPreview
            url="https://www.microverse.org"
            isStatic={false}
            className="text-primary underline dark:text-primaryDark"
          >
            @Microverse
          </LinkPreview>
        </div>
        <p className="mb-2 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Microverse is a global, remote learning program that connects aspiring
          developers to collaborative, real-world experiences.
        </p>
        <p className="mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Joining Microverse was a life-changing opportunity that shaped both my
          technical and professional skills.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Collaborated with developers from across the world to build
            full-stack applications using React and Ruby on Rails.
          </li>
          <li className="mb-2">
            Developed a strong understanding of industry standards, including
            best practices for clean code, version control, and scalable
            architecture.
          </li>
          <li className="mb-2">
            Worked in a professional remote environment, utilizing tools like
            Kanban boards, daily stand-ups, and time-blocking techniques to stay
            organized and productive.
          </li>
          <li className="mb-2">
            Improved problem-solving skills through pair programming, code
            reviews, and collaborative problem solving.
          </li>
          <li className="mb-2">
            Gained experience in balancing technical tasks with effective
            communication, laying a solid foundation for working in diverse,
            distributed teams.
          </li>
        </ul>
        <div className="grid grid-cols-3 place-items-center gap-4">
          <Image
            src="/assets/badge-full-stack.png"
            alt="bento template"
            width={200}
            height={200}
            className="lg:w-50 h-auto w-20 object-contain md:w-40"
          />
          <Image
            src="/assets/badge-capstone.png"
            alt="cards template"
            width={200}
            height={200}
            className="lg:w-50 h-auto w-20 object-contain md:w-40"
          />
          <Image
            src="/assets/badge-ror.png"
            alt="cards template"
            width={200}
            height={200}
            className="lg:w-50 h-auto w-20 object-contain md:w-40"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="mb-4">
          I discovered my passion for coding while building games, which turned
          into a fun way to learn. Along the way, I explored various algorithms
          and improved my skills through hands-on projects from YouTube and
          Coursera.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Built 10+ games using <em>Pygame</em> and <em>Raylib (C)</em>.
          </li>
          <li className="mb-2">
            Learned Django frameworkd, and core data sciene concepts and tools
            like Numpy and Pandas <strong>Coursera</strong>.
          </li>
          <li className="mb-2">
            Developed an AI assistant with Python and OpenAI's Davinci engine.
          </li>
          <li className="mb-2">
            Wrote tutorials about Python and game development.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/screenshots/smartone.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/zombieland.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <div className="col-span-2 grid grid-cols-3 place-items-center gap-4">
            <Image
              src="/screenshots/demo_tanks.gif"
              alt="Top-down tank shooters"
              width={300}
              height={300}
              className="h-auto w-full rounded-lg object-cover sm:w-auto md:h-56 lg:h-64"
            />
            <Image
              src="/screenshots/demo_bridge.gif"
              alt="BridgeHero Game"
              width={300}
              height={300}
              className="h-auto w-full rounded-lg object-cover sm:w-auto md:h-56 lg:h-64"
            />
            <Image
              src="/screenshots/demo_tictactoe.gif"
              alt="Tictactoe AI"
              width={300}
              height={300}
              className="h-auto w-full rounded-lg object-cover sm:w-auto md:h-56 lg:h-64"
            />
          </div>
          <Image
            src="/screenshots/demo_gameboy.gif"
            alt="Platformer game in raylib"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/breakout.png"
            alt="Breakout game"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <div className="section-badge">
          <span>My Journey</span>
        </div>
        <Heading as="h2" id="experience" className="mb-4">
          How I got here
        </Heading>
        <p className="mx-auto max-w-2xl text-center text-sm text-neutral-700 dark:text-neutral-300 md:text-base lg:text-xl">
          I have one simple rule: learn from every challenge and deliver my
          best.
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default ExperienceSection;
