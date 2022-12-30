import React, { useState, useEffect } from 'react'

const Header = () => {
    return (
        <>
            <div className='row ' style={{ borderBottom: '2px solid rgba(228, 220, 220, 0.63)', marginBottom: '30px' }}>
                <div className='col-md-10'>
                    <p style={{fontWeight: 'bold', fontSize: '22px'}}>My Album</p>
                </div>
                <div className='col-md-2 drop'>
                    <select className="form-select" aria-label="Default select example">
                        <option selected> Select</option>
                        <option value="1">ASC</option>
                        <option value="2">Descending</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default Header