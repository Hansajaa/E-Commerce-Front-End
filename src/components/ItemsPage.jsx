import React, { useEffect, useState } from 'react';
import AdminNavigationBar from '../common/AdminNavigationBar';
import ItemsTable from '../organisms/ItemsTable';
import axios from 'axios';

function Items(props) {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/v1/product/get-all")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    return (
        <div>
            <AdminNavigationBar></AdminNavigationBar>

            <div className='p-5'>
                <ItemsTable products={products}></ItemsTable>
            </div>
        </div>
    );
}

export default Items;