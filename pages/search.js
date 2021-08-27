
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCart from "../components/InfoCart";
import Footer from "../components/Footer";

function Search({ searchResult }) {
    const router = useRouter();

   const { location , startDate , endDate , numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate) , "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate) , "dd MMMM yy")

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />
            <main>
                <section className="m-10">
                    <p className="text-xs mt-2 mb-6"> 300+ stays. {range} - for {numberOfGuests} guests  </p>
                    <h2 className="text-3xl font-bold">Stays in {location} </h2>
                <div className="hidden md:inline-flex mt-3 mb-5 space-x-3 whitespace-nowrap">
                    <p className="button">Free cancellation</p>
                    <p className="button">Type of place</p>
                    <p className="button">Price</p>
                    <p className="button">Instant Book</p>
                    <p className="button">More Filters</p>
                </div>
                <div className="flex flex-col">
                   {searchResult.map(({img,location,title, description, star,price, total}) =>(
                    <InfoCart 
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                    />
                ))} 
                </div>
                
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps(){
    const searchResult = await fetch("https://links.papareact.com/isz")
    .then((resp) => resp.json());

    return{
        props:{
            searchResult,
        }
    }
}
