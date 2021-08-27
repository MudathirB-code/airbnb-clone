import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

function InfoCart({img, location, title, description, star, price, total}) {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t">
           <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img} layout="fill" objectFit="caver" className="rounded-lg" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
               <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-6 cursor-pointer" />
                </div> 
                <p className="text-xl">{title}</p>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-2">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        {star}
                    </p>
                    <div>
                        <p className="text-lg lg:text-lg font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default InfoCart
