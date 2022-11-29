import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({ categorie }) => {
    const { name, img, } = categorie;
    return (
        <div className="card card-compact bg-orange-100 shadow-xl">
            <figure><img className='h-96' src={img} alt="Shoes" /></figure>
            <div className="card-body">

                <div className="card-actions justify-between items-bottom">
                    <h2 className="card-title">{name}</h2>
                    <Link to={`/category/${categorie.id}`} className="btn btn-primary">View All</Link>
                </div>
            </div>
        </div>
    );
};

export default Categorie;