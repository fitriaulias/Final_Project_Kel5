import React from 'react'
import './Styles.css'

function About() {
  return (
    <div className='about-progress'>
        <div className="container mt-5 mb-2">
        
            <div className="row py-5">
                <h3>About Us</h3>
                <div className="col-md-4">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <img className="icon" alt="icon"/>
                                <div className="ms-2 c-details">
                                    <h5 className="mb-0">I Putu Gede Maysa Putra</h5> 
                                    <h6 className="mb-0">RCTN-KS05-022</h6>
                                </div>
                            </div>
                            <div className="badge"> <span>Mentoring ✓</span> </div>
                        </div>
                        <div className="mt-5">
                            <p className="mb-0">Mockup</p>
                            <p className="mb-0">Search</p>
                            <p className="mb-0">Styling Layout</p>
                            <div className="mt-5">
                                <div className="progress">
                                    <div 
                                        className="progress-bar" 
                                        role="progressbar" 
                                        style={{width: "80%"}} 
                                        aria-valuenow="50" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                    </div>
                                </div>
                                <div className="mt-3"> 
                                    <span className="text1">2 solved <span className="text2">of 3 task</span></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <img className="icon" alt="icon"/>
                                <div className="ms-2 c-details">
                                    <h5 className="mb-0">Dwi Samsiarto</h5> 
                                    <h6 className="mb-0">RCTN-KS05-023</h6>
                                </div>
                            </div>
                            <div className="badge"> <span>Mentoring ✓</span> </div>
                        </div>
                        <div className="mt-5">
                        <p className="mb-0">Movies</p>
                        <p className="mb-0">About</p>
                        <p className="mb-0">Styling Layout</p>
                            <div className="mt-5">
                                <div className="progress">
                                    <div 
                                        className="progress-bar" 
                                        role="progressbar" 
                                        style={{width: "100%"}} 
                                        aria-valuenow="50" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                    </div>
                                </div>
                                <div className="mt-3"> 
                                    <span className="text1">3 solved <span className="text2">of 3 task</span></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <img className="icon" alt="icon"/>
                                <div className="ms-2 c-details">
                                    <h5 className="mb-0">Fitri Aulia S.</h5> 
                                    <h6 className="mb-0">RCTN-KS05-024</h6>
                                </div>
                            </div>
                            <div className="badge"> <span>Mentoring ✓</span> </div>
                        </div>
                        <div className="mt-5">
                        <p className="mb-0">Navigation</p>
                        <p className="mb-0">Footer</p>
                        <p className="mb-0">Styling Layout</p>
                            <div className="mt-5">
                                <div className="progress">
                                    <div 
                                        className="progress-bar" 
                                        role="progressbar" 
                                        style={{width: "90%"}} 
                                        aria-valuenow="50" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                    </div>
                                </div>
                                <div className="mt-3"> 
                                    <span className="text1">2 solved <span className="text2">of 3 task</span></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About