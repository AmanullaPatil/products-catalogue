import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        if (res) {
            console.log(res)
            setData(res.data)

        }
    }


    return (
        <div>
            {
                data ? data.map((e, i) => (
                    <>
                        <div> {e.title}</div>
                        <img src={e.image} alt={e.title} />
                    </>
                )) :
                    <h1>No Data found</h1>
            }



        </div>
    )
}

export default Products
