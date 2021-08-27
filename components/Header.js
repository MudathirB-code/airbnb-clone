import Image from 'next/image'
import { SearchIcon,GlobeAltIcon, MenuIcon , UserCircleIcon,UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {

    const [searchInput , setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate , setEndDate] = useState(new Date());
    const [numberOfGuests , setNumberOfGuests] = useState(1);
    const router = useRouter();
   

    const resetInput = () =>{
        setSearchInput("");
    }

    const search = () =>{
        router.push({
            pathname:"/search",
            query:{
                location:searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests,
            }
        })
    }
    
    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    

    return (
        <header className='sticky bg-white top-0 z-50 grid grid-cols-3
                 shadow-md p-4 md:px-8'>
            <div  className='relative flex items-center cursor-pointer my-auto h-10'>
                <Image src="https://links.papareact.com/qd3"
                layout="fill" objectFit='contain'
                objectPosition='left' 
                onClick={() => router.push(`/`)}
                />
                
            </div>

            <div className="flex items-center hover:shadow-lg cursor-pointer border-2 rounded-full py-2 shadow-md">
                <input value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} 
                type="text" placeholder={placeholder || "Start your Search"} className="flex-grow px-2 overflow-hidden cursor-pointer bg-transparent outline-none text-gray-400 " />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full cursor-pointer p-2 md:mx-1" />
            </div>
            <div className="flex items-center space-x-6 text-gray-700 font-medium justify-end">
                <p className="hidden md:inline md:text-sm lg:text-lg hover:bg-gray-100 p-2 rounded-full">Become a host</p>
                <GlobeAltIcon className="h-10 cursor-pointer hover:bg-gray-100 p-2 rounded-full" />
                <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-lg">
                    <MenuIcon className="h-5"/>
                    <UserCircleIcon className="h-5"/>
                </div>
            </div>
            {searchInput && 
            <div className="flex flex-col col-span-3 mx-auto">
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#4c1b61"]}
                    onChange={handleSelect}
                />
                <div className="flex items-center border-b mb-5">
                    <h2 className="text-xl font-semibold flex-grow">Number of Guests</h2>
                    <UsersIcon className="h-3" />
                    <input
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    min={1} 
                    type="number" className="w-12 text-lg pl-3 text-red-500 outline-none" />
                </div>
                <div className="flex">
                    <button onClick={resetInput} className="flex-grow text-gray-500 hover:text-gray-700">Cancel</button>
                    <button onClick={search} className="flex-grow text-red-400 hover:text-red-700">Search</button>
                </div>
            </div>
            }

        </header>
    )
}

export default Header
