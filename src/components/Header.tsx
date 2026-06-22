const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#reviews", label: "후기" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-[30px] py-5">
      <div className="font-extrabold tracking-[-0.01em]">
        LEE KIHOON
        <span className="block font-mono text-[10px] font-normal tracking-[0.2em] text-muted">
          MARKETER
        </span>
      </div>
      <nav className="flex gap-6 font-mono text-xs tracking-[0.05em] max-[680px]:gap-3.5 max-[680px]:text-[11px]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-mark-deep"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
