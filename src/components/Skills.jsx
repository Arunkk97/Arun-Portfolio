import React from 'react'
import { ProgressBar } from 'react-bootstrap'


function Skills() {
    return (
        <>
            <div id='skills' className=' section px-3 px-lg-4 pt-5 text-center mt-5'>
                <h2 className='fw-bolder marker marker-center'>My Skills</h2>
            </div>

            <div class="text-center mt-5">
                <p  class="mx-auto mb-3" >I am a quick learner and specialize in the multitude of skills
                    required for Web <br />Application Development</p>
            </div>

            <div style={{minHeight:'50vh'}} className=' container my-5 bg-light p-3'>
                <div className='row'>
                    <div className='col-md-5 mt-5'>
                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">HTML5</span><span>80%</span></div>
                            <div className="progress my-1">
                            <ProgressBar  className='w-100 rounded ' now={80} />
                              
                            </div>
                        </div>

                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">CSS</span><span>80%</span></div>
                            <div className="progress my-1">
                            <ProgressBar className='w-100 rounded' now={80} />
                            </div>
                        </div>

                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">Javascript</span><span>60%</span></div>
                            <div className="progress my-1">
                            <ProgressBar className='w-100 rounded' now={60} />
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 ms-auto mt-5'>
                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">React JS</span><span>80%</span></div>
                            <div className="progress my-1">
                            <ProgressBar className='w-100 rounded' now={80} />
                            </div>
                        </div>

                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">Node/Express Js</span><span>70%</span></div>
                            <div className="progress my-1">
                            <ProgressBar className='w-100 rounded' now={70} />
                            </div>
                        </div>

                        <div className='py-1'>
                            <div className="d-flex text-small fw-bolder "><span className="me-auto">Mongo DB</span><span>70%</span></div>
                            <div className="progress my-1">
                            <ProgressBar className='w-100 rounded' now={70} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Skills