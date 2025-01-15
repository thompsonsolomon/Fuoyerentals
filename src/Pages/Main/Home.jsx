import React from 'react'
import "../../Components/Styles/Home.scss"
import { Footer, Header, Hero, ListingHero, Offers } from '../../Components/Main'
function Home() {
    return (
        <div>
            <div className="HeroCon">
                <Header />
                <Hero />
            </div>
            <ListingHero />
            <Offers />
            <Footer />
        </div>
    )
}

export default Home