import Image from 'next/image'
import { SearchIcon,GlobeAltIcon, MenuIcon , UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky bg-white top-0 z-50 grid grid-cols-3
                 shadow-md p-4 md:px-10'>
            <div className='relative flex items-center cursor-pointer my-auto h-10'>
                <Image src="https://links.papareact.com/qd3"
                layout="fill" objectFit='contain'
                objectPosition='left' />
            </div>

            <div className="flex items-center hover:shadow-lg cursor-pointer border-2 rounded-full py-2 shadow-md">
                <input type="text" placeholder="Start your Search" className="flex-grow px-3 cursor-pointer bg-transparent outline-none text-sm text-gray-400 " />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full cursor-pointer p-2 md:mx-2" />
            </div>
            <div className="flex items-center space-x-6 text-gray-700 font-medium justify-end">
                <p className="hidden md:inline hover:bg-gray-100 p-2 rounded-full">Become a host</p>
                <GlobeAltIcon className="h-10 cursor-pointer hover:bg-gray-100 p-2 rounded-full" />
                <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg">
                    <MenuIcon className="h-5"/>
                    <UserCircleIcon className="h-5"/>
                </div>
            </div>

        </header>
    )
}

export default Header
