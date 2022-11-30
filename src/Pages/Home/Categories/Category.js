import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Products from './Products';


const Category = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    
    
    useEffect(() => {
        fetch(`https://ac-resale-server.vercel.app/product/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    if(!user?.uid){
        return navigate('/category')
    }

    return (

        <div>
            <h1 className='text-5xl text-orange-600 mt-10 font-bold'>Please Choice Your Product from the List </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 auto my-10'>
            {
                product.map(pro => <Products
                    key={pro._id}
                    pro={pro}
                ></Products>)
            }
            </div>
        </div>
    );
};

export default Category;