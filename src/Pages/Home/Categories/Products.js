import React from 'react';

const Products = ({ pro }) => {
    const { picture, price, resalePrice, sellerName, title, usesTime } = pro;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-96' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <p>{resalePrice}</p>
                <p>{sellerName}</p>
                <p>{usesTime}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;