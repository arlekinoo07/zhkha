export default function Block2() {
    return(
        <section className="bg-gray-200 px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-xl bg-white px-6 py-4 shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]">
                        <p className="text-base font-bold text-blue-500 sm:text-lg lg:text-xl">Всего обращений: <span className="text-black">128</span></p>
                    </div>
                    <div className="rounded-xl bg-white px-6 py-4 shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]">
                        <p className="text-base font-bold text-blue-500 sm:text-lg lg:text-xl">В работе: <span className="text-black">128</span></p>
                    </div>
                    <div className="rounded-xl bg-white px-6 py-4 shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]">
                        <p className="text-base font-bold text-blue-500 sm:text-lg lg:text-xl">Выполнено: <span className="text-black">128</span></p>
                    </div>
                </div>
        </section>
    );
}
