"use client";
import { House } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import Link from "next/link";

export default function Header1() {
    return(
        <>
            <div className='flex justify-between items-center px-[160px] py-[40px] relative z-10 bg-white'>
                <div className='flex items-center justify-center gap-[16px]'>
                    <House className='text-blue-500'/>
                    <p className='text-blue-500 font-bold'>УК &quot;Наш Дом&quot;</p>
                </div>
                <div className='flex gap-[80px]'>
                    <div className='flex gap-[32px] font-semibold text-blue-500'>
                        <p className='cursor-pointer'>Главная</p>
                        <p className='cursor-pointer'>Обращения</p>
                        <p className='cursor-pointer'>Отчеты</p>
                        <p className='cursor-pointer'>Профиль</p>
                    </div>
                    <Link href="/profil">
                        <UserRoundPen className='text-blue-500 cursor-pointer'/>
                    </Link>
                </div>
            </div>
        </>
    );
}
