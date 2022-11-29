import React from 'react';

const Categorie = ({ categorie }) => {
    const { name, img, } = categorie;
    return (
        <div className="card card-compact bg-orange-100 shadow-xl">
            <figure><img className='h-96' src={img} alt="Shoes" /></figure>
            <div className="card-body">

                <div className="card-actions justify-between items-bottom">
                    <h2 className="card-title">{name}</h2>
                    <button className="btn btn-primary">View All</button>
                </div>
            </div>
        </div>
    );
};

export default Categorie;