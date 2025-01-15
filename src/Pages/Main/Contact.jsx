import React from 'react'
import { BreadCrum, ContactsContainer, Footer, Header } from '../../Components/Main'
import { Users } from '../../Components/Utils/Properties'

function Contact() {
  return (
    <div>
      <div className="listing">
        <Header />
        <BreadCrum text="Contact" />
      </div>
        <ContactsContainer users={Users} />
        <Footer />
    </div>
  )
}

export default Contact