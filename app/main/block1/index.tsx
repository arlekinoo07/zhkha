import Image from "next/image";

export default function Block1() {
    return(
        <>
            <div className="">
                <div className="">
                    <Image src="/block1Bg.jpeg" alt="block1Bg" fill priority className=""></Image>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-transparent absolute pb-[456px] pt-[80px] px-[80px]">
                    <div className="text-white font-bold flex flex-col gap-8">
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
        </>
    );
}
