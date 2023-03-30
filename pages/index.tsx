import { FC } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import data from "../data.json";
import LargeCard from "@/components/LargeCard";
import LargeCardImg from "../public/largeCardImg.webp";
import Footer from "@/components/Footer";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Travel</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {data.cardsData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={LargeCardImg}
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
