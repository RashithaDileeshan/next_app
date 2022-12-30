import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <label style={{ fontSize: '15px', fontWeight: 'bold', textAlign: 'center', justifyContent: 'center' }}>Login</label>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6' style={{ textAlign: "center", margin: "0px 10px 10px 23px" }}>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6' style={{ textAlign: "center", margin: "0px 0px 0px 23px" }}>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                        </div>
                        <input type="Password" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login