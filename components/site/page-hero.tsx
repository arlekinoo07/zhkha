import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
}: PageHeroProps) {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden md:min-h-[520px]">
      <Image
        src="/block1Bg.jpeg"
        alt="Фон раздела"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/75 to-transparent">
        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[520px] lg:px-10 xl:px-16">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <div className="my-6 h-px w-full max-w-xl bg-white/70"></div>
            <p className="max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
              {description}
            </p>
            {actions.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {actions.map((action) => (
                  <Link
                    key={action.href + action.label}
                    href={action.href}
                    className={
                      action.variant === "secondary"
                        ? "rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
                        : "rounded-md bg-amber-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:shadow-2xl sm:text-base"
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
