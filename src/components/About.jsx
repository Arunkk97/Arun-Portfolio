import React, { useEffect } from 'react'
import profile from '../assets/profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div style={{minHeight:'90vh'}} className='section px-3 px-lg-4 pt-5'  id='about'>
                <div className='container mt-5'>
                    <div className='row '>
                        <div className="col-lg-6">
                            <h2 className='fw-bolder'>Hello! I'm Arun K K</h2>
                            <p style={{textAlign:'justify'}} className='mt-3'>I am a skilled MERN-stack developer with expertise in various technologies, such as JavaScript, Node.js, Express, React.js, and MongoDB. I have honed my ability to prioritize tasks and manage time effectively through completing projects and receiving positive reviews. This ensures that projects are completed in a timely manner and meet the highest standards of quality.</p>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">Email: arunkk1997@gmail.com</div>
                            </div>
                          
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">Phone: 9539500749</div>
                            </div>
                           
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">Address: Kannur,Kerala</div>
                            </div>
                          
                          
                        </div>

                        <div data-aos="zoom-out-down" className="col-lg-6 d-flex justify-content-center align-items-center">
                            <img style={{borderRadius:'150px'}} className='w-50' src={profile} alt="" />
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default About