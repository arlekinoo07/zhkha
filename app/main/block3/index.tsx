import Image from "next/image";

export default function Block3() {
    return(
        <>
            <div className="bg-gray-200 flex gap-[32px] pl-[10px]">
                <div className="pl-[60px] py-[40px] flex flex-col gap-[32px]">
                    <div className="w-[800px] flex flex-col gap-[32px] bg-white shadow-2xl rounded-2xl px-[40px] py-[20px]">
                        <p className="text-blue-500 text-[30px] font-bold">Последние обращения</p>
                        <div className="flex flex-col gap-[16px] justify-center">
                            <div className="h-px bg-gray-300 w-full"></div>
                            <div className="font-bold flex items-center w-full">
                                <p className="pr-[96px]">№</p>
                                <p className="pr-[256px]">Тема</p>
                                <p className="pr-[176px]">Статус</p>
                                <p>Дата</p>
                            </div>
                            <div className="h-px bg-black w-full"></div>
                            <div className="font-semibold flex items-center w-full">
                                <p className="pr-[100px]">1.</p>
                                <p>Замена ламп в подъезде</p>
                                <button className="px-[16px] py-[4px] bg-green-500 rounded-lg text-white font-bold ml-[65px] w-[130px]">В работе</button>
                                <p className="pl-[128px]">24.12.2021</p>
                            </div>
                            <div className="h-px bg-gray-300 w-full"></div>
                            <div className="font-semibold flex items-center">
                                <p className="pr-[94px]">2.</p>
                                <p>Течь в стойке</p>
                                <button className="px-[16px] py-[4px] bg-blue-600 rounded-lg text-white font-bold ml-[158px] w-[130px]">Выполнено</button>
                                <p className="pl-[128px]">23.12.2021</p>
                            </div>
                            <div className="h-px bg-gray-300 w-full"></div>
                            <div className="font-semibold flex items-center">
                                <p className="pr-[93px]">3.</p>
                                <p>Уборка снега в подъезде</p>
                                <button className="px-[16px] py-[4px] bg-amber-500 rounded-lg text-white font-bold ml-[100px] w-[130px]">Новая</button>
                                <p className="pl-[152px]">21.12.2021</p>
                            </div>
                        </div>
                        <p className="text-blue-500 font bold cursor-pointer hover:underline outline-offset-4 ml-[600px] w-[130px]">Смотреть все <span className="text-black">{`>`}</span></p>
                    </div>
                    <div className="w-[800px] bg-white shadow-2xl rounded-2xl px-[40px] py-[20px] flex flex-col gap-[24px]">
                        <p className="font-bold text-blue-500 text-[30px]">Категории обращений</p>
                        <div className="h-px bg-gray-300 w-full"></div>
                        <div className='flex flex-col gap-[32px]'>
                            <div className='flex justify-between'>
                                <div className='px-[24px] bg-blue-100 rounded-lg w-fit py-[24px] flex gap-[16px]'>
                                    <div>
                                        <Image src="/photo1B3.png" alt="photo1" priority width={32} height={30}></Image>
                                    </div>
                                    <p className='text-[25px] font-semibold text-blue-400'>Сантехника</p>
                                </div>
                                <div className='px-[24px] bg-blue-100 rounded-lg w-fit py-[24px] flex gap-[16px]'>
                                    <div>
                                        <Image src="/photo2B3.png" alt="photo1" priority width={32} height={30}></Image>
                                    </div>
                                    <p className='text-[25px] font-semibold text-blue-400'>Электрика</p>
                                </div>
                                <div className='px-[24px] bg-blue-100 rounded-lg w-fit py-[24px] flex gap-[16px]'>
                                    <div>
                                        <Image src="/photo3B3.png" alt="photo1" priority width={32} height={30}></Image>
                                    </div>
                                    <p className='text-[25px] font-semibold text-blue-400'>Прочее</p>
                                </div>
                            </div>
                            <div className='px-[24px] bg-blue-100 rounded-lg w-fit py-[24px] flex gap-[16px]'>
                                <div>
                                    <Image src="/photo4B3.png" alt="photo1" priority width={32} height={30}></Image>
                                </div>
                                <p className='text-[25px] font-semibold text-blue-400'>Уборка</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[800px] bg-white shadow-2xl rounded-2xl px-[40px] py-[20px] flex flex-col gap-[24px]'>
                        <p className="font-bold text-blue-500 text-[30px]">Новости</p>
                        <div className="h-px bg-gray-300 w-full"></div>
                        <div className='flex flex-col gap-[16px] pb-[32px]'>
                            <div className='flex gap-[40px] items-center'>
                                <p className='text-[20px] font-semibold'>25.12.2021</p>
                                <p className='text-[20px] font-semibold text-blue-400 underline underline-offset-4 cursor-pointer'>Профилактика отопления</p>
                            </div>
                            <div className="h-px bg-gray-300 w-full"></div>
                            <div className='flex gap-[40px] items-center'>
                                <p className='text-[20px] font-semibold'>25.12.2021</p>
                                <p className='text-[20px] font-semibold text-blue-400 underline underline-offset-4 cursor-pointer'>Профилактика отопления</p>
                            </div>
                            <div className="h-px bg-gray-300 w-full"></div>
                        </div>
                    </div>
                </div>
                <div className=' py-[40px] flex flex-col gap-[36px]'>
                    <div className='bg-white shadow-2xl rounded-2xl px-[40px] py-[28px] flex flex-col gap-[32px] w-[500px] pb-[52px] pt-[40px]'>
                        <p className="font-bold text-blue-500 text-[30px]">Форма подачи обращения</p>
                        <div className="h-px bg-gray-300 w-full"></div>
                        <div className='flex flex-col gap-[19px]'>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='font-semibold'>ФИО:</p>
                                <input className='rounded-lg border border-gray-400 outline-black w-full py-[4px] px-[8px]'></input>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='font-semibold'>Адрес:</p>
                                <input className='rounded-lg border border-gray-400 outline-black w-full py-[4px] px-[8px]'></input>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='font-semibold'>Тема обращения:</p>
                                <input className='rounded-lg border border-gray-400 outline-black w-full py-[4px] px-[8px]'></input>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='font-semibold'>Описание проблемы:</p>
                                <input className='rounded-lg border border-gray-400 outline-black w-full py-[4px] px-[8px] h-[100px]'></input>
                            </div>
                            <button className='rounded-lg w-[200px] h-[40px] font-bold text-[20px] cursor-pointer bg-amber-500 text-white hover:shadow-2xl duration-300 ml-27 mt-[10px]'>Отправить</button>
                        </div>
                    </div>
                    <div className=' bg-white shadow-2xl rounded-2xl px-[40px] py-[28px] flex flex-col gap-[24px] w-[500px] pb-[90px]'>
                        <p className="font-bold text-blue-500 text-[30px]">Статистика</p>
                        <div className="h-px bg-gray-300 w-full"></div>
                        <p className="text-[24px] font-semibold text-center">Статусы заявок</p>
                        <div className="flex gap-[24px] items-center">
                            <Image src="/chart.png" alt="diagramma" priority width={200} height={100}></Image>
                            <div className="flex flex-col gap-[12px]">
                                <div className="flex items-center gap-[16px]">
                                    <div className="bg-yellow-300 w-[32px] h-[32px] border border-black"></div>
                                    <p className="font-semibold">Новые</p>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="bg-red-500 w-[32px] h-[32px] border border-black"></div>
                                    <p className="font-semibold">Отклонено</p>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="bg-blue-700 w-[32px] h-[32px] border border-black"></div>
                                    <p className="font-semibold">В работе</p>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="bg-green-500 w-[32px] h-[32px] border border-black"></div>
                                    <p className="font-semibold">Выполнено</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}