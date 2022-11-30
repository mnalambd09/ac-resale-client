import React, { useEffect, useState } from 'react';
import Categorie from './Categorie';

const Categories = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://ac-resale-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>

            <div>
                <h1 className='text-5xl text-orange-600 mt-10 font-extrabold'>Please Select Your Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 auto my-10'>
                {
                    categories.map(categorie => <Categorie
                        key={categorie.id}
                        categorie={categorie}
                    ></Categorie>)
                }
            </div>
        </div>

    );
};

export default Categories;