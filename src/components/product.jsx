import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {

    const navigate = useNavigate()
    const handleAll = () => {
        navigate('./products')
    }



    return (
        <div className='flex justify-center space-x-3'>
            <button className='border  px-1' onClick={handleAll}>All</button>
            <button className='border px-1'>Men's Clothing</button>
            <button className='border px-1'>Women's Clothing</button>
            <button className='border px-1'>Jwellery</button>
            <button className='border px-1'>Electronics</button>


        </div>
    )
}

export default Product
