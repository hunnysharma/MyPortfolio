import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return (
        <>


            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top img-fluid" alt="..." style ={{width:390 , height:200}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-primary">Live Demo</NavLink>
                    </div>
                </div>
            </div>

        </>)
}

export default Card
