import React, { useState } from 'react'
import ProductStyleNew from '../Product/ProductStyleNew.css'
import axios from 'axios'

function ProductNewCart(props) {
  const removeitem = async ()=>{
    const url = "http://127.0.0.1:8000/apidata/removeitem/"
    const data = {
      'token':sessionStorage.getItem("data"),
      'itemid': props.itemid
    }
    try{
          await axios.post(url,data)
          window.location.reload()
        }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div className="card mb-3" style={{maxWidth: '100%',margin:'auto'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{width:'100%' , height:'100%'}} src={'http://127.0.0.1:8000/media/'+props.imagesrc} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">{props.tittle}</h5>
        <p className="card-text">{props.desc}</p>
        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
    <div className="col-md-4 d-flex">
      <div className="col-md-6">
        <input type="hidden"/>
      <button type="button" className="btn btn-danger btn-lg" onClick={removeitem}>Remove</button>
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

export default ProductNewCart