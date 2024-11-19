import Link from 'next/link'
import React from 'react'

const Header:React.FC = () => {
    const navLists = [
        {id:1, name:"Home",path:"/"},
        {id:2, name:"About",path:"/about"},
        {id:3, name:"Conact",path:"/contact"},
        {id:4, name:"Blog",path:"/blog"}
    ]
  return (
    <header className='py-4 bg-slate-950 ' >
      <ul className='flex items-center justify-center space-x-6'>
            {navLists.map(nav => (
                <li key={nav.id}>
                    <Link href={nav.path} className='text-white text-[18px] font-bold hover:text-gray-400'>
                        {nav.name}
                    </Link>
                </li>
            ))}
      </ul>
    </header>
  )
}

export default Header
