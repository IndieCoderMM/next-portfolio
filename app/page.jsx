import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-full grid grid-cols-2 place-items-center px-32">
      <Image src="/profile_pic.png" width={500} height={500} />
      <div className="space-y-4">
        <h1 className="font-bold text-5xl">Turning ideas into reality</h1>
        <h2 className="text-2xl font-medium">Web Developer from Myanmar</h2>
        <p className="text-xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat nihil mollitia totam consequuntur molestias ut voluptas quasi aliquid sunt!
        </p>
        <div className="flex">
          {/* Create link to download resume */}
          <a href="/" className="px-8 py-4 bg-dark text-light rounded-full font-medium text-xl">
            Resume
          </a>
          {/* Create link to contact page */}
          <a href="/" className="px-8 py-4 bg-light text-dark rounded-full font-medium text-xl">
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
