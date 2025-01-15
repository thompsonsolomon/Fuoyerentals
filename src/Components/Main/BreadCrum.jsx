import React from 'react'
import "../../Components/Styles/BreadCrum.scss"
import { Link } from 'react-router-dom'
function BreadCrum({ text }) {
    return (
        <div>
            <div className="Bread home-section layout-1 layout-6">
                <div className="home-main">
                    <div className="container-fluid">
                        <div className="breadcrumb-content">
                            <div>
                                <h2>{text}</h2>
                                <nav aria-label="breadcrumb" className="theme_breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item_active" aria-current="page">
                                            {text}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BreadCrum