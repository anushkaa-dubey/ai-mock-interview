import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex p-4 items-center>'> 
      <Image src="/logo.svg" width={100} height={50} alt="AI Mock Interview logo"/>
       <ul className='flex gap-6'>
        <li>Dashboard</li>
         <li>FAQ</li>
        <li>Upgrade</li>
        <li>How it works</li>
       </ul>
           <UserButton/>
    </div>
  )
}
export default Header
