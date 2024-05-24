import React from 'react'
import exp from '../assets/exp.svg'
import { Card } from 'react-bootstrap'


function Experience() {
    return (
        <>
            <div id='experience' className='container section px-3 px-lg-4 pt-5'>
                <div className='text-center mt-5 mb-5'>
                    <h2 className='fw-bolder marker marker-center'>Experience</h2>
                </div>

                <div className='row mt-5'>
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                        <div className='card mb-3'>
                            <div className='card-header px-3 py-2'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h3 className="h5 mb-1 fw-bolder">Full Stack Development</h3>
                                        <div className="text-muted text-small">Luminar Technolab,Kochi <small>( Nov 2023-present)</small></div>
                                    </div>
                                    <img style={{ width: '48px' }} src={exp} alt="" />
                                </div>
                            </div>
                            <div className=' px-3 py-2'>
                                <p>Languages : JavaScript, Node.js, HTML, CSS</p>
                                <p>Frameworks : Express, Bootstrap</p>
                                <p>Libraries : React.js</p>
                                <p>Database : MongoDB</p>
                                <p>Dev Tools : Visual Studio Code,Github, Postman</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3"></div>

                </div>
            </div>
        </>
    )
}

export default Experience