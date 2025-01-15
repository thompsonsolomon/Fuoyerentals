import React from 'react'
import { BreadCrum, Footer, Header, ListingContainer } from '../../Components/Main'
import { PropertiesData } from '../../Components/Utils/Properties'
function Listing() {
  return (
    <div>
      <div className="listing">
        <Header />
        <BreadCrum text="Listings" />
      </div>
      <ListingContainer properties={PropertiesData} />
      <Footer />
    </div>
  )
}

export default Listing