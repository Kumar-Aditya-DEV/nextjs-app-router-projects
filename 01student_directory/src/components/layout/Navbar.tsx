"use client"
import React from 'react'
import { NavList } from '@/constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBarPage = () => {

  const pathName = usePathname();

  return (
    <nav className='flex pl-7 pr-7 p-1.5 justify-between gap-1 shadow-xl'>

      <div>
        <Link href="/students" className="font-bold text-slate-900">
            Student Directory
        </Link>
      </div>

      <div className='flex justify-between w-80'>
        {
          NavList.map((item) => {
            const isActive = pathName === item.href;

            return(
              <Link key={item.href} href={item.href} className={isActive ? "text-blue-500 underline" : "text-black"} >{item.label}</Link>
            )
          })
        }
      </div>

      <div>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default NavBarPage;
