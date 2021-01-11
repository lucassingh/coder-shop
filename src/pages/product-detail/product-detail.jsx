import React, {useEffect, useState} from 'react'
import { ProductsData } from '../../components/products/ProductsData';
import {useParams} from 'react-router-dom';
import ProductDetail from '../../components/products/product-detail/ProductDetail'

function ProductDetailPage() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve) => {
        const selectedProduct = ProductsData.filter(item => item.id === parseInt(id));
        resolve(selectedProduct[0]);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <ProductDetail item={product}/>
        </>
    )
}

export default ProductDetailPage
