import Image from "next/image";
import Link from "next/link";

const appeals = [
  { id: "1.", topic: "Замена ламп в подъезде", status: "В работе", statusClass: "bg-green-500", date: "24.12.2021" },
  { id: "2.", topic: "Течь в стойке", status: "Выполнено", statusClass: "bg-blue-600", date: "23.12.2021" },
  { id: "3.", topic: "Уборка снега в подъезде", status: "Новая", statusClass: "bg-amber-500", date: "21.12.2021" },
];

const categories = [
  { image: "/photo1B3.png", alt: "Сантехника", title: "Сантехника" },
  { image: "/photo2B3.png", alt: "Электрика", title: "Электрика" },
  { image: "/photo3B3.png", alt: "Прочее", title: "Прочее" },
  { image: "/photo4B3.png", alt: "Уборка", title: "Уборка" },
];

const newsItems = [
  { date: "25.12.2021", title: "Профилактика отопления" },
  { date: "25.12.2021", title: "Профилактика отопления" },
];

const statusLegend = [
  { color: "bg-yellow-300", label: "Новые" },
  { color: "bg-red-500", label: "Отклонено" },
  { color: "bg-blue-700", label: "В работе" },
  { color: "bg-green-500", label: "Выполнено" },
];

export default function Block3() {
    return(
        <section className="bg-gray-200 px-4 pb-10 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 xl:flex-row">
                <div className="flex min-w-0 flex-1 flex-col gap-6">
                    <div className="flex flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] sm:px-8">
                        <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Последние обращения</p>
                        <div className="flex flex-col divide-y divide-gray-200">
                            <div className="hidden grid-cols-[80px_minmax(0,1fr)_150px_120px] gap-4 border-y border-gray-300 py-4 text-sm font-bold text-gray-700 lg:grid">
                                <p>№</p>
                                <p>Тема</p>
                                <p>Статус</p>
                                <p>Дата</p>
                            </div>
                            {appeals.map((appeal) => (
                                <div key={appeal.id} className="grid gap-3 rounded-xl py-4 transition duration-300 hover:translate-x-1 hover:bg-blue-50/60 lg:grid-cols-[80px_minmax(0,1fr)_150px_120px] lg:items-center lg:gap-4">
                                    <p className="font-semibold text-gray-500 lg:text-black">{appeal.id}</p>
                                    <p className="font-semibold">{appeal.topic}</p>
                                    <span className={`w-fit rounded-lg px-4 py-2 text-center text-sm font-bold text-white ${appeal.statusClass}`}>
                                        {appeal.status}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-500 lg:text-base">{appeal.date}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/appeals" className="w-fit cursor-pointer text-sm font-bold text-blue-500 transition duration-300 hover:translate-x-1 hover:underline sm:self-end sm:text-base">Смотреть все <span className="text-black">{`>`}</span></Link>
                    </div>
                    <div className="flex flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] sm:px-8">
                        <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Категории обращений</p>
                        <div className="h-px w-full bg-gray-300"></div>
                        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                            {categories.map((category) => (
                                <div key={category.title} className='flex items-center gap-4 rounded-lg bg-blue-100 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-200/80'>
                                    <Image src={category.image} alt={category.alt} priority width={32} height={30}></Image>
                                    <p className='text-lg font-semibold text-blue-400 sm:text-xl'>{category.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] sm:px-8'>
                        <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Новости</p>
                        <div className="h-px w-full bg-gray-300"></div>
                        <div className='flex flex-col divide-y divide-gray-300 pb-4'>
                            {newsItems.map((item, index) => (
                                <div key={`${item.date}-${index}`} className='flex flex-col gap-2 rounded-xl py-4 transition duration-300 hover:translate-x-1 hover:bg-blue-50/60 sm:flex-row sm:items-center sm:gap-6'>
                                    <p className='text-base font-semibold sm:text-lg'>{item.date}</p>
                                    <Link href="/news/heating-maintenance" className='cursor-pointer text-base font-semibold text-blue-400 underline underline-offset-4 transition duration-300 hover:text-blue-600 sm:text-lg'>{item.title}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex w-full max-w-[520px] flex-col gap-6 xl:w-[34%]'>
                    <div className='flex flex-col gap-8 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(245,158,11,0.18)] sm:px-8'>
                        <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Форма подачи обращения</p>
                        <div className="h-px w-full bg-gray-300"></div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>ФИО:</p>
                                <input className='w-full rounded-lg border border-gray-400 px-3 py-2 outline-black'></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Адрес:</p>
                                <input className='w-full rounded-lg border border-gray-400 px-3 py-2 outline-black'></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Тема обращения:</p>
                                <input className='w-full rounded-lg border border-gray-400 px-3 py-2 outline-black'></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Описание проблемы:</p>
                                <textarea className='h-28 w-full rounded-lg border border-gray-400 px-3 py-2 outline-black'></textarea>
                            </div>
                            <Link href="/appeals/new" className='mt-2 inline-flex w-full cursor-pointer justify-center rounded-lg bg-amber-500 px-6 py-3 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl sm:w-fit'>Отправить</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] sm:px-8'>
                        <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Статистика</p>
                        <div className="h-px w-full bg-gray-300"></div>
                        <p className="text-center text-xl font-semibold sm:text-2xl">Статусы заявок</p>
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                            <Image src="/chart.png" alt="diagramma" priority width={200} height={100} className="mx-auto h-auto w-full max-w-[220px]"></Image>
                            <div className="flex flex-col gap-3">
                                {statusLegend.map((item) => (
                                    <div key={item.label} className="flex items-center gap-4 rounded-lg px-2 py-1 transition duration-300 hover:translate-x-1 hover:bg-blue-50/60">
                                        <div className={`h-8 w-8 border border-black transition duration-300 hover:scale-110 ${item.color}`}></div>
                                        <p className="font-semibold">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
