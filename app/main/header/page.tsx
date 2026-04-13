"use client";
import { House } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import Link from "next/link";

export default function Header1() {
    return(
        <header className='relative z-10 bg-white'>
            <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-16'>
                <Link href="/" className='flex w-fit items-center gap-4'>
                    <House className='text-blue-500'/>
                    <p className='text-sm font-bold text-blue-500 sm:text-base'>УК &quot;Наш Дом&quot;</p>
                </Link>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8'>
                    <div className='flex flex-wrap gap-3 text-sm font-semibold text-blue-500 sm:gap-6 sm:text-base'>
                        <Link href="/" className='cursor-pointer'>Главная</Link>
                        <p className='cursor-pointer'>Обращения</p>
                        <p className='cursor-pointer'>Отчеты</p>
                        <p className='cursor-pointer'>Профиль</p>
                    </div>
                    <Link href="/profil">
                        <UserRoundPen className='cursor-pointer text-blue-500'/>
                    </Link>
                </div>
            </div>
        </header>
    );
}
