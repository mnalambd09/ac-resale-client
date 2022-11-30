import React from 'react';

const Products = ({ pro }) => {
    const { picture, price, resalePrice, sellerName, title, usesTime } = pro;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-96 p-5' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='text-left pl-5 font-extrabold text-green-600'>
                    <p>Price : {price}</p>
                    <p>Resale Price : ${resalePrice}</p>
                    <p>Seller Name : {sellerName}</p>
                    <p>Used Time : {usesTime}</p>
                </div>
                <div className="card-actions justify-end -mt-12">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;