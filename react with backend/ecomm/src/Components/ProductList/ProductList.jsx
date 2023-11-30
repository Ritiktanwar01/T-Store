import React from 'react'
import ProductNew from '../Product/ProductNew'
import ProductListStyle from '../ProductList/ProductListStyle.css'
import axios from 'axios';
import { useEffect, useState } from 'react'

function ProductList() {
  const [userdata, setuserdata]= useState([])
  useEffect(()=>{
    async function getdata(){
      const url = "http://127.0.0.1:8000/apidata/getproducts/"
      try{
        const user = await axios.get(url)
        // setuserdata(user.data)
        setuserdata(user.data)
        console.log(user)
      }catch (error){
          console.log(error)
      }
  }
  getdata()
  },[])
  return (
        <div className="product-list">
            <h1>Products</h1>
            { userdata.map((product, i)=>{
              return (
                <ProductNew key={i} tittle={product.product_name} imagesrc={product.product_image} desc={product.product_desc} itemid={product.product_id}/>
              )
            })
            }
        </div>
  )
}

export default ProductList