import { PhoneForwarded } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

export default function Block4() {
  return (
    <section className="bg-gray-200 px-4 pb-10 pt-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-start">
                <Image src="/prime.jpg" alt="diagramma" priority width={700} height={100} className='h-auto w-full rounded-xl object-cover transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] lg:max-w-[58%]'></Image>
                <div className='flex h-fit w-full flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] sm:px-8 lg:max-w-[500px]'>
                    <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Контакты УК</p>
                    <div className="h-px w-full bg-gray-300"></div>
                    <div className='flex flex-col gap-6'>
                        <div className="flex gap-4">
                            <PhoneForwarded className='text-blue-500'></PhoneForwarded>
                            <p className="font-semibold">Телефон: +7 912 345 67 89</p>
                        </div>
                        <div className="flex gap-4">
                            <Mail className='text-blue-500'></Mail>
                            <p className="font-semibold">Email: <Link href="mailto:info_zhkha@uk.prime.ru" className="text-blue-500 transition duration-300 hover:text-blue-700 hover:underline">info_zhkha@uk.prime.ru</Link></p>
                        </div>
                        <div className="flex gap-4">
                            <MapPin className='text-blue-500'></MapPin>
                            <p className="font-semibold">Адрес: г. Москва ул. Ленина, д. 5А</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}
