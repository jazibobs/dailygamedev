import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="text-sm p-4 md:px-16 md:py-8 m-auto max-w-screen-2xl">
        <p className="mb-1">&copy; 2025 <Link className="underline decoration-white/70 decoration-dotted" href="https://www.jaredrigby.co.uk/">Jared Rigby</Link></p>
        <p className="mb-4">This site is powered by <Link className="underline decoration-white/70 decoration-dotted" href="https://tailwindcss.com/">Tailwind CSS</Link>, <Link className="underline decoration-white/70 decoration-dotted" href="https://nextjs.org/">NextJS</Link> and <Link className="underline decoration-white/70 decoration-dotted" href="https://wordpress.org/">Headless WP</Link></p>
        <Link className="underline decoration-white/70 decoration-dotted" href="mailto:jared.rigby@gameful.dev">Contact me</Link> - {" "}
        <Link className="underline decoration-white/70 decoration-dotted" href="https://www.upwork.com/freelancers/~01d558ee5d817bb2dc?s=1110580755233755136">Hire me on UpWork</Link>
      </div>
    </footer>
  );
}