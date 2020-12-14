import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <>
      <section id='header' className = 'd-flex align-items-center '>
        <div className='container-fluid' >
          <img height ="80 px" className="hero" src="https://instagram.fjai1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/130807449_229912048550602_5087209550368364432_n.jpg?_nc_ht=instagram.fjai1-2.fna.fbcdn.net&_nc_ohc=qZ2YZcmtOSIAX9gzk1A&tp=1&oh=ea2b0bc7a857ddf520d1fa9ec03be4a2&oe=600083F2" alt="avtar"/>
          <div className='row' >
            <div className='col-10 mx-auto'>
              <div className='row' >
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                  <h1> {props.name} <strong className='brand-name'>Himanshu Sharma</strong></h1>
                  <h2 className='my-3'>
                  I'm Front End Developer in creating websites and interfaces and having 1+ years of experience. I'm energetic, self paced and detail oriented
                  engineer with strong knowledge of HTML / HTML5, CSS / CSS3, JavaScript, Bootstrap, and Reactjs.
                </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                  <img src={props.imgsrc} className='img-fluid animated ' alt='image not found' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
