import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcon = [
    {src: '/assets/icons/search.svg', alt:'search'},
    {src: '/assets/icons/black-heart.svg', alt:'heart'},
    {src: '/assets/icons/user.svg', alt:'user'},

]

const Navbar = () => {
  return (
    <header className='w-full py-7'>
        <nav className='mx-5 flex justify-between'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src="/assets/icons/logo.svg"
                    width={27}
                    height={27}
                    alt='logo'
                />

                <p className='nav-logo'>
                    Price<span className='text-primary'>Wise</span>
                </p>
            </Link>

            <div className="flex items-center gap-3">
            {navIcon.map((item) => {
                return (
                <Image
                    key={item.alt}
                    src={item.src}
                    alt={item.alt}
                    width={28}
                    height={28}
                    className='object-contain cursor-pointer'
                />
            )})}
            </div>
        </nav>
    </header>
  )
}

export default Navbar