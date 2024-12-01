import { LinkPreview } from "@/components/ui/link-preview";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "2023",
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
            Led the end-to-end development of <strong>Easy2Success</strong>, a
            multi-featured productivity app that includes goal-setting tools,
            blogs, podcasts, and classrooms. Handle everything from design and
            tech stack selection to system architecture and native app
            development.
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
          Collaborated with developers around the world in building real-world
          projects. Gaining hands-on experience in building web applications,
          utilizing technologies like React, Ruby on Rails, and PostgreSQL.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Late 2022",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Joined Microverse as a full-time software developer. Microverse is a
          global school for remote software developers.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Mastered the full-stack development through a comprehensive curriculum
          which covered front-end and back-end technologies.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          My self-driven journey into programming as a Python Developer allowed
          me to explore various aspects of the field. I created 2D games,
          studied DSA to improve my coding skills and built websites with Django
          framework.
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Built 5+ games with Pygame
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Learned Data Science with Python
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Learned Django and built a full-stack social website
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Built an AI assistant with Python
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Write tutorials about Python and game development
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2017 - 2019",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
          Studied Electronics Engineering at Yangon Technological University for
          3 years.
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Learned C programming
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Built IoT and robotic projects with Arduino
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ 2nd place winner in Mini Rolympics 2017
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
            ⚡ Built a smart parking system with Arduino and MIT App Inventor
          </div>
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <Timeline data={data} />
    </section>
  );
};

export default ExperienceSection;
