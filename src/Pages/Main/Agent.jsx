import React from 'react'
import { AgentsContainer, BreadCrum, Footer, Header } from '../../Components/Main'
import { Users } from '../../Components/Utils/Properties'

function Agent() {
  return (
    <div>
      <div className="listing">
        <Header />
        <BreadCrum text="Agents" />
      </div>
      <AgentsContainer users={Users}/>
      <Footer />
    </div>
  )
}

export default Agent