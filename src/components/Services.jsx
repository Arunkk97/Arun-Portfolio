import React from 'react'
import mern from '../assets/mern.svg'

function Services() {
    return (
        <>
            <div style={{ minHeight: '90vh' }} className='section px-3 px-lg-4 pt-5 '  id='services'>
                <div className='container text-center'>
                    <h2 className='fw-bolder marker marker-center'>My Services</h2>
                </div>
                <div className='text-center mt-5'>
                    <p>I offer services fit for any website or app. I can quickly maximize timely deliverables <br /> for real-time schemas.</p>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <img src={mern} alt="" />
                </div>
                <div className='text-center mt-4'>
                    <h4 className='fw-bolder'>MERN Stack Development</h4>

                </div>
            </div>
        </>
    )
}

export default Services