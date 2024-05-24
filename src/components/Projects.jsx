import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <>
            <div id='projects' className='section px-3 px-lg-4 pt-5' style={{ minHeight: '80vh' }}>
                <div className='text-center '>
                    <h2 className='marker marker-center fw-bolder'>Projects</h2>
                </div>
                <div className=' container mt-5'>

                    <Slider {...settings} className='mt-5'>
                        <div className='p-4 '>
                            <div className='cd2'>
                                <img className='img-fluid' src={p1} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>IMC-Hospital Website</h3>
                                    <p className='text-light'>MERN Stack Project</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p2} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'></h3>
                                    <p>This is a chat app built using react and redux</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p3} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>Keep Note's</h3>
                                    <p className='text-light'>Document App using Firebase</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p4} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>EKART</h3>
                                    <p className='text-light'>E Commerce website with CRUD operations </p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p5} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>Employee Management System</h3>
                                    <p className='text-light'>Employee Management System with CRUD operations</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p6} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>Media Player</h3>
                                    <p className='text-light'>Media Player built using React and Redux</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p7} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>Skoda</h3>
                                    <p className='text-light'>Skoda website built using React Parallax Slider</p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='cd2'>
                                <img className='img-fluid' src={p8} alt="" />
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h3 style={{ color: 'yellow' }} className='fw-bolder'>Weather App</h3>
                                    <p></p>
                                    <div className="d-flex">
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-solid fa-link text-white"></i></button></a>
                                        <a href=""><button className='btn'><i style={{ fontSize: "30px" }} class="fa-brands fa-github text-white"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>


            </div>
        </>
    )
}

export default Projects