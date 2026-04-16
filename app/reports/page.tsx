import Link from "next/link";

import Header1 from "@/app/main/header/page";
import PageHero from "@/components/site/page-hero";

const reports = [
  { period: "Декабрь 2021", summary: "Закрыто 34 заявки, 12 остались в работе." },
  { period: "Ноябрь 2021", summary: "Проведены работы по отоплению и электрике." },
  { period: "Октябрь 2021", summary: "Запущен новый формат обработки обращений." },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header1 />
      <PageHero
        eyebrow="Отчеты"
        title="Прозрачная картина по работе управляющей компании"
        description="Здесь собраны обновления по заявкам, выполненным работам и ключевым показателям сервиса для жителей."
        actions={[
          { href: "/appeals", label: "Открыть обращения" },
          { href: "/news/heating-maintenance", label: "Читать новость", variant: "secondary" },
        ]}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Ежемесячные отчеты
            </h2>
            <div className="mt-6 flex flex-col divide-y divide-gray-200">
              {reports.map((report) => (
                <div key={report.period} className="py-5">
                  <p className="text-lg font-semibold">{report.period}</p>
                  <p className="mt-2 text-gray-600">{report.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Быстрые действия
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/appeals/new"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Подать новое обращение
              </Link>
              <Link
                href="/profil"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Перейти в профиль
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
