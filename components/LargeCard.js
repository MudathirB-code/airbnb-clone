import Image from 'next/image'

function LargeCard({img , title , description , ButtonText}) {
    return (
        <section className="relative py-16">
            <div className="relative h-80 min-w-[300px] cursor-pointer">
                <Image src={img} 
                    layout="fill"
                    objectFit="caver"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h2 className="text-4xl font-mono w-64 mb-3">{title}</h2>
                <p className="text-xl mb-3">{description}</p>

                <button className="text-sm bg-gray-800 text-white px-4 py-2 rounded-lg">{ButtonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
