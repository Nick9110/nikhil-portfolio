export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-7 flex flex-col md:flex-row justify-between items-center gap-3 text-muted text-[0.62rem] tracking-[0.08em]">
      <span>© 2025 Nikhil Yadav — All rights reserved</span>
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
        Built with Next.js · Ghaziabad, IN
      </span>
    </footer>
  );
}
