import React, { useEffect } from 'react'
import hello from '../assets/hello.svg'
import Typewriter from 'typewriter-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className='cover bg-light'>
                <div className='container pt-5'>
                    <div className='row '>
                        <div className="col-lg-6">
                            <img className='img-fluid' src={hello} alt="" />
                        </div>
                        <div className="col-lg-6 ">
                            <p style={{ fontSize: '20px' }} className='mt-5 '>Hello!</p>

                            <div data-aos="zoom-in-left">
                                <h1 className='fw-bolder marker'>I'm Arun K K</h1>
                            </div>
                            <div className=' fw-bolder mt-4  ' style={{ fontFamily: 'cursive', fontSize: '30px' }}>
                                <Typewriter
                                    options={{
                                        strings: ["MERN Stack Developer", "{Crafting Interactive experiences}", "#Building Visually Stunning Websites"],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50
                                    }}
                                />
                            </div>
                            <div className='d-flex mt-2'>
                                <a data-aos="zoom-in-right" className='text-dark ' target='_blank' href="https://github.com/Arunkk97"><i class="fa-brands fa-github"></i></a>
                                <a data-aos="zoom-in-left" className='text-dark' target='_blank' href="https://www.linkedin.com/in/arun-k-k-78293a1b8/"><i class="fa-brands fa-linkedin ms-3"></i></a>
                            </div>
                            <a href='#contact'> <button style={{ borderRadius: '20px' }} className='btn btn-outline-primary mt-3 px-3'>Get In Touch <i class="fa-solid fa-arrow-right"></i></button></a>
                        </div>


                    </div>

                </div>
            </div>
            <div className='wave-bg '></div>
          
        </>
    )
}

export default Home