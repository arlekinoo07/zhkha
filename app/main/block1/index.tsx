import Image from "next/image";

export default function Block1() {
    return(
        <section className="relative min-h-[640px] w-full overflow-hidden">
            <Image
                src="/block1Bg.jpeg"
                alt="Фон первого блока"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/70 to-transparent">
                <div className="relative z-10 flex min-h-[640px] items-start px-[80px] pt-[80px]">
                    <div className="text-white font-bold flex max-w-[680px] flex-col gap-8">
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[40px]">Учет обращения жильцов</p>
                            <div className="flex flex-col gap-[20px]">
                                <div className="bg-white h-px"></div>
                                <p className="text-[20px]">Система для регистрации и обработки заявок жильцов</p>
                            </div>
                        </div>
                        <div>
                            <button className="rounded-md bg-amber-600 py-[8px] px-[24px] cursor-pointer hover:shadow-2xl duration-300">Подать обращение</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
