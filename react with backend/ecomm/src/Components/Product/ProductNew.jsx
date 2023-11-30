import React, { useState } from 'react'
import ProductStyleNew from '../Product/ProductStyleNew.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ProductNew(props) {
  const Navigate = useNavigate()
  const itemid = props.itemid
  const itemname= props.tittle
  const verifyuserSCart = () => {
    const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
    const carturl = 'http://127.0.0.1:8000/apidata/addcart/'
    const dataitem = {
      "token": window.sessionStorage.getItem("data"),
      "item": itemid,
      "itemname": itemname
    }
    const data = { "token": window.sessionStorage.getItem("data") }
    axios.post(url, data).then((response) => {
      if (response.data.payload == "authanticated") {
        axios.post(carturl, dataitem)
      } else {
        Navigate('/login')
      }
    })
  }
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '100%', margin: 'auto' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img style={{ width: '100%', height: '100%' }} src={'http://127.0.0.1:8000' + props.imagesrc} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <input type="hidden"  value={props.itemid} />
              <input type="hidden" value={props.tittle}  />
              <h5 className="card-title">{props.tittle}</h5>
              <p className="card-text">{props.desc}</p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="col-md-6">
              <button type="button" className="btn btn-danger btn-lg" onClick={() => verifyuserSCart()}>Add Cart</button>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-primary btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductNew