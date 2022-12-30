import Head from 'next/head'
import { Inter } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
      {data.map((item) => (
        <div>
          <div className="row" style={{ marginBottom: '20px' }}>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <Link href={`/singlePage?id=${item.id}`}>
                    <div className='row'>
                      <div className='col-md-2'>
                        <img className="card-text" src={item.url} style={{ width: '100%' }} />
                      </div>
                      <div className='col-md-10'>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <Link href={`/singlePage?id=${item.id}`}>
                    <div className='row'>
                      <div className='col-md-2'>
                        <img className="card-text" src={item.url} style={{ width: '100%' }} />
                      </div>
                      <div className='col-md-10'>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
