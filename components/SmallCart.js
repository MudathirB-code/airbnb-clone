import Image from 'next/image'

function SmallCart({img , location, distance}) {
    return (
        <div className="flex items-center mt-5 space-x-4 cursor-pointer hover:bg-gray-200 rounded-lg hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-14 w-14">
                <Image src={img} layout="fill" 
                    className=" rounded-lg"
                />
            </div>
            <div>
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCart
