import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCart from '../components/SmallCart'

export default function Home({ exploreData , cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl m-auto px-8 sm:px-16">
        <section className="pt-8">
          <p className="text-2xl mb-8 font-semibold">Explore Nearby</p>
          {/* get some Data from the server.... */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((items) => (
            <SmallCart
              key= {items.img}  
              img = {items.img}
              location = {items.location}
              distance = {items.distance}
            />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold py-8">Live anywhere</h2>
            <div className="flex space-x-5 overflow-scroll scrollbar-hide p-2 -ml-3">
              {cardsData?.map((item) => (
              <MediumCard 
                key= {item.img}
                img= {item.img}
                title= {item.title}
              />
            ))}
            </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by airbnb"
          ButtonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then((response) => response.json() );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((response) => response.json());

  return{
    props:{
      exploreData,
      cardsData,
    }
  }

}
