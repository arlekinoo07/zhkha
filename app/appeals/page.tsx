import Link from "next/link";

import Header1 from "@/app/main/header/page";
import PageHero from "@/components/site/page-hero";

const appeals = [
  {
    title: "Замена ламп в подъезде",
    status: "В работе",
    date: "24.12.2021",
  },
  {
    title: "Течь в стойке",
    status: "Выполнено",
    date: "23.12.2021",
  },
  {
    title: "Уборка снега в подъезде",
    status: "Новая",
    date: "21.12.2021",
  },
];

export default function AppealsPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header1 />
      <PageHero
        eyebrow="Обращения"
        title="Все обращения жителей в одном окне"
        description="Следите за статусами заявок, просматривайте историю обращений и быстро переходите к созданию новой заявки без лишних шагов."
        actions={[
          { href: "/appeals/new", label: "Подать обращение" },
          { href: "/reports", label: "Открыть отчеты", variant: "secondary" },
        ]}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
                Журнал обращений
              </h2>
              <Link
                href="/appeals/new"
                className="w-fit rounded-md bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-xl"
              >
                Новое обращение
              </Link>
            </div>
            <div className="flex flex-col divide-y divide-gray-200">
              {appeals.map((appeal) => (
                <div
                  key={appeal.title}
                  className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold">{appeal.title}</p>
                    <p className="text-sm text-gray-500">{appeal.date}</p>
                  </div>
                  <span className="w-fit rounded-lg bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {appeal.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
              <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
                Как это работает
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-gray-700">
                <p>1. Вы создаёте обращение с темой и описанием.</p>
                <p>2. Управляющая компания берёт заявку в работу.</p>
                <p>3. После выполнения вы видите обновлённый статус.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
              <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
                Быстрые переходы
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/reports"
                  className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  Посмотреть отчеты
                </Link>
                <Link
                  href="/profil"
                  className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  Открыть профиль
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
