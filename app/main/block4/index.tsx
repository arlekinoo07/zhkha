import { PhoneForwarded } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Image from 'next/image'

export default function Block4() {
  return (
    <div className="flex pt-[40px] justify-center gap-[80px] pb-[40px] bg-gray-200">
                <Image src="/prime.jpg" alt="diagramma" priority width={700} height={100} className='rounded-xl'></Image>
                <div className=' bg-white shadow-2xl rounded-2xl px-[40px] py-[28px] flex flex-col gap-[24px] w-[500px] pb-[60px] h-fit'>
                    <p className="font-bold text-blue-500 text-[30px]">Контакты УК</p>
                    <div className="h-px bg-gray-300 w-full"></div>
                    <div className='flex flex-col gap-[24px]'>
                        <div className="flex gap-[16px]">
                            <PhoneForwarded className='text-blue-500'></PhoneForwarded>
                            <p className="font-semibold">Телефон: +7 912 345 67 89</p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Mail className='text-blue-500'></Mail>
                            <p className="font-semibold">Email: <span className="text-blue-500 cursor-pointer">info_zhkha@uk.prime.ru</span></p>
                        </div>
                        <div className="flex gap-[16px]">
                            <MapPin className='text-blue-500'></MapPin>
                            <p className="font-semibold">Адрес: г. Москва ул. Ленина, д. 5А</p>
                        </div>
                    </div>
                </div>
            </div>
  );
}