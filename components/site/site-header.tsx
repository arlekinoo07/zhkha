import { House, UserRoundPen } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/appeals", label: "Обращения" },
  { href: "/reports", label: "Отчеты" },
  { href: "/profil", label: "Профиль" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-16">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-4 rounded-full px-2 py-1 text-blue-500 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-blue-50"
        >
          <House className="text-blue-500" />
          <span className="text-sm font-bold sm:text-base">
            УК &quot;Наш Дом&quot;
          </span>
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
          <nav className="flex flex-wrap gap-2 text-sm font-semibold text-blue-500 sm:gap-3 sm:text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex rounded-full px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-blue-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/profil"
            aria-label="Открыть профиль"
            className="inline-flex w-fit rounded-full p-2 text-blue-500 transition duration-300 hover:-translate-y-0.5 hover:scale-110 hover:bg-blue-50"
          >
            <UserRoundPen className="text-blue-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}
