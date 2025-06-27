import Image from "next/image";

const DummyContent = () => {
  return (
    <Image
      src="https://assets.aceternity.com/templates/startup-1.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 bottom-0 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};

export const projectTabs = [
  {
    title: "Mobile App",
    value: "mobile-app",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Web App",
    value: "web-app",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Landing Page",
    value: "landing-page",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Content tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Random tab</p>
        <DummyContent />
      </div>
    ),
  },
];

export const products = [
  {
    title: "Metaversus",
    link: "https://gomoonbeam.com",
    thumbnail: "/screenshots/metaversus.png",
    logo: "/assets/logos/logoipsum-223.svg",
  },
  {
    title: "Convoz",
    link: "https://cursor.so",
    thumbnail: "/screenshots/convoz.png",
    logo: "/assets/logos/logoipsum-224.svg",
  },
  {
    title: "Billio",
    link: "https://userogue.com",
    thumbnail: "/screenshots/billio.png",
    logo: "/assets/logos/logoipsum-245.svg",
  },

  {
    title: "GitDash",
    link: "https://editorially.org",
    thumbnail: "/screenshots/gitdash.png",
    logo: "/assets/logos/logoipsum-247.svg",
  },
  {
    title: "Gamezon",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/screenshots/gamezon.png",
    logo: "/assets/logos/logoipsum-248.svg",
  },
  {
    title: "Billio",
    link: "https://algochurn.com",
    thumbnail: "/screenshots/billio.png",
    logo: "/assets/logos/logoipsum-249.svg",
  },
  {
    title: "Metaversus",
    link: "https://ui.aceternity.com",
    thumbnail: "/screenshots/metaversus.png",
    logo: "/assets/logos/logoipsum-292.svg",
  },
  {
    title: "Gamezon",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/screenshots/gamezon.png",
    logo: "/assets/logos/logoipsum-294.svg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    logo: "/assets/logos/logoipsum-295.svg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    logo: "/assets/logos/logoipsum-295.svg",
  },
  {
    title: "GitDash",
    link: "https://app.pixelperfect.quest",
    logo: "/assets/logos/logoipsum-295.svg",
    thumbnail: "/screenshots/gitdash.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    logo: "/assets/logos/logoipsum-296.svg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",

    logo: "/assets/logos/logoipsum-296.svg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",

    logo: "/assets/logos/logoipsum-296.svg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    logo: "/assets/logos/logoipsum-296.svg",
  },
];
