import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SinglePage = () => {

    const [data, setData] = useState([{ id: 0, title: '', url: '' }])

    const getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos', {
            })
            .then((response) => {
                if (response.status == 200) {
                    setData(response.data)
                }
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='row' style={{ marginBottom: '20px' }}>
                {data.map((item) => (
                    <div className='col-md-3'>
                        <img className="card-text" src={item.url} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default SinglePage