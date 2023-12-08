import React from 'react'
import ProductNewCart from '../Product/ProductNewCart'
import ProductListStyle from '../ProductList/ProductListStyle.css'
import axios from 'axios';
import { useEffect, useState } from 'react'

function CartList() {
  const [userdata, setuserdata]= useState([])
  useEffect(()=>{
    async function getdata(){
      const url = "http://127.0.0.1:8000/apidata/getcartuser/"
      const data ={
        "token":window.sessionStorage.getItem("data")
      }
      try{
        const user = await axios.post(url,data)
        setuserdata(user.data)
      }catch (error){
          console.log(error)
      }
  }
  getdata()
  },[])
  return (
        <div className="product-list">
            <h1>Products</h1>
            {/* subArr => subArr[0] */}
            { userdata.map((product, i)=>{
              return (
                <ProductNewCart key={i} tittle={product[0].product_name} imagesrc={product[0].product_image} desc={product[0].product_desc} itemid={product[0].product_id}/>
              )
            })
            }
        </div>
  )
}

export default CartList