import Image from "next/image";
import Link from "next/link";

export default function Block1() {
    return(
        <section className="relative min-h-[520px] w-full overflow-hidden md:min-h-[640px]">
            <Image
                src="/block1Bg.jpeg"
                alt="Фон первого блока"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/70 to-transparent">
                <div className="relative z-10 flex min-h-[520px] items-center px-4 py-12 sm:px-6 md:min-h-[640px] md:px-10 md:py-16 xl:px-20">
                    <div className="flex max-w-[680px] flex-col gap-6 font-bold text-white md:gap-8">
                        <div className="flex flex-col gap-4 md:gap-5">
                            <p className="text-3xl leading-tight sm:text-4xl md:text-5xl">Учет обращения жильцов</p>
                            <div className="flex flex-col gap-4 md:gap-5">
                                <div className="bg-white h-px"></div>
                                <p className="text-base leading-relaxed sm:text-lg md:text-xl">Система для регистрации и обработки заявок жильцов</p>
                            </div>
                        </div>
                        <div>
                            <Link href="/appeals/new" className="inline-flex cursor-pointer rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-2xl sm:text-base">Подать обращение</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
