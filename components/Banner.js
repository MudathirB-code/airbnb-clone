import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500] 2xl:h-[600px] ">
            <Image src="https://links.papareact.com/0fm" 
                layout="fill"
                objectFit="cover"
            />
            <div className="relative top-1/2 w-full text-center">
                <p className="text-sm md:text-lg font-medium">Not sure where to go? Perfect</p>
                <button className="bg-white px-8 py-3 text-purple-500 font-bold shadow-md rounded-full m-3 hover:shadow-xl active:scale-90 transition duration-150 outline-none">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
