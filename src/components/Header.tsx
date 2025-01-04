import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white font-mono">
      <div className="flex flex-col md:flex-row items-start gap-8 justify-between md:items-center p-4 md:px-16 md:py-8 m-auto max-w-screen-2xl">
        <div>
          <h1 className="text-xl md:text-3xl">
            <Link className="decoration-white/70 underline decoration-dotted" href="https://dailydev.jaredrigby.co.uk">Daily Game Dev 2025</Link>
          </h1>
          <h2 className="text-lg md:text-xl text-white/70">
            <Link className="decoration-white/70 underline decoration-dotted" href="https://jaredrigby.co.uk">By Jared Rigby</Link>
          </h2>
        </div>
        <nav>
          <Link className="decoration-white/70 underline decoration-dotted" href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}