import React from 'react'

function Footer() {
    return (
        <>

            <footer className="pt-4 pb-4 text-center bg-light">
                <div className="container">
                    <div className="my-3">
                        <div className="h4 fw-bolder">Arun K K</div>
                        <p>Web Developer </p>
                        <div className="social-nav">
                            <nav role="navigation">
                                <ul className="nav justify-content-center">

                                    <li className="nav-item"><a  className="nav-link" href="https://github.com/Arunkk97" title="Github"
                                        target="_blank"><i className="fab fa-github text-dark"></i><span className="menu-title sr-only">Github</span></a>
                                    </li>

                                    <li className="nav-item"><a class="nav-link"
                                        href="" title="Facebook"><i
                                            className="fab fa-facebook text-dark"></i><span className="menu-title sr-only">Facebook</span></a></li>

                                    <li className="nav-item"><a className="nav-link" href=""
                                        title="Instagram"><i className="fab fa-instagram text-dark"></i><span
                                            className="menu-title sr-only">Instagram</span></a></li>

                                    <li className="nav-item"><a target="_blank" className="nav-link" href="https://www.linkedin.com/in/arun-k-k-78293a1b8/"
                                        title="LinkedIn"><i className="fab fa-linkedin text-dark"></i><span
                                            className="menu-title sr-only">LinkedIn</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="text-small text-secondary">
                        <div class="mb-1">&copy; Arun K K. All rights reserved.</div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer