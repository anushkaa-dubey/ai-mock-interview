"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname} from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path=usePathname();
    useEffect(() => {
        console.log("path ji")
    },[])
return (
    <div className='flex p-4 items-center justify-between bg-stone-400 shadow-sm'>
        <Image src="/logo.svg" width={50} height={30} alt="AI Mock Interview logo" />
        <ul className=' hidden md:flex gap-6'>
            <li
                className={`hover:text-primary hover:font-bold transition 
                    ${path=='/dashboard'&&'text-primary font-bold'}`}
            >
                Dashboard
            </li>
            <li className={`hover:text-primary hover:font-bold transition 
                    ${path=='/dashboard/faq'&&'text-primary font-bold'}`}>FAQ</li>
            <li className={`hover:text-primary hover:font-bold transition 
                    ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition 
                    ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it works</li>
        </ul>
        <UserButton />
    </div>
)
}
export default Header
