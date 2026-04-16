import Link from "next/link";

import Header1 from "@/app/main/header/page";
import PageHero from "@/components/site/page-hero";

const steps = [
  "Укажите ФИО и адрес проживания.",
  "Опишите проблему коротко и по делу.",
  "Выберите удобный способ связи.",
  "Отправьте обращение и отслеживайте статус в личном кабинете.",
];

export default function NewAppealPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header1 />
      <PageHero
        eyebrow="Новое обращение"
        title="Подайте заявку в пару шагов"
        description="Подготовили отдельный экран, чтобы жителю было легко понять, как правильно описать проблему и что произойдёт после отправки."
        actions={[
          { href: "/appeals", label: "Ко всем обращениям", variant: "secondary" },
          { href: "/profil", label: "Открыть профиль" },
        ]}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Что нужно подготовить
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl bg-blue-50 px-4 py-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="font-medium text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-8">
            <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              Дальше по маршруту
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/appeals"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Вернуться к списку обращений
              </Link>
              <Link
                href="/news/heating-maintenance"
                className="rounded-xl bg-blue-50 px-4 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Прочитать актуальную новость
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
