import Link from "next/link";

import Header1 from "@/app/main/header/page";
import PageHero from "@/components/site/page-hero";

export default function HeatingMaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header1 />
      <PageHero
        eyebrow="Новости"
        title="Профилактика отопления"
        description="На этой странице собрана детальная информация по профилактическим работам, срокам и тому, как это влияет на жителей дома."
        actions={[
          { href: "/reports", label: "К отчетам" },
          { href: "/appeals/new", label: "Подать обращение", variant: "secondary" },
        ]}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Что происходит
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-gray-700">
              <p>
                В доме проводится плановая профилактика системы отопления. Это
                нужно, чтобы снизить риск аварийных отключений в сезон и быстрее
                реагировать на локальные неполадки.
              </p>
              <p>
                Работы затрагивают проверку стояков, узлов учёта и качества
                циркуляции в магистралях. На период обслуживания возможны
                краткие технические отключения.
              </p>
              <p>
                Если вы заметили нестабильную температуру в квартире или шум в
                трубах, лучше сразу отправить обращение через личный кабинет.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Полезно рядом
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/appeals"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Открыть журнал обращений
              </Link>
              <Link
                href="/appeals/new"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Сообщить о проблеме
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
